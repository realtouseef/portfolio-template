import "../styles/globals.scss";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { siteData } from "../siteData";

function MyApp({ Component, pageProps }: AppProps) {
  const { description, siteKeywords, author } = siteData;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description" content={description} />
        <meta name="keywords" content={siteKeywords} />
        <meta name="author" content={author} />
      </Head>
    <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
