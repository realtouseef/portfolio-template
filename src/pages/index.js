import Head from "next/head";
import Hero from "../components/Hero/Hero";
import SelectedWork from "../components/SelectedWork/SelectedWork";

export default function Home() {
  return (
    <>
      <Head>
        <title>Touseef — Jr. React Engineer</title>
        <meta name="description" content="created by @touseefcodes" />
      </Head>
      <Hero />
      <SelectedWork />
    </>
  );
}
