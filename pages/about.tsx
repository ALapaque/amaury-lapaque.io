import { NextPage } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Header from '../components/header';
import AboutSection from '../components/sections/about';
import useTheme from '../hooks/useTheme';
import { DataState } from '../stores/data';
import CssUtils from '../utils/CssUtils';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const AboutPage: NextPage<GetServerSideProps> = ({ pageInfo, experiences, skills, projects, socials, theme, service }: GetServerSideProps) => {
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
      <Header />

      {/* About section */ }y
      <AboutSection />
    </>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default AboutPage;
