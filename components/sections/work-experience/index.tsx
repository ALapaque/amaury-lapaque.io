import { motion } from 'framer-motion';
import WorkExperienceCarousel from './WorkExperienceCarousel';
import WorkExperienceSectionTitle from './WorkExperienceSectionTitle';

const WorkExperience = () => {
  return (
    <motion.section
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      id={ 'experiences' }
      className={ 'relative' +
                  ' flex' +
                  ' flex-col' +
                  ' snap-center' +
                  ' h-screen' +
                  ' w-screen' +
                  ' text-center' +
                  ' md:text-left' +
                  ' md:flex-row' +
                  ' px-10' +
                  ' justify-evenly' +
                  ' mx-auto' +
                  ' items-center' }>
      <WorkExperienceSectionTitle />


      <WorkExperienceCarousel />
    </motion.section>
  );
};

export default WorkExperience;
