import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

const Section = (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
  <section className={ 'w-full' + props.className } { ...props } />
);

export default Section;
