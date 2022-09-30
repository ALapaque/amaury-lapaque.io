import { Project } from '../typing';

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URl }/api/getProjectList`);
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
