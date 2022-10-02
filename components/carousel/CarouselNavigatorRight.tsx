import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  subElementId: string;
  handleOnClick: () => void;
}

const CarouselNavigatorRight = ({ subElementId, handleOnClick }: Props) => {
  return (
    <div className={ 'absolute right-10 w-10 h-10 z-50 cursor-pointer transition-all ease-in-out' +
                     ' hover:animate-pulse hover:bg-transparent hover:text-[#F7AB0A]' }
         onClick={ handleOnClick }>
      <ChevronRightIcon />
    </div>
  );
};

export default CarouselNavigatorRight;
