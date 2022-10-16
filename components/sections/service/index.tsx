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
      className={ 'relative flex flex-col text-left md:flex-row max-w-full' +
                  ' justify-evenly mx-auto items-center' }>
      <ServicesTitle />

      <ServicesList />
    </motion.section>
  );
};

export default ServiceSection;
