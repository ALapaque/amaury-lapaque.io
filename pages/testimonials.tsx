import MultiPageLayout from '../components/layout/MultiPageLayout';
import TestimonialsSection from '../components/sections/testimonials';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Testimonials = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <MultiPageLayout { ...props } pageTitle={ 'TESTIMONIALS' }>
      <TestimonialsSection />
    </MultiPageLayout>
  );
};

export default Testimonials;

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils(
  'testimonials');
