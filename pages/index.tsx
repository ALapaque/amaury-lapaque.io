import type { NextPage } from 'next';
import { groq } from 'next-sanity';
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
import { sanityClient } from '../sanity';
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
    Promise.all([
      sanityClient.fetch(groq`
      *[_type == 'experience'] {
        ...,
        technologies[]->
      }
    `),
      sanityClient.fetch(groq`*[_type == 'pageInfo'][0]`),
      sanityClient.fetch(groq`
      *[_type == 'project'] {
        ...,
        technologies[]->
      }
    `),
      sanityClient.fetch(groq`*[_type == 'skill']`),
      sanityClient.fetch(groq`*[_type == 'social']`)
    ]).then(([ experiences, pageInfo, projects, skills, social ]) => {
      setDataState({
        pageInfo,
        experiences,
        skills,
        projects,
        socials
      });
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
