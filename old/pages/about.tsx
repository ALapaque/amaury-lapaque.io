import { NextPage } from 'next';
import Layout from '../../components/Layout';
import AboutSection from '../../components/sections/about';
import { GetServerSideProps, getServerSidePropsUtils } from '../../utils/GetServerSidePropsUtils';

const AboutPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  return (
    <Layout { ...props } pageTitle={ 'ABOUT' }>
      <AboutSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default AboutPage;
