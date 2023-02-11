import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../stores/data';
import HeroButton from './HeroButton';

const HeroButtons = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  const _getHref = (page: string): string => {
    if (pageInfo?.useSinglePage) {
      return `/#${ page }`;
    }
    return `/${ page }`;
  };

  return (
    <div className={ 'flex flex-wrap justify-center pt-5' }>
      <HeroButton shallow
                  href={ _getHref('about') }>
        About
      </HeroButton>

      <HeroButton shallow
                  href={ _getHref('experiences') }>
        Experiences
      </HeroButton>
      <HeroButton shallow
                  href={ _getHref('skills') }>
        Skills
      </HeroButton>
      <HeroButton shallow
                  href={ _getHref('projects') }>
        Projects
      </HeroButton>
      <HeroButton shallow
                  href={ _getHref('services') }>
        Services
      </HeroButton>
      <HeroButton shallow
                  href={ _getHref('testimonials') }>
        Testimonials
      </HeroButton>
    </div>
  );
};

export default HeroButtons;
