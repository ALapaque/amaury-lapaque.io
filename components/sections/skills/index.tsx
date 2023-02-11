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
      className={ 'pt-5 flex flex-col gap-20 text-center items-center' }>

      <SkillsTitle />

      <SkillsList />
    </motion.section>
  );
};

export default SkillSection;
