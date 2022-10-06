import { Project } from '../../../../typing';
import Skills from '../../../skills';

interface Props {
  project: Project;
}

const ProjectDetails = ({ project }: Props) => {
  return (
    <div className={ 'flex flex-col items-center content-center space-y-5 justify-center px-0' +
                     ' md:px-10 max-w-6xl' }>
      <h4 className={ 'text-4xl font-semibold text-center text-[color:var(--text)]' }>{ project.title }</h4>
      <p className={ 'text-lg text-left text-[color:var(--text)]' }>{ project.summary }</p>
      <Skills skills={ project.technologies } />
    </div>
  );
};

export default ProjectDetails;
