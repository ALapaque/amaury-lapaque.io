import { motion } from 'framer-motion';
import SkillsListItem from './SkillsListItem';

const SkillsList = () => {
  return (
    <motion.div
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1 } }
      viewport={ { once: true } }
      className={ 'grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4' }>
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
      <SkillsListItem />
    </motion.div>
  );
};

export default SkillsList;
