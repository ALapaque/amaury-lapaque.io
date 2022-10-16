import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const TestimonialRole = ({ children }: Props) => {
  return (
    <p className="font-semibold mb-4">{ children }</p>
  );
};

export default TestimonialRole;
