import { groq } from 'next-sanity';
import { Project } from '../typing';

export const getProjectsQuery = (): string => {
  return (
    groq`
      *[_type == 'project'] {
        ...,
        technologies[]->
      }
    `
  );
};

export const fetchProjects = async () => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchProjects`).catch(() => {
    return;
  });

  if (!res) {
    return;
  }

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
