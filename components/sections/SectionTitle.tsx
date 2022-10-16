import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <h3 className={ 'absolute top-32 lg:top-20 uppercase tracking-[1rem] text-[color:var(--primary)] text-2xl' +
                    ' z-50 drop-shadow-lg backdrop-blur-lg px-4' }>
      { children }
    </h3>
  );
};

export default SectionTitle;
