import { useRecoilValue } from 'recoil';
import { urlFor } from '../../../sanity';
import { pageInfoSelector } from '../../../stores/data';

const HeroImg = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <img
      className={ 'relative rounded-full h-80 w-80 mx-auto object-cover' }
      src={ urlFor(pageInfo.heroImage) }
      alt="Amaury Lapaque" />
  );
};

export default HeroImg
