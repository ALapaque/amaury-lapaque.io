import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../stores/data';

const HeaderHomeIcon = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  const _getHref = (): string => {
    if (pageInfo?.useSinglePage) {
      return '/#home';
    }

    return '/';
  };

  return (
    <button
      className={ 'h-[50px] w-[50px] p-[12px]' }>
      <Link href={ _getHref() }
            shallow>
        <HomeIcon className={ 'h-[100%] w-[100%] text-[color:var(--text)] transition-all ease-in-out' } />
      </Link>
    </button>
  );
};

export default HeaderHomeIcon;
