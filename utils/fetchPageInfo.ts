import { PageInfo } from '../typing';

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URl }/api/getPageInformations`);
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
