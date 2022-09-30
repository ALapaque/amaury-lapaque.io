import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { skillsSelector } from '../../../stores/data';
import { Skill } from '../../../typing';
import SkillsListItem from './SkillsListItem';

const SkillsList = () => {
  const skills = useRecoilValue(skillsSelector);

  if (!skills) {
    return <></>;
  }

  return (
    <motion.div
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1 } }
      viewport={ { once: true } }
      className={ 'grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4' }>
      { skills.map((skill: Skill, index: number) => (
        <SkillsListItem key={ index }
                        skill={ skill } />
      )) }
    </motion.div>
  );
};

export default SkillsList;
