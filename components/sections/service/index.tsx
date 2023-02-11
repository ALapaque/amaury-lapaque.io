import { motion } from 'framer-motion';
import ServicesList from './ServicesList';
import ServicesTitle from './ServicesTitle';

const ServiceSection = () => {
  return (
    <motion.section
      id={ 'services' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'flex flex-col text-left max-w-full' +
                  ' justify-evenly mx-auto items-center z-10' }>
      <ServicesTitle />

      <ServicesList />
    </motion.section>
  );
};

export default ServiceSection;
