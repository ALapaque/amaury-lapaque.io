import { urlFor } from '../../../../sanity';
import { Testimonial } from '../../../../typing';
import TestimonialImage from './TestimonialImage';
import TestimonialRole from './TestimonialRole';
import TestimonialTitle from './TestimonialTitle';
import TestimonialWords from './TestimonialWords';

type Props = {
  testimonial: Testimonial;
}

const TestimonialListItem = ({ testimonial }: Props) => {
  return (
    <div className="grid grid-cols-[1fr_auto] flex items-center pb-5 lg:pb-16">
      <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
        <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 z-1 backdrop-blur-xl bg-[color:var(--primary-70)] text-[color:var(--text)]">
          <TestimonialTitle>{ testimonial.name }</TestimonialTitle>
          <TestimonialRole>{ testimonial.role }</TestimonialRole>
          <TestimonialWords>{ testimonial.comment }</TestimonialWords>
        </div>
      </div>
      <div className="md:mb-12 lg:mb-0 hidden md:block md:max-w-[18vw] ml-10">
        { testimonial.image && (
          <TestimonialImage src={ urlFor(testimonial.image) }
                            alt={ `img-${ testimonial.name }` } />
        ) }
      </div>
    </div>
  );
};

export default TestimonialListItem;
