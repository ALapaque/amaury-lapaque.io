import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import HeroSection from '../../components/sections/hero';
import { GetServerSideProps, getServerSidePropsUtils } from '../../utils/GetServerSidePropsUtils';

const Home: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  return (
    <Layout { ...props } pageTitle={ 'HOME' }>
      <HeroSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default Home;

