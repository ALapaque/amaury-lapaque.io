import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import SanityService from '../../services/SanityService';
import { SanityBody } from '../../typing';

export default async function handler(req: NextApiRequest, res: NextApiResponse<SanityBody[]>) {
  const sanityService: SanityService = new SanityService();
  const data: SanityBody[] = await sanityClient.fetch(sanityService.query);

  return res.status(200).json(data);
}
