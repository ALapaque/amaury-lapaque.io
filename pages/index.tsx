import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import Header from '../components/header';
import scrollToTopButton from '../components/ScrollToTopButton';
import ScrollToTopButton from '../components/ScrollToTopButton';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Hero from '../components/sections/hero';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import WorkExperience from '../components/sections/work-experience';

const Home: NextPage = () => {
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);

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
