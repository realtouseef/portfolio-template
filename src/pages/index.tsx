import Head from "next/head";
import Hero from "../components/Hero/Hero";
import SelectedWork from "../components/SelectedWork/SelectedWork";
import { siteData } from "../siteData";

const Home: React.FC = () => {
  const { siteTitle, secondaryTitle, author } = siteData;
  return (
    <>
      <Head>
        <title>
          {siteTitle} — {secondaryTitle}
        </title>
        <meta name="description" content={author} />
      </Head>
      <Hero />
      <SelectedWork />
    </>
  );
};
export default Home;
