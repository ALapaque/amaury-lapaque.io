import { groq } from 'next-sanity';
import { Social } from '../typing';

export const getSocialsQuery = (): string => {
  return (groq`*[_type == 'social']`);
};

export const fetchSocials = async () => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchSocials`);
  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
