import { groq } from 'next-sanity';
import { Skill } from '../typing';

export const getSkillsQuery = (): string => {
  return (groq`*[_type == 'skill']`);
};

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchSkills`).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve([]);
  }

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
