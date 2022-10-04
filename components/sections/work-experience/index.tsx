import { motion } from 'framer-motion';
import SectionSplitter from '../SectionSplitter';
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

      <SectionSplitter />
    </motion.section>
  );
};

export default WorkExperienceSection;
