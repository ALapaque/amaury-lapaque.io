import { NextPage } from 'next';
import MultiPageLayout from '../components/layout/MultiPageLayout';
import WorkExperienceSection from '../components/sections/work-experience';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const ExperiencesPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <MultiPageLayout { ...props } pageTitle={ 'EXPERIENCES' }>
      <WorkExperienceSection />
    </MultiPageLayout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils(
  'experiences');

export default ExperiencesPage;
