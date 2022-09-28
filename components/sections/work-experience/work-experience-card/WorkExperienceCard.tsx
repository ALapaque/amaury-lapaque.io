import { motion } from 'framer-motion';
import WorkExperienceDetails from './WorkExperienceDetails';
import WorkExperienceImg from './WorkExperienceImg';
import WorkExperienceSkills from './WorkExperienceSkills';
import WorkExperienceSubtitle from './WorkExperienceSubtitle';
import WorkExperienceTitle from './WorkExperienceTitle';

const WorkExperienceCard = () => {
  return (
    <motion.article
      initial={ {
        opacity: 0
      } }
      whileInView={ {
        opacity: 1
      } }
      transition={ { duration: 1 } }
      className={ 'w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center' +
                  ' p-20' +
                  ' md:p-44' }>
      <WorkExperienceImg />

      <div className={'space-y-2 px-0 md:px-10 max-w-6xl'}>
        <WorkExperienceTitle />
        <WorkExperienceSubtitle />
        <WorkExperienceSkills />
        <WorkExperienceDetails />
      </div>
    </motion.article>
  );
};

export default WorkExperienceCard;
