import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createClient } from 'next-sanity';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: '53g7za50',
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production'
};

export const sanityClient = createClient(config);
export const urlFor = (source: SanityImageSource): string => createImageUrlBuilder(config).image(source).url();
