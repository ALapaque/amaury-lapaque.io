import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ScrollEvent = JQuery.ScrollEvent;

const ScrollToTopButton = () => {
  const [ isDisplay, setIsDisplay ] = useState<boolean>(false);

  const _handleOnScroll = (event: Event) => {
    if (!event) {
      return;
    }

    console.log((event as unknown as ScrollEvent).target.scrollTop > 300);

    setIsDisplay((event as unknown as ScrollEvent).target.scrollTop > 300);
  };

  useEffect(() => {
    document.getElementById('__next')?.addEventListener('scroll', _handleOnScroll);

    return () => {
      document.getElementById('__next')?.removeEventListener('scroll', _handleOnScroll);
    };
  }, []);

  if (!isDisplay) {
    return <></>;
  }

  return (
    <motion.span
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      transition={ { duration: 1.5 } }>
      <Link href={ '/#home' }
            className={ 'fixed bottom-12 left-12 z-50' +
                        ' bg-[color:var(--primary-70)]' +
                        ' border-2' +
                        ' border-[color:var(--primary-70)]' +
                        ' text-[color:var(--background)] p-2 rounded-full' +
                        ' hover:bg-[color:var(--background)] hover:text-[color:var(--primary)] hover:border-2' }>
        <ArrowUpIcon className={ 'w-8 h-8 text-inherit' } />
      </Link>
    </motion.span>
  );
};

export default ScrollToTopButton;
