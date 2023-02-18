import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import useEventTracker from '../hooks/useEventTracker';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEventTracker();

  return (
    <>
      <Head>
        <link rel="manifest"
              href="/manifest.json" />
        <link rel="apple-touch-icon"
              href="/icon.png"></link>
        <meta name="theme-color"
              content="#fff" />
        <meta name="google"
              content="nositelinkssearchbox" />
        <meta name="google"
              content="nopagereadaloud" />
        <meta name="viewport"
              content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification"
              content="bXCbkD-6EYFXtLD8Ol4rXdaE88T5KXHbwyWaTmxi6JM" />
        <meta name="description"
              content="Amaury Lapaque, Fullstack developer specialized in frontend technologies, feel free to contact me" />
      </Head>
      <RecoilRoot>
        <Component { ...pageProps } />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
