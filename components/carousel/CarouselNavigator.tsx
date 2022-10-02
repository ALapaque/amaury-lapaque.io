import { useState } from 'react';
import CarouselNavigatorLeft from './CarouselNavigatorLeft';
import CarouselNavigatorRight from './CarouselNavigatorRight';

interface Props {
  subElementId: string,
  maxElements: number,
  minElements?: number,
}

const CarouselNavigator = ({ minElements, maxElements, subElementId }: Props) => {
  const [ index, setIndex ] = useState<number>(0);
  const dots = Array.apply(null, Array(maxElements));

  const getDomElement = (domIndex: number): HTMLElement | null => {
    return document.getElementById(`${ subElementId }${ domIndex }`);
  };

  const handleUpdateIndex = (value: number) => {
    setIndex(value);
  };

  const handleDotClick = (value: number) => {
    const htmlElement: HTMLElement | null = getDomElement(value);

    if (!htmlElement) {
      return;
    }

    htmlElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    handleUpdateIndex(value);
  };

  const handleScrollIntoView = (actionType: 'increase' | 'decrease') => {
    if (index === minElements || index === maxElements) {
      return;
    }

    const tempIndex: number = actionType === 'increase' ? index + 1 : index - 1;
    const htmlElement: HTMLElement | null = getDomElement(tempIndex);

    if (!htmlElement) {
      return;
    }

    htmlElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    handleUpdateIndex(tempIndex);
  };

  return (
    <>
      <CarouselNavigatorLeft
        subElementId={ subElementId }
        handleOnClick={ () => handleScrollIntoView('decrease') }
      />
      <CarouselNavigatorRight
        subElementId={ subElementId }
        handleOnClick={ () => handleScrollIntoView('increase') }
      />

      <div className={ 'flex space-x-2 absolute bottom-5 z-20' +
                       ' md:bottom-10' }>
        { dots.map((element: any, elementIndex: number) => (
          <div
            onClick={ () => handleDotClick(elementIndex) }
            className={ 'carousel-dot h-5 w-5 bg-[#F7AB0A]/60 rounded-full' +
                        ' hover:cursor-pointer hover:bg-[#F7AB0A]' +
                        ` ${ index === elementIndex ? ' active' : '' }` }
            key={ elementIndex } />
        )) }
      </div>
    </>
  );
};

export default CarouselNavigator;
