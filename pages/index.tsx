import type { NextPage } from 'next';
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
  }, []);

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

/**
 * SSR to fetch datas
 * @returns {Promise<{props: {skills: any, projects: any, pageInfo: any, socials: any, experiences: any}}>}
 */
export async function getServerSideProps() {
  const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URl as string;
  const promises = await Promise.all([
    fetch(`${ baseUrl }/api/getWorkExperiences`),
    fetch(`${ baseUrl }/api/getPageInformations`),
    fetch(`${ baseUrl }/api/getProjectList`),
    fetch(`${ baseUrl }/api/getTechnologies`),
    fetch(`${ baseUrl }/api/getSocialLinks`)
  ]);
  const [ { experiences }, { pageInfo }, { projects }, { skills }, { socials } ] = await Promise.all(promises.map((promise) => promise.json()));

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  };
}
