import { motion } from 'framer-motion';
import { Project } from '../../../../typing';
import ProjectDetails from './ProjectDetails';
import ProjectItemImg from './ProjectItemImg';

interface Props {
  project: Project;
  id: string;
}

const ProjectItem = ({ project, id }: Props) => {
  return (
    <motion.article
      id={ id }
      initial={ {
        opacity: 0
      } }
      whileInView={ {
        opacity: 1
      } }
      transition={ { duration: 1 } }
      className={ 'w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center' +
                  ' p-20' +
                  ' md:p-44' }>
      <ProjectItemImg project={ project } />

      <ProjectDetails project={ project } />
    </motion.article>
  );
};

export default ProjectItem;
