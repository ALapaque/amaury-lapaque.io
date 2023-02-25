import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../stores/data';
import TestimonialsList from './TestimonialsList';
import TestimonialsTitle from './TestimonialsTitle';

const TestimonialsSection = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  return (
    <motion.section
      id={ 'testimonials' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'pt-20 flex flex-col text-center items-center' }>
      <TestimonialsTitle />

      <TestimonialsList />
    </motion.section>
  );
};

export default TestimonialsSection;
