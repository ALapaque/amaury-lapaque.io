import { motion } from 'framer-motion';
import SkillsList from './SkillsList';
import SkillsTitle from './SkillsTitle';

const SkillSection = () => {
  return (
    <motion.section
      id={ 'skills' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      viewport={ { once: true } }
      className={ 'flex' +
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

      <SkillsList />
    </motion.section>
  );
};

export default SkillSection;
