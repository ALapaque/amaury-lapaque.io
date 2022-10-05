import { motion } from 'framer-motion';

const SectionSplitter = () => {
  return (
    <motion.div
      initial={ { opacity: 0, height: '0' } }
      whileInView={ { opacity: 1, height: '40vh' } }
      transition={ { duration: 1 } }
      className={ 'w-full absolute top-[30%] bg-primary/10 left-0 h-[40vh] -skew-y-12' +
                  ' md:max-h-[500px]' } />
  );
};

export default SectionSplitter;
