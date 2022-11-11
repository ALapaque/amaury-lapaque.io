import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { getSocialsQuery } from '../../../services/SocialsService';
import { Social } from '../../../typing';

type DATA = {
  socials: Social[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DATA>) {
  const socials: Social[] = await sanityClient.fetch(getSocialsQuery());

  return res.status(200).json({ socials });
}
