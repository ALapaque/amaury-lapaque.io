'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import Layout from '../components/Layout';
import { PageInfo, Theme } from '../typing';

type Props = {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <Layout service={ [] }
              pageInfo={ {} as PageInfo }
              theme={ {} as Theme }
              skills={ [] }
              experiences={ [] }
              socials={ [] }
              projects={ [] }
              testimonials={ [] }
              pageTitle={ 'HOME' }
      >
        { children }
      </Layout>
    </RecoilRoot>
  );
};

export default Layout;
