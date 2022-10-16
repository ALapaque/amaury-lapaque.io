import { useRecoilValue } from 'recoil';
import { testimonialsSelector } from '../../../stores/data';
import { Testimonial } from '../../../typing';
import TestimonialListItem from './testimonial-list-item';

const TestimonialsList = () => {
  const testimonials = useRecoilValue(testimonialsSelector);

  if (!testimonials) {
    return <></>;
  }

  return (
    <div className={ 'w-full h-full overflow-auto relative pt-32 px-10 md:p-16 lg:p-32 xl:px-96' +
                     ' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80 scrollbar-thin' +
                     ' scrollbar-thumb-rounded-full hover:scrollbar-thumb-primary/60' }>
      { testimonials.map((testimonial: Testimonial) => (
        <TestimonialListItem key={ testimonial._id }
                             testimonial={ testimonial } />
      )) }
    </div>
  );
};

export default TestimonialsList;
