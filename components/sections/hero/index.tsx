import { motion } from 'framer-motion';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';
import HeroButtons from './HeroButtons';
import HeroImg from './HeroImg';
import HeroSubtitle from './HeroSubtitle';
import HeroTitle from './HeroTitle';

const HeroSection = () => {
  return (
    <motion.section
      id={ 'home' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'min-h-[100vh]' +
                  ' flex' +
                  ' flex-col' +
                  ' space-y-8' +
                  ' items-center' +
                  ' justify-center' +
                  ' text-center' +
                  ' overflow-hidden' }>
      <HeroBackgroundAnimation />

      <div className={ 'z-20 flex flex-col gap-6' }>
        <HeroImg />
        <HeroSubtitle />
        <HeroTitle />
        <HeroButtons />
      </div>
    </motion.section>
  );
};

export default HeroSection;
