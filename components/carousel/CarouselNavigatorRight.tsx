import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  subElementId: string;
  handleOnClick: () => void;
}

const CarouselNavigatorRight = ({ subElementId, handleOnClick }: Props) => {
  return (
    <div className={ 'absolute right-2 md:right-5 w-10 h-10 z-50 cursor-pointer hover:animate-pulse' +
                     ' hover:bg-transparent hover:text-[#F7AB0A] transition-all ease-in-out' }
         onClick={ handleOnClick }>
      <ChevronRightIcon />
    </div>
  );
};

export default CarouselNavigatorRight;
