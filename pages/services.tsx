import { NextPage } from 'next';
import Layout from '../components/Layout';
import ServiceSection from '../components/sections/service';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Services: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <Layout { ...props } pageTitle={ 'SERVICES' }>
      <ServiceSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils('service');

export default Services;
