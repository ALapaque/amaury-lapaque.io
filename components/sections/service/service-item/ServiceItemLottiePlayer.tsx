import { Player } from '@lottiefiles/react-lottie-player';
import { IPlayerProps } from '@lottiefiles/react-lottie-player/src/Player';
import PlatformUtils from '../../../../utils/PlatformUtils';

interface Props extends Pick<IPlayerProps, 'lottieRef'> {
  svg: string;
}

const ServiceItemLottiePlayer = ({ svg, lottieRef }: Props) => {
  const isDesktop: boolean = PlatformUtils(window).isDesktop;

  return (
    <div className={ 'w-full flex justify-center' }>
      <Player
        lottieRef={ lottieRef }
        autoplay={ isDesktop }
        loop
        src={ svg }
        className={ 'w-[40vw] md:w-80 md:max-h-100' }
      />
    </div>
  );
};

export default ServiceItemLottiePlayer;
