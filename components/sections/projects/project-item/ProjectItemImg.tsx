import { motion } from 'framer-motion';
import Project from '../../../../shared/models/Project.model';

interface Props {
  project: Project;
}

const ProjectItemImg = ({ project: { img, name } }: Props) => {
  return (
    <motion.img
      initial={ {
        y: -300,
        opacity: 0
      } }
      whileInView={ {
        y: 0,
        opacity: 1
      } }
      transition={ { duration: 1 } }
      viewport={ { once: true } }
      src={ img }
      alt={ `${ name }-img` }
      className={ 'max-h-[30vh]' } />
  );
};

export default ProjectItemImg;
