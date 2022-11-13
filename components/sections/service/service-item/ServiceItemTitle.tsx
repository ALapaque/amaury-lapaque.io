import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const ServiceItemTitle = ({ children }: Props) => {
  return (
    <h5 className="text-xl text-[color:var(--background)] font-medium transition group-hover:text-[color:var(--primary)]"
        style={ {
          textShadow: '1px 1px var(--background-50)'
        } }>
      { children }
    </h5>
  );
};

export default ServiceItemTitle;
