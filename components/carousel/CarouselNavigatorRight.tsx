import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  handleOnClick: () => void;
  animate: boolean;
}

const CarouselNavigatorRight = ({ animate, handleOnClick }: Props) => {
  return (
    <div className={ 'h-screen absolute right-0 px-12 flex items-center z-50 cursor-pointer' +
                     ' transition-all ease-in-out' +
                     ' hover:animate-pulse hover:bg-transparent hover:text-primary' +
                     ' md:px-36' }
         onClick={ handleOnClick }>
      <ChevronRightIcon className={ 'carousel-arrow__right text-[color:var(--text)] w-10 h-10' +
                                    `${ animate ? ' animate' : '' }` } />
    </div>
  );
};

export default CarouselNavigatorRight;
