import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../stores/data';

const HeaderContactIcon = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  const _getHref = (): string => {
    if (pageInfo?.useSinglePage) {
      return '/#contact';
    }

    return '/contact';
  };

  return (
    <button
      className={ 'h-[50px] w-[50px] p-[12px]' }>
      <Link href={ _getHref() }
            shallow>
        <EnvelopeIcon className={ 'h-[100%] w-[100%] text-[color:var(--text)] transition-all ease-in-out' } />
      </Link>
    </button>
  );
};

export default HeaderContactIcon;
