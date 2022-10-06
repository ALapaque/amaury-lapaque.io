import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../stores/data';

const HeroSubtitle = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <h2 className={ 'text-sm uppercase text-[color:var(--text)] pb-2 tracking-[1.2rem]' +
                    ' md:tracking-[20px] md:text-2xl' }>
      { pageInfo.role }
    </h2>
  );
};

export default HeroSubtitle;
