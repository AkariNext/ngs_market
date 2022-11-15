import { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/assets/css/reset.css';
import { MantineProvider } from '@mantine/core';
import { AnimatePresence } from "framer-motion";
import {DefaultSeo} from "next-seo";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <DefaultSeo defaultTitle='NGS MARKET' canonical='http://ngs.akarinext.org' description='Phantasy Star Online2 New Genesisの相場管理サイトです' />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
          <Component {...pageProps} />
        </MantineProvider>
      </AnimatePresence>
    </>
  );
}

export default CustomApp;
