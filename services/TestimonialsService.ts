import { groq } from 'next-sanity';
import { Testimonial } from '../typing';

export const getTestimonialsQuery = (): string => {
  return (groq`*[_type == 'testimonial']`);
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchTestimonials`).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve([]);
  }

  const data = await res.json();
  const testimonials: Testimonial[] = data.testimonials;

  return testimonials;
};
