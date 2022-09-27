import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { MutableRefObject, useEffect, useState } from 'react';

interface Props {
  scrollableContainerRef: MutableRefObject<HTMLDivElement | null>;
}

const ScrollToTopButton = ({ scrollableContainerRef }: Props) => {
  const [ isDisplay, setIsDisplay ] = useState<boolean>(false);

  useEffect(() => {
    const { current: container } = scrollableContainerRef;
    if (!container) {
      return;
    }

    setIsDisplay(container.scrollTop > 300);
  }, [ scrollableContainerRef?.current?.scrollTop ]);

  if (!isDisplay) {
    return <></>;
  }

  return (
    <Link href={ '#hero' }>
      <a className={ 'fixed bottom-12 right-12 z-50 bg-[#f7ab0a]/60 p-2 rounded-full' }>
        <ArrowUpIcon className={ 'w-8 h-8 text-[rgb(46,46,46)]' } />
      </a>
    </Link>
  );
};

export default ScrollToTopButton;
