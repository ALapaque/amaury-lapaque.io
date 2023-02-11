import type { NextPage } from 'next';
import MultiPageLayout from '../components/layout/MultiPageLayout';
import SinglePageLayout from '../components/layout/SinglePageLayout';
import AboutSection from '../components/sections/about';
import ContactSection from '../components/sections/contact';
import HeroSection from '../components/sections/hero';
import ProjectSection from '../components/sections/projects';
import ServiceSection from '../components/sections/service';
import SkillSection from '../components/sections/skills';
import TestimonialsSection from '../components/sections/testimonials';
import WorkExperienceSection from '../components/sections/work-experience';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Home: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  console.log(props);
  useUnderMaintenance(props.pageInfo);

  if (props.pageInfo.useSinglePage) {
    return (
      <SinglePageLayout { ...props }>
        <HeroSection />

        <AboutSection />

        <WorkExperienceSection />

        <ProjectSection />

        <ServiceSection />

        <SkillSection />

        <TestimonialsSection />

        <ContactSection />
      </SinglePageLayout>
    );
  }

  return (
    <MultiPageLayout { ...props } pageTitle={ 'HOME' }>
      <HeroSection />
    </MultiPageLayout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default Home;

