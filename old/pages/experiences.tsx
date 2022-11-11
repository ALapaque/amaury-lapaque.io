import { NextPage } from 'next';
import Layout from '../../components/Layout';
import WorkExperienceSection from '../../components/sections/work-experience';
import { GetServerSideProps, getServerSidePropsUtils } from '../../utils/GetServerSidePropsUtils';

const ExperiencesPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  return (
    <Layout { ...props } pageTitle={ 'EXPERIENCES' }>
      <WorkExperienceSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils(
  'experiences');

export default ExperiencesPage;
