import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import Header from '../components/header';
import ScrollToTopButton from '../components/ScrollToTopButton';
import AboutSection from '../components/sections/about';
import ContactSection from '../components/sections/contact';
import HeroSection from '../components/sections/hero';
import ProjectSection from '../components/sections/projects';
import SkillSection from '../components/sections/skills';
import WorkExperienceSection from '../components/sections/work-experience';
import SanityService from '../services/SanityService';
import { DataState } from '../stores/data';
import { Experience, PageInfo, Project, SanityBody, Skill, Social } from '../typing';

type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[],
}

const Home: NextPage<Props> = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const setDataState = useSetRecoilState(DataState);
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDataState({
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    });
  }, [ setDataState, pageInfo, experiences, skills, projects, socials ]);

  return (
    <div ref={ scrollableContainerRef }
         className={ 'bg-[rgb(46,46,46)] text-white h-screen snap-y snap-mandatory overflow-y-scroll' +
                     ' overflow-x-hidden z-0' +
                     ' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin' +
                     ' scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#F7AB0A]/60 ' }>
      <Head>
        <title>{ pageInfo.name }</title>
      </Head>

      <Header />

      <HeroSection />
      {/* About section */ }
      <AboutSection />
      {/* Experience section */ }
      <WorkExperienceSection />

      {/* Skill section */ }
      <SkillSection />

      {/* Projects section */ }
      <ProjectSection />

      {/* Contact me */ }
      <ContactSection />

      <ScrollToTopButton scrollableContainerRef={ scrollableContainerRef } />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const sanityService: SanityService = new SanityService();
  const data: SanityBody[] = await sanityService.fetchSanityData();
  const props: Props = {
    experiences: data.filter((body: SanityBody) => body._type === 'experience') as Experience[],
    projects: data.filter((body: SanityBody) => body._type === 'project') as Project[],
    pageInfo: data.filter((body: SanityBody) => body._type === 'pageInfo')[0] as PageInfo,
    skills: data.filter((body: SanityBody) => body._type === 'skill') as Skill[],
    socials: data.filter((body: SanityBody) => body._type === 'social') as Social[]
  };

  return {
    props
  };
};
