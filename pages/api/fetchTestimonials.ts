import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { getTestimonialsQuery } from '../../services/TestimonialsService';
import { Testimonial } from '../../typing';

type DATA = {
  testimonials: Testimonial[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DATA>) {
  const testimonials: Testimonial[] = await sanityClient.fetch(getTestimonialsQuery());

  return res.status(200).json({ testimonials });
}
