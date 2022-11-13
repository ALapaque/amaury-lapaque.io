import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageInfo } from '../typing';

const useUnderMaintenance = ({ maintenance }: PageInfo) => {
  const router = useRouter();

  useEffect(() => {
    (process.env.NODE_ENV === 'production' && maintenance) && router.push('/under-maintenance');
  }, [ router, maintenance ]);
};

export default useUnderMaintenance;
