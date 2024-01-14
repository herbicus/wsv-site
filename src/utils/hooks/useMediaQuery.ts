import { useEffect, useRef, useState } from 'react';

import useEventListener from './useEventListener';

export const MIN_WIDTH_DESKTOP = 1024;
export const MEDIA_QUERY_DESKTOP = `screen and (min-width: ${MIN_WIDTH_DESKTOP}px)`;

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);
  const mediaQueryListRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    mediaQueryListRef.current = window.matchMedia(query);
    setMatches(mediaQueryListRef.current.matches);
  }, [query]);

  useEventListener(
    'change',
    () => {
      setMatches(mediaQueryListRef.current?.matches ?? false);
    },
    mediaQueryListRef
  );

  return matches;
}
