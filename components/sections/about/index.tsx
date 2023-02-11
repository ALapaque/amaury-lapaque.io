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
      className={ 'pt-5 flex flex-col gap-20 text-center max-w-7xl px-5 mx-auto items-center' }>
      <AboutTitle />

      <div className={ 'flex flex-col gap-10 justify-center items-center' +
                       ' lg:flex-row' }>
        <AboutImg />

        <div className="space-y-10 px-0 md:px-10">
          <AboutDescription />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
