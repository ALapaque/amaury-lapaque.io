import { Experience } from '../typing';

export const fetchExperiences = async (): Promise<Experience[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URl }/api/getWorkExperiences`);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
