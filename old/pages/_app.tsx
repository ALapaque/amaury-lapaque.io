import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import useEventTracker from '../../hooks/useEventTracker';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEventTracker();

  return (
    <RecoilRoot>
      <Component { ...pageProps } />
    </RecoilRoot>
  );
}

export default MyApp;
