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

export const fetchExperiences = async () => {
  const res = await fetch(`http://localhost:3000/api/fetchExperiences`);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
