import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageInfo } from '../typing';

const useUnderMaintenance = ({ maintenance }: PageInfo) => {
  const router = useRouter();

  useEffect(() => {
    maintenance && router.push('/under-maintenance');
  }, [ router, maintenance ]);
};

export default useUnderMaintenance;
