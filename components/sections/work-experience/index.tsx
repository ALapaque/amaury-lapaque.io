import { motion } from 'framer-motion';
import WorkExperiences from './WorkExperiences';
import WorkExperienceSectionTitle from './WorkExperienceSectionTitle';

const WorkExperienceSection = () => {
  return (
    <motion.section
      id={ 'experiences' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'h-screen snap-start relative flex overflow-hidden flex-col text-left md:flex-row max-w-full' +
                  ' justify-evenly mx-auto items-center z-0' }>
      <WorkExperienceSectionTitle />

      <WorkExperiences />

      <motion.div
        initial={ { opacity: 0, top: '0' } }
        whileInView={ { opacity: 1, top: '30%' } }
        transition={ { duration: 1 } }
        className={ 'w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' } />
    </motion.section>
  );
};

export default WorkExperienceSection;
