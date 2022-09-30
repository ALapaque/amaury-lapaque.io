import { urlFor } from '../../../../sanity';
import { Skill } from '../../../../typing';

interface Props {
  skill: Skill;
}

const WorkExperienceSkill = ({ skill }: Props) => {
  return (
    <img className={ 'h-10 w-10 object-contain' }
         src={ urlFor(skill.image) }
         alt={ skill.title } />
  );
};

export default WorkExperienceSkill;
