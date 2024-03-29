import { Player } from '@lottiefiles/react-lottie-player';
import { AnimationItem } from 'lottie-web';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../../stores/data';
import { Service } from '../../../../typing';
import PlatformUtils from '../../../../utils/PlatformUtils';
import ServiceItemDescription from './ServiceItemDescription';
import ServiceItemLink from './ServiceItemLink';
import ServiceItemTitle from './ServiceItemTitle';

type Props = {
  service: Service
}

const ServiceItem = ({ service }: Props) => {
  const [ isDesktop, setIsDesktop ] = useState<boolean>(true);
  const [ lottieRef, setLottieRef ] = useState<AnimationItem | undefined>();
  const pageInfo = useRecoilValue(pageInfoSelector);

  const _goToLastFrame = useCallback(() => {
    lottieRef && lottieRef?.goToAndStop(lottieRef?.totalFrames - 1, true);
  }, [ lottieRef ]);

  const _handleOnMouseEnter = () => {
    if (isDesktop) {
      return;
    }

    lottieRef && lottieRef.play();
  };

  const _handleOnMouseLeave = () => {
    if (isDesktop) {
      return;
    }

    !isDesktop && lottieRef && lottieRef.pause();
    _goToLastFrame();
  };

  useLayoutEffect(() => {
    setIsDesktop(PlatformUtils().isDesktop);
  }, []);

  useLayoutEffect(() => {
    if (isDesktop) {
      return;
    }

    _goToLastFrame();
  }, [ lottieRef, isDesktop, _goToLastFrame ]);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <div onMouseEnter={ _handleOnMouseEnter }
         onMouseLeave={ _handleOnMouseLeave }
         className={ 'group border-none transition  rounded-md text-[color:var(--text)] transition bg-[color:var(--primary-70)]' +
                     ' hover:z-[1] hover:shadow-2xl hover:cursor-pointer' }>
      <div className={ 'h-full flex flex-col justify-between p-8 space-y-8 border-dashed rounded-lg transition duration-300' +
                       ' text-[color:var(--background)]' +
                       ' hover:cursor-pointer' +
                       ' group-hover:bg-[color:var(--background)] group-hover:text-[color:var(--primary)]' +
                       ' group-hover:border' +
                       ' group-hover:scale-90' }>
        <div className="space-y-2">
          <div className={ 'w-full flex justify-center' }>
            <Player
              lottieRef={ (item: AnimationItem) => setLottieRef(item) }
              autoplay={ isDesktop }
              loop
              src={ service.svg }
              className={ 'h-[40vh] w-[40vw] md:w-80 md:h-80' }
            />
          </div>

          <div className="space-y-2">
            <ServiceItemTitle>{ service.name }</ServiceItemTitle>
            <ServiceItemDescription description={ service.description } />
          </div>
        </div>
        <ServiceItemLink link={ `mailto:${ pageInfo.email }?subject=[MORE-INFORMATIONS] - ${ service.name }` } />
      </div>
    </div>
  );
};

export default ServiceItem;
