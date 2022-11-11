import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { getExperiencesQuery } from '../../../services/ExperiencesService';
import { Experience } from '../../../typing';

type DATA = {
  experiences: Experience[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DATA>) {
  const experiences: Experience[] = await sanityClient.fetch(getExperiencesQuery());

  return res.status(200).json({ experiences });
}
