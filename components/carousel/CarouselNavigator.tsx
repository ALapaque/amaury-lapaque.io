import CarouselNavigatorLeft from './CarouselNavigatorLeft';
import CarouselNavigatorRight from './CarouselNavigatorRight';

interface Props {
  subElementId: string,
  maxElements: number,
  minElements?: number,
  actualIndex: number,
  onUpdateIndex: (newIndex: number) => void,
}

const CarouselNavigator = ({ actualIndex, onUpdateIndex, minElements, maxElements, subElementId }: Props) => {
  const dots = Array.apply(null, Array(maxElements));

  const getDomElement = (domIndex: number): HTMLElement | null => {
    return document.getElementById(`${ subElementId }${ domIndex }`);
  };

  const handleUpdateIndex = (value: number) => {
    onUpdateIndex(value);
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
    if (actualIndex === minElements || actualIndex === maxElements) {
      return;
    }

    const tempIndex: number = actionType === 'increase' ? actualIndex + 1 : actualIndex - 1;
    const htmlElement: HTMLElement | null = getDomElement(tempIndex);

    if (!htmlElement) {
      return;
    }

    htmlElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    handleUpdateIndex(tempIndex);
  };

  return (
    <>
      { actualIndex !== 0 && (
        <CarouselNavigatorLeft
          handleOnClick={ () => handleScrollIntoView('decrease') }
          animate={ actualIndex === (maxElements - 1) }
        />
      ) }
      { actualIndex !== (maxElements - 1) && (
        <CarouselNavigatorRight
          handleOnClick={ () => handleScrollIntoView('increase') }
          animate={ actualIndex === 0 }
        />
      ) }

      <div className={ 'hidden items-center space-x-2 absolute bottom-5 z-20' +
                       ' md:flex md:bottom-10' }>
        { dots.map((element: any, elementIndex: number) => (
          <div
            onClick={ () => handleDotClick(elementIndex) }
            className={ 'carousel-dot h-5 w-5 bg-[#F7AB0A]/60 rounded-full' +
                        ' hover:cursor-pointer hover:bg-[#F7AB0A]' +
                        ` ${ actualIndex === elementIndex ? ' active' : ' h-4 w-4' }` }
            key={ elementIndex } />
        )) }
      </div>
    </>
  );
};

export default CarouselNavigator;
