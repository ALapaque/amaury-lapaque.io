import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const TestimonialWords = ({ children }: Props) => {
  return (
    <p className="mb-6 text-[color:var(--background)]">{ children }</p>
  );
};

export default TestimonialWords;
