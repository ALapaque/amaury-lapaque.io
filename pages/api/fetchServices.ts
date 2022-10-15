import { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { getServicesQuery } from '../../services/ServicesService';
import { Service } from '../../typing';

type DATA = {
  services: Service[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<DATA>) {
  const services: Service[] = await sanityClient.fetch(getServicesQuery());

  return res.status(200).json({ services });
}
