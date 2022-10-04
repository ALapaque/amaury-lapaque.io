import { ReactNode } from 'react';
import CarouselNavigator from './CarouselNavigator';

interface Props {
  children: ReactNode,
  subElementId: string,
  maxElements: number,
  minElements?: number,
}

const Carousel = ({ minElements = 0, maxElements, children, subElementId }: Props) => {
  return (
    <>
      <div className={ 'relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' +
                       ' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin' +
                       ' scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#F7AB0A]/60 ' }>
        { children }
      </div>

      <CarouselNavigator
        subElementId={ subElementId }
        maxElements={ maxElements } />
    </>
  );
};

export default Carousel;
