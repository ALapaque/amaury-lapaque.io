import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { urlFor } from '../../../sanity';
import { pageInfoSelector } from '../../../stores/data';

const HeroImg = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <Image
      className={ 'relative rounded-full h-80 w-80 mx-auto object-cover' }
      width={ 1000 }
      height={ 1000 }
      src={ urlFor(pageInfo.heroImage) }
      alt="Amaury Lapaque" />
  );
};

export default HeroImg
