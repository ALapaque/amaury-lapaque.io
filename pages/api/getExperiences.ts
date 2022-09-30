import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Expererience, Project, Skill, Social } from '../../typing';

const query = groq`
      *[_type == 'experience'] {
        ...,
        technologies[]->
      }
`;

type Data = {
  experiences: Expererience[],
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const experiences: Expererience[] = await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}
