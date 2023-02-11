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
      className={ 'flex flex-col text-left md:flex-row max-w-full' +
                  ' justify-evenly mx-auto items-center z-10' }>
      { !pageInfo?.useSinglePage && <TestimonialsTitle /> }

      <TestimonialsList />
    </motion.section>
  );
};

export default TestimonialsSection;
