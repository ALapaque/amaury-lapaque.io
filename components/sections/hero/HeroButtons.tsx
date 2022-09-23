import HeroButton from './HeroButton';

const HeroButtons = () => {
  return (
    <div className={'pt-5'}>
      <HeroButton href={'#about'}>About</HeroButton>
      <HeroButton href={'#experiences'}>Experiences</HeroButton>
      <HeroButton href={'#skills'}>Skills</HeroButton>
      <HeroButton href={'#projects'}>Projects</HeroButton>
    </div>
  )
}

export default HeroButtons
