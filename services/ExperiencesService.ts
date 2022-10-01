import { groq } from 'next-sanity';
import { Experience } from '../typing';

export const getExperiencesQuery = (): string => {
  return (groq`
      *[_type == 'experience'] {
        ...,
        technologies[]->
      }
    `);
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchExperiences`).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve([]);
  }

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
