import { NextPage } from 'next';
import Layout from '../../components/Layout';
import ProjectSection from '../../components/sections/projects';
import { GetServerSideProps, getServerSidePropsUtils } from '../../utils/GetServerSidePropsUtils';

const ProjectsPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  return (
    <Layout { ...props } pageTitle={ 'PROJECTS' }>
      <ProjectSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils('projects');

export default ProjectsPage;
