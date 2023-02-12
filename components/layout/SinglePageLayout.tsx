import React, { ReactNode, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import useTheme from '../../hooks/useTheme';
import { DataState } from '../../stores/data';
import CssUtils from '../../utils/CssUtils';
import { GetServerSideProps } from '../../utils/GetServerSidePropsUtils';
import Header from '../header';

type Props = {
  pageTitle?: string,
  children: ReactNode
}

// eslint-disable-next-line react/display-name
const SinglePageLayout = ({ children, pageTitle = '', pageInfo, experiences, skills, projects, socials, theme, service, testimonials }: Props & GetServerSideProps) => {
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
      service,
      testimonials
    });
  }, [ setDataState, pageInfo, experiences, skills, projects, socials, theme, service, testimonials ]);

  useEffect(() => {
    document.title = `${ pageInfo.name } ${ pageTitle && '- ' + pageTitle }`;
  }, [ pageTitle, pageInfo.name ]);

  return (
    <>
      <Header />

      { children }
    </>
  );
};

export default SinglePageLayout;
