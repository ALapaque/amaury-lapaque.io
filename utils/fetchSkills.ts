import { Skill } from '../typing';

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URl }/api/getTechnologies`);
  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
