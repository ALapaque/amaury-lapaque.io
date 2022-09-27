import Section from '../index';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';
import HeroButtons from './HeroButtons';
import HeroSubtitle from './HeroSubtitle';
import HeroTitle from './HeroTitle';

const Hero = () => {
  return (
    <Section id="hero"
             className={ 'snap-start' +
                         ' h-screen' +
                         ' flex' +
                         ' flex-col' +
                         ' space-y-8' +
                         ' items-center' +
                         ' justify-center' +
                         ' text-center' +
                         ' overflow-hidden' }>
      <HeroBackgroundAnimation />

      <div className={'z-20 flex flex-col gap-6'}>
        <img
          className={ 'relative rounded-full h-80 w-80 mx-auto object-cover' }
          src={'https://scontent.fcrl2-1.fna.fbcdn.net/v/t39.30808-6/245459046_10220705226196899_3651212924131166499_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=aXXANrec5HwAX8BaZZm&_nc_ht=scontent.fcrl2-1.fna&oh=00_AT9YWztyqcxcSWB_KCrSWm-4m0RHTanpU1XHoe81139Gbg&oe=633340B7'}
          alt="Amaury Lapaque" />

        <HeroSubtitle />
        <HeroTitle />
        <HeroButtons />
      </div>
    </Section>
  );
};

export default Hero;
