import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { getSkillsQuery } from '../../services/SkillsService';
import { Skill } from '../../typing';

type DATA = {
  skills: Skill[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DATA>) {
  const skills: Skill[] = await sanityClient.fetch(getSkillsQuery());

  return res.status(200).json({ skills });
}
