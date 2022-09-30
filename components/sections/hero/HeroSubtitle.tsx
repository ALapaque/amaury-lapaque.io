import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../stores/data';

const HeroSubtitle = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <h2 className={ 'text-sm uppercase text-[#F7AB0A]/60 pb-2 tracking-[15px]' }>{ pageInfo.role }</h2>
  );
};

export default HeroSubtitle;
