import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

ReactGA.initialize('G-PL59EV0Q63');

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <RecoilRoot>
      <Component { ...pageProps } />
    </RecoilRoot>
  );
}

export default MyApp;
