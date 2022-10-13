import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Header from '../components/header';
import HeroSection from '../components/sections/hero';
import useTheme from '../hooks/useTheme';
import { DataState } from '../stores/data';
import CssUtils from '../utils/CssUtils';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Home: NextPage<GetServerSideProps> = ({ pageInfo, experiences, skills, projects, socials, theme, service }: GetServerSideProps) => {
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
        mode: CssUtils.isColorLightOrDark(`rgb(${ theme?.darkMode ? 'darkBackground' : 'lightBackground' })`)
      },
      service
    });
  }, [ setDataState, pageInfo, experiences, skills, projects, socials, theme, service ]);

  return (
    <>
      <Head>
        <title>{ pageInfo?.name }</title>
      </Head>

      <Header />

      <HeroSection />
    </>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default Home;

