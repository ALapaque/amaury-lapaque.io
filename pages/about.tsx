import { NextPage } from 'next';
import MultiPageLayout from '../components/layout/MultiPageLayout';
import AboutSection from '../components/sections/about';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const AboutPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <MultiPageLayout { ...props } pageTitle={ 'ABOUT' }>
      <AboutSection />
    </MultiPageLayout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default AboutPage;
