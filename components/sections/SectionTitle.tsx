import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <h3 className={ 'absolute top-10 uppercase tracking-[1rem] text-[color:var(--primary)] text-2xl' +
                    ' z-50 drop-shadow-lg backdrop-blur-lg px-4' +
                    ' md:top-10' }>
      { children }
    </h3>
  );
};

export default SectionTitle;
