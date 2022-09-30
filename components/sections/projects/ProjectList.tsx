import { useRecoilValue } from 'recoil';
import { projectsSelector } from '../../../stores/data';
import { Project } from '../../../typing';
import ProjectItem from './project-item';

const ProjectList = () => {
  const projects = useRecoilValue(projectsSelector);

  if (!projects) {
    return <></>;
  }

  return (
    <div className={ 'relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' +
                     ' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin' +
                     ' scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#F7AB0A]/60 ' }>
      { projects.map((project: Project, index: number) => (
        <ProjectItem key={ index }
                     project={ project } />
      )) }
    </div>
  );
};

export default ProjectList;
