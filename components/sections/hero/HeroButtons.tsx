import HeroButton from './HeroButton';

const HeroButtons = () => {
  return (
    <div className={ 'flex flex-wrap justify-center pt-5' }>
      <HeroButton shallow
                  href={ '/about' }>
        About
      </HeroButton>

      <HeroButton shallow
                  href={ '/experiences' }>
        Experiences
      </HeroButton>
      <HeroButton shallow
                  href={ '/skills' }>
        Skills
      </HeroButton>
      <HeroButton shallow
                  href={ '/projects' }>
        Projects
      </HeroButton>
      <HeroButton shallow
                  href={ '/services' }>
        Services
      </HeroButton>
    </div>
  );
};

export default HeroButtons;
