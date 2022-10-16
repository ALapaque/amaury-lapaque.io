import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const HeaderHomeIcon = () => {
  return (
    <button
      className={ 'h-[50px] w-[50px] p-[12px]' }>
      <Link href={ '/' }
            shallow>
        <HomeIcon className={ 'h-[100%] w-[100%] text-[color:var(--text)] transition-all ease-in-out' } />
      </Link>
    </button>
  );
};

export default HeaderHomeIcon;
