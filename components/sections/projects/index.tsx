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
      className={ 'h-screen snap-start relative flex overflow-hidden flex-col text-left md:flex-row max-w-full' +
                  ' justify-evenly mx-auto items-center z-0' }>
      <ProjectsTitle />

      <Projects />

      <SectionSplitter />
    </motion.section>
  );
};

export default ProjectSection;
