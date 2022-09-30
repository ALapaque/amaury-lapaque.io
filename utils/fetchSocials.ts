import { Skill, Social } from '../typing';

export const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URl }/api/getSocials`);
  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
