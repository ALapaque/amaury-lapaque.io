import { Expererience, Skill } from '../typing';

export const fetchExperiences = async (): Promise<Expererience[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URl }/api/getExperiences`);
  const data = await res.json();
  const experiences: Expererience[] = data.experiences;

  return experiences;
};
