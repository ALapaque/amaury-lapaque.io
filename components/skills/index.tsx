import { Skill } from '../../typing';
import SkillItem from './SkillItem';

interface Props {
  skills: Skill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <div className={ 'flex flex-wrap gap-2 justify-center width-[60vw]' +
                     ' md:with-[20vw] md:gap-4' }>
      { skills.map((skill: Skill, index: number) => (
        <SkillItem key={ index }
                   skill={ skill } />
      )) }
    </div>
  );
};

export default Skills;
