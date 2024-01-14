import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren, MouseEvent, FC } from 'react';

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;

type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren<{}>;

const ScrollLink: React.FC<ScrollLinkProps> = ({ children, ...props }) => {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = e.currentTarget.href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);

    if (elem) {
      const top = elem.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};

export default ScrollLink;
