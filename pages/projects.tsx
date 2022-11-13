import { NextPage } from 'next';
import Layout from '../components/Layout';
import ProjectSection from '../components/sections/projects';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const ProjectsPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <Layout { ...props } pageTitle={ 'PROJECTS' }>
      <ProjectSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils('projects');

export default ProjectsPage;
