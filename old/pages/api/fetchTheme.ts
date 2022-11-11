import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { getThemeQuery } from '../../../services/ThemeService';
import { Theme } from '../../../typing';

type DATA = {
  theme: Theme
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DATA>) {
  const theme: Theme = await sanityClient.fetch(getThemeQuery());

  return res.status(200).json({ theme });
}
