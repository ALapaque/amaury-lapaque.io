import { motion } from 'framer-motion';
import { urlFor } from '../../../../sanity';
import { Project } from '../../../../typing';

interface Props {
  project: Project;
}

const ProjectItemImg = ({ project: { image, title, linkToBuild } }: Props) => {
  return (
    <a href={ linkToBuild }
       rel={ 'noreferrer' }
       target={ '_blank' }>
      <motion.img
        initial={ {
          y: -300,
          opacity: 0
        } }
        animate={ {
          y: 0,
          opacity: 1
        } }
        transition={ { duration: 1 } }
        viewport={ { once: true } }
        src={ urlFor(image) }
        alt={ `${ title }-img` }
        className={ 'max-w-[20vh] max-h-[20vh]' } />
    </a>
  );
};

export default ProjectItemImg;
