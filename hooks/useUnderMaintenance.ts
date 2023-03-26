import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageInfo } from '../typing';

const useUnderMaintenance = (props: PageInfo | undefined) => {
  const router = useRouter();

  useEffect(() => {
    if (!props?.maintenance) {
      return
    }

    (process.env.NODE_ENV === 'production' && props.maintenance) && router.push('/under-maintenance');
  }, [ router, props?.maintenance ]);
};

export default useUnderMaintenance;
