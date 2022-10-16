import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const TestimonialTitle = ({ children }: Props) => {
  return (
    <h2 className="text-3xl font-bold mb-2 text-[color:var(--background)]">{ children }</h2>
  );
};

export default TestimonialTitle;
