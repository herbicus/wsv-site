/* eslint-disable import/no-extraneous-dependencies */
import imageUrlBuilder from '@sanity/image-url';

import sanityClient from '@/data/sanity.config';

const imageBuilder = imageUrlBuilder(sanityClient);

const imageUrlFor = (source: string) => imageBuilder.image(source);

export default imageUrlFor;