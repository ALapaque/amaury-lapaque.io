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
      className={ 'pt-5 flex flex-col text-center items-center' }>
      <WorkExperienceSectionTitle />

      <div className={ 'carousel-container relative h-[calc(100vh - 75px - 32px - 1.25rem)] flex flex-col text-left' +
                       ' md:flex-row max-w-full' +
                       ' justify-evenly mx-auto items-center z-0' }>
        <WorkExperiences />

        <SectionSplitter />
      </div>
    </motion.section>
  );
};

export default WorkExperienceSection;
