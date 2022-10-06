import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../stores/data';

const AboutDescriptionParagraph = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <p className={ 'text-[color:var(--text)]' }>{ pageInfo.backgroundInformation }</p>
  );
};

export default AboutDescriptionParagraph;
