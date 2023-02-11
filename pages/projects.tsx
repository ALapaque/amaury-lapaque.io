import { NextPage } from 'next';
import MultiPageLayout from '../components/layout/MultiPageLayout';
import ProjectSection from '../components/sections/projects';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const ProjectsPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <MultiPageLayout { ...props } pageTitle={ 'PROJECTS' }>
      <ProjectSection />
    </MultiPageLayout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils('projects');

export default ProjectsPage;
