import Link, { LinkProps } from 'next/link';
import { ReactChildren, ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
}

const HeroButton = ({ children, ...linkProps }: Props) => {
  return (
    <Link { ...linkProps }>
      <button className={ 'hero-btn' }>{ children }</button>
    </Link>
  );
};

export default HeroButton;
