/* eslint-disable */
import Router from 'next/router';
import type { AppProps } from 'next/app';
import NextNProgress from "nextjs-progressbar";
import '../../styles/globals.scss';

import reportWebVitals from '../reportWebVitals';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <>
      <NextNProgress 
        color="#7249c3"                
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
void reportWebVitals();