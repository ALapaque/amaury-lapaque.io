import { motion } from 'framer-motion';
import AboutDescription from './AboutDescription';
import AboutImg from './AboutImg';
import AboutTitle from './AboutTitle';

const AboutSection = () => {
  return (
    <motion.section
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      id={ 'about' }
      className={ 'relative' +
                  ' flex' +
                  ' flex-col' +
                  ' snap-start' +
                  ' h-screen' +
                  ' text-center' +
                  ' md:text-left' +
                  ' md:flex-row' +
                  ' max-w-7xl' +
                  ' px-5' +
                  ' justify-center' +
                  ' mx-auto' +
                  ' items-center' }>
      <AboutTitle />

      <AboutImg />

      <div className="space-y-10 px-0 md:px-10">
        <AboutDescription />
      </div>
    </motion.section>
  );
};

export default AboutSection;
