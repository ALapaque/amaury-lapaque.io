import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import Header from '../components/header';
import ScrollToTopButton from '../components/ScrollToTopButton';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Hero from '../components/sections/hero';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import WorkExperience from '../components/sections/work-experience';
import { fetchExperiences } from '../services/ExperiencesService';
import { fetchPageInfo } from '../services/PageInfoService';
import { fetchProjects } from '../services/ProjectsService';
import { fetchSkills } from '../services/SkillsService';
import { fetchSocials } from '../services/SocialsService';
import { DataState } from '../stores/data';
import { Experience, PageInfo, Project, Skill, Social } from '../typing';

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
        <title>Amaury Lapaque</title>
      </Head>

      <Header />

      <Hero />
      {/* About section */ }
      <About />
      {/* Experience section */ }
      <WorkExperience />

      {/* Skill section */ }
      <Skills />

      {/* Projects section */ }
      <Projects />

      {/* Contact me */ }
      <Contact />

      <ScrollToTopButton scrollableContainerRef={ scrollableContainerRef } />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [ experiences, projects, pageInfo, skills, socials ] = await Promise.all([
    fetchExperiences(),
    fetchProjects(),
    fetchPageInfo(),
    fetchSkills(),
    fetchSocials()
  ]);

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  };
};
