import { motion } from 'framer-motion';
import SectionSplitter from '../SectionSplitter';
import Projects from './Projects';
import ProjectsTitle from './ProjectsTitle';

const ProjectSection = () => {
  return (
    <motion.section
      id={ 'projects' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'pt-5 flex flex-col text-center items-center' }>
      <ProjectsTitle />

      <div className={ 'carousel-container relative flex flex-col text-left' +
                       ' md:flex-row max-w-full' +
                       ' justify-evenly mx-auto items-center z-0' }>
        <Projects />

        <SectionSplitter />
      </div>
    </motion.section>
  );
};

export default ProjectSection;
