import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Header from '../components/header';
import AboutSection from '../components/sections/about';
import ContactSection from '../components/sections/contact';
import HeroSection from '../components/sections/hero';
import ProjectSection from '../components/sections/projects';
import SkillSection from '../components/sections/skills';
import WorkExperienceSection from '../components/sections/work-experience';
import useTheme from '../hooks/useTheme';
import SanityService from '../services/SanityService';
import { DataState } from '../stores/data';
import { Experience, PageInfo, Project, SanityBody, Skill, Social, Theme } from '../typing';
import CssUtils from '../utils/CssUtils';

type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[],
  theme: Theme,
}

const Home: NextPage<Props> = ({ pageInfo, experiences, skills, projects, socials, theme }: Props) => {
  console.log(skills);
  const setDataState = useSetRecoilState(DataState);

  useTheme();

  useEffect(() => {
    setDataState({
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      theme: {
        ...theme,
        mode: CssUtils.isColorLightOrDark(`rgb(${ theme.darkMode ? 'darkBackground' : 'lightBackground' })`)
      }
    });
  }, [ setDataState, pageInfo, experiences, skills, projects, socials, theme ]);

  return (
    <>
      <Head>
        <title>{ pageInfo.name }</title>
      </Head>

      <Header />

      <div className={ 'snap-start' +
                       ' h-screen' +
                       ' flex' +
                       ' flex-col' +
                       ' space-y-8' +
                       ' items-center' +
                       ' justify-center' +
                       ' text-center' +
                       ' overflow-hidden' }>

        <object type="image/svg+xml"
                data="images/building_together.svg"
                style={ {} }></object>

      </div>


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
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const sanityService: SanityService = new SanityService();
  const data: SanityBody[] = await sanityService.fetchSanityData();
  const props: Props = {
    experiences: (data.filter((body: SanityBody) => body._type === 'experience') as Experience[]).sort(
      (a: Experience, b: Experience) => new Date(b.dateStarted).getDate() - new Date(a.dateStarted).getDate()
    ),
    projects: (data.filter((body: SanityBody) => body._type === 'project') as Project[]).sort(
      (a: Project, b: Project) => b.order - a.order
    ),
    pageInfo: data.filter((body: SanityBody) => body._type === 'pageInfo')[0] as PageInfo,
    skills: (data.filter((body: SanityBody) => body._type === 'skill') as Skill[]).sort(
      (a: Skill, b: Skill) => a.order - b.order
    ),
    socials: data.filter((body: SanityBody) => body._type === 'social') as Social[],
    theme: data.filter((body: SanityBody) => body._type === 'theme')[0] as Theme
  };

  return {
    props
  };
};
