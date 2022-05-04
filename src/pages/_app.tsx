/* eslint-disable */
import type { AppProps } from 'next/app';
import '../../styles/globals.scss';

import reportWebVitals from '../reportWebVitals';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
void reportWebVitals();
