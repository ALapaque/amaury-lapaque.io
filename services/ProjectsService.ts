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
  const res = await fetch(`${ location.origin }/api/fetchProjects`);
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
