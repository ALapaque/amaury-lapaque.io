import { motion } from 'framer-motion';
import SkillsList from './SkillsList';
import SkillsSubtitle from './SkillsSubtitle';
import SkillsTitle from './SkillsTitle';

const Skills = () => {
  return (
    <motion.section
      id={ 'skills' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'snap-center' +
                  ' h-screen' +
                  ' flex' +
                  ' relative' +
                  ' flex-col' +
                  ' text-center' +
                  ' md:text-left' +
                  ' xl:flex-row' +
                  ' max-w-[2000px]' +
                  ' xl:px-10' +
                  ' min-h-screen' +
                  ' justify-center' +
                  ' xl:space-y-0' +
                  ' mx-auto' +
                  ' items-center' }>
      <SkillsTitle />
      <SkillsSubtitle />

      <SkillsList />
    </motion.section>
  );
};

export default Skills;
