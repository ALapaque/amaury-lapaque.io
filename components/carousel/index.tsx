import { ReactNode, useEffect, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import CarouselNavigator from './CarouselNavigator';

interface Props {
  children: ReactNode,
  subElementId: string,
  maxElements: number,
  minElements?: number,
}

const Carousel = ({ minElements = 0, maxElements, children, subElementId }: Props) => {
  const [ index, setIndex ] = useState<number>(0);
  const [ indexCurrentlyInView ] = useIntersectionObserver(subElementId, maxElements);

  const handleUpdateIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  useEffect(() => {
    setIndex(indexCurrentlyInView);
  }, [ indexCurrentlyInView ]);

  return (
    <>
      <div className={ 'relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' +
                       ' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80 scrollbar-thin' +
                       ' scrollbar-thumb-rounded-full hover:scrollbar-thumb-primary/60 ' }>
        { children }
      </div>

      <CarouselNavigator
        actualIndex={ index }
        onUpdateIndex={ handleUpdateIndex }
        subElementId={ subElementId }
        maxElements={ maxElements } />
    </>
  );
};

export default Carousel;
