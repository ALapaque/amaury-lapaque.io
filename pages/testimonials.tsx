import Layout from '../components/Layout';
import TestimonialsSection from '../components/sections/testimonials';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Testimonials = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <Layout { ...props } pageTitle={ 'TESTIMONIALS' }>
      <TestimonialsSection />
    </Layout>
  );
};

export default Testimonials;

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils(
  'testimonials');
