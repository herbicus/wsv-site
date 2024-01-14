import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import React from 'react';

import sanityClient from '@/data/sanity.config';

interface SiteImageProps {
  image: SanityImageSource;
  alt?: string;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill';
  blurUrl?: string;
  classes?: string;
  priority?: boolean;
}

const SiteImage: React.FC<SiteImageProps> = ({
  image,
  alt = '',
  objectFit = 'contain',
  blurUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  classes,
  priority = false,
  ...rest
}) => {
  const sanityImage = useNextSanityImage(sanityClient, image);

  const imageSizes = {
    mobile: 320,
    tabletPortrait: 640,
    tabletLandscape: 768,
    desktop: 1024,
    largeDesktop: 1600,
  };

  const { tabletPortrait, tabletLandscape, desktop } = imageSizes;

  return image ? (
    <Image
      {...sanityImage}
      placeholder="blur"
      blurDataURL={blurUrl}
      className={classes}
      style={{ objectFit }}
      priority={priority}
      alt={alt}
      sizes={`(max-width: ${tabletPortrait}px) 100vw, (max-width: ${tabletLandscape}px) 50vw, ${desktop}px`}
      {...rest}
    />
  ) : null;
};

export default SiteImage;
