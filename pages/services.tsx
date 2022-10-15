import { NextPage } from 'next';
import Layout from '../components/Layout';
import ServiceSection from '../components/sections/service';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Services: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  return (
    <Layout { ...props } pageTitle={ 'SERVICES' }>
      <ServiceSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils('service');

export default Services;
