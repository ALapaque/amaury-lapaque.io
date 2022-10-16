import Layout from '../components/Layout';
import TestimonialsSection from '../components/sections/testimonials';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Testimonials = (props: GetServerSideProps) => {
  return (
    <Layout { ...props } pageTitle={ 'TESTIMONIALS' }>
      <TestimonialsSection />
    </Layout>
  );
};

export default Testimonials;

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils(
  'testimonials');
