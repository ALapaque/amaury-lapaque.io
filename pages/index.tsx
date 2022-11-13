import type { NextPage } from 'next';
import Layout from '../components/Layout';
import HeroSection from '../components/sections/hero';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Home: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <Layout { ...props } pageTitle={ 'HOME' }>
      <HeroSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default Home;

