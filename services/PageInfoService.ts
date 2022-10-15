import { groq } from 'next-sanity';
import { PageInfo } from '../typing';

export const getPageInfoQuery = (): string => {
  return (groq`*[_type == 'pageInfo'][0]`);
};

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchPageInfo`).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve({} as PageInfo);
  }

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
