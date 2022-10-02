import { Experience, Skill } from '../../../../typing';
import WorkExperienceSkill from './WorkExperienceSkill';

interface Props {
  experience: Experience;
}

const WorkExperienceSkills = ({ experience }: Props) => {
  return (
    <div className={ 'grid grid-cols-4 md:grid-cols-6 gap-2 justify-items-center' }>
      { experience.technologies.map((skill: Skill, index: number) => (
        <WorkExperienceSkill key={ index }
                             skill={ skill } />
      )) }
    </div>
  );
};

export default WorkExperienceSkills;
