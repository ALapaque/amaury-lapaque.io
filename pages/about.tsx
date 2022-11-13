import { NextPage } from 'next';
import Layout from '../components/Layout';
import AboutSection from '../components/sections/about';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const AboutPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <Layout { ...props } pageTitle={ 'ABOUT' }>
      <AboutSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default AboutPage;
