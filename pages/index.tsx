import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import About from '../components/sections/about';
import Hero from '../components/sections/hero';
import Skills from '../components/sections/skills';
import WorkExperience from '../components/sections/work-experience';

const Home: NextPage = () => {
  return (
    <div className={'bg-[rgb(46,46,46)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0'}>
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

      {/* Contact me */ }
    </div>
  );
};

export default Home;
