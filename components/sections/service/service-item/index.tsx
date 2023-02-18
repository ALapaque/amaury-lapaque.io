import { AnimationItem } from 'lottie-web';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../../stores/data';
import { Service } from '../../../../typing';
import PlatformUtils from '../../../../utils/PlatformUtils';
import ServiceItemDescription from './ServiceItemDescription';
import ServiceItemLink from './ServiceItemLink';
import ServiceItemLottiePlayer from './ServiceItemLottiePlayer';
import ServiceItemTitle from './ServiceItemTitle';

type Props = {
  service: Service
}

const ServiceItem = ({ service }: Props) => {
  const isDesktop: boolean = PlatformUtils(window).isDesktop;
  const [ lottieRef, setLottieRef ] = useState<AnimationItem | undefined>();
  const pageInfo = useRecoilValue(pageInfoSelector);

  const _goToLastFrame = () => {
    lottieRef && lottieRef?.goToAndStop(lottieRef?.totalFrames - 1, true);
  };

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

  useEffect(() => {
    if (isDesktop) {
      return;
    }

    _goToLastFrame();
  }, [ lottieRef ]);

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
          <ServiceItemLottiePlayer svg={ service.svg }
                                   lottieRef={ (ref: AnimationItem) => setLottieRef(ref) } />

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
