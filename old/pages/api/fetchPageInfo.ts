import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { getPageInfoQuery } from '../../../services/PageInfoService';
import { PageInfo } from '../../../typing';

type DATA = {
  pageInfo: PageInfo
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DATA>) {
  const pageInfo: PageInfo = await sanityClient.fetch(getPageInfoQuery());

  return res.status(200).json({ pageInfo });
}
