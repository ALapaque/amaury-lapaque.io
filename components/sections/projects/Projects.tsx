import { useRecoilValue } from 'recoil';
import { projectsSelector } from '../../../stores/data';
import { Project } from '../../../typing';
import Carousel from '../../carousel';
import ProjectItem from './project-item';

const Projects = () => {
  const projects = useRecoilValue(projectsSelector);

  if (!projects) {
    return <></>;
  }

  return (
    <Carousel subElementId={ 'project-item-' }
              maxElements={ projects.length }>
      { projects.map((project: Project, index: number) => (
        <ProjectItem key={ index }
                     id={ `project-item-${ index }` }
                     project={ project } />
      )) }
    </Carousel>
  );
};

export default Projects;
