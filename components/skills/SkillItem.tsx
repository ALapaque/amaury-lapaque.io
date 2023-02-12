import Image from 'next/image';
import { urlFor } from '../../sanity';
import { Skill } from '../../typing';

interface Props {
  skill: Skill,
}

const SkillItem = ({ skill }: Props) => {
  return (
    <Image className={ 'h-10 w-10 object-contain' }
           height={ 1000 }
           width={ 1000 }
           src={ urlFor(skill.image) }
           alt={ skill.title } />
  );
};

export default SkillItem;
