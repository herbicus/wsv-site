import type { ReactNode } from 'react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

interface ScrollContextProps {
  isAboveFold: boolean;
  isScrollEnd: boolean;
  isScrollStart: boolean;
  isScrollUp: boolean;
  inView: boolean;
  setInView: React.Dispatch<React.SetStateAction<boolean>>;
  scrollY: number;
}

const initialValues: {
  foldScroll: number;
  maxScroll: number;
  scrollY: number;
} = {
  foldScroll: 0,
  maxScroll: Infinity,
  scrollY: 0,
};

export const ScrollContext = React.createContext<ScrollContextProps | null>(
  null
);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [inView, setInView] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(initialValues.scrollY);
  const foldScroll = useRef<number>(initialValues.foldScroll);
  const maxScroll = useRef<number>(initialValues.maxScroll);
  const previousY = useRef<number>(initialValues.scrollY);

  const onResize = useCallback(() => {
    foldScroll.current = window.innerHeight * 0.5625 + 10;
    maxScroll.current = document.body.scrollHeight - window.innerHeight - 10;
  }, []);

  const onScroll = useCallback(() => {
    previousY.current = scrollY;
    setScrollY(window.pageYOffset);
  }, [scrollY]);

  const isAboveFold = useMemo(() => {
    return scrollY <= foldScroll.current;
  }, [scrollY]);

  const isScrollEnd = useMemo(() => {
    return scrollY >= maxScroll.current;
  }, [scrollY]);

  const isScrollStart = useMemo(() => {
    return scrollY === 0;
  }, [scrollY]);

  const isScrollUp = useMemo(() => {
    return scrollY - previousY.current < 0;
  }, [scrollY]);

  useEffect(() => {
    const handleResize = () => {
      onResize();
    };

    const handleScroll = () => {
      onScroll();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onResize, onScroll]);

  useEffect(() => {
    onResize();
  }, []);

  const scrollContextValue: ScrollContextProps = useMemo(
    () => ({
      isAboveFold,
      isScrollEnd,
      isScrollStart,
      isScrollUp,
      inView,
      setInView,
      scrollY,
    }),
    [
      isAboveFold,
      isScrollEnd,
      isScrollStart,
      isScrollUp,
      inView,
      setInView,
      scrollY,
    ]
  );

  return (
    <ScrollContext.Provider value={scrollContextValue}>
      {children}
    </ScrollContext.Provider>
  );
};
