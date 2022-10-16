import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const HeaderContactIcon = () => (
  <button
    className={ 'h-[50px] w-[50px] p-[12px]' }>
    <Link href={ '/contact' }
          shallow>
      <EnvelopeIcon className={ 'h-[100%] w-[100%] text-[color:var(--text)] transition-all ease-in-out' } />
    </Link>
  </button>
);

export default HeaderContactIcon;
