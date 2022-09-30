import { Project, Skill } from '../typing';

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URl }/api/getProjects`);
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
