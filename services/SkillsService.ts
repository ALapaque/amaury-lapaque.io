import { groq } from 'next-sanity';
import { Skill } from '../typing';

export const getSkillsQuery = (): string => {
  return (groq`*[_type == 'skill']`);
};

export const fetchSkills = async () => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchSkills`);
  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
