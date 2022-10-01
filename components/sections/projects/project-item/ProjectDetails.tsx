import { Project, Skill } from '../../../../typing';
import WorkExperienceSkill from '../../work-experience/work-experience-card/WorkExperienceSkill';

interface Props {
  project: Project;
}

const ProjectDetails = ({ project }: Props) => {
  return (
    <div className={ 'space-y-10 px-0 md:px-10 max-w-6xl' }>
      <h4 className={ 'text-4xl font-semibold text-center' }>{ project.title }</h4>
      <p className={ 'text-lg text-left' }>{ project.summary }</p>
      <div className={ 'grid grid-cols-4 md:grid-cols-6 gap-2 justify-items-center' }>
        { project.technologies.map((skill: Skill, index: number) => (
          <WorkExperienceSkill key={ index }
                               skill={ skill } />
        )) }
      </div>
    </div>
  );
};

export default ProjectDetails;
