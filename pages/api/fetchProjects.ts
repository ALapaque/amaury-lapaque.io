import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { getProjectsQuery } from '../../services/ProjectsService';
import { Project } from '../../typing';

type DATA = {
  projects: Project[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DATA>) {
  const projects: Project[] = await sanityClient.fetch(getProjectsQuery());

  return res.status(200).json({ projects });
}
