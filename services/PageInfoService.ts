import { groq } from 'next-sanity';
import { PageInfo } from '../typing';

export const getPageInfoQuery = (): string => {
  return (groq`*[_type == 'pageInfo'][0]`);
};

export const fetchPageInfo = async () => {
  const res = await fetch(`${ location.origin }/api/fetchPageInfo`);
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
