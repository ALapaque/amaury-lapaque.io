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
      viewport={ { once: true } }
      className={ 'snap-start' +
                  ' flex' +
                  ' relative' +
                  ' flex-col' +
                  ' text-center' +
                  ' md:text-left' +
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