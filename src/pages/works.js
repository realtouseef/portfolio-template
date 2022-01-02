import Image from "next/image";
import { WorkData } from "../components/SelectedWork/WorkData";

import Head from "next/head";
import styles from "../styles/pages/works.module.scss";

const works = () => {
  return (
    <>
      <Head>
        <title>Work | Touseef </title>
      </Head>
      <section className={styles.work_heading}>
        aimed at easing your life.
      </section>

      {WorkData.map((item) => (
        <article className={styles.work}>
          <main>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href={item.link} target="_blank">
              {item.linkText}
            </a>
          </main>
          <article className={styles.work_image}>
            <Image
              src={item.picture}
              alt={item.title}
              width={1280}
              height={720}
              objectFit="contain"
            />
            <hr />
          </article>
        </article>
      ))}
    </>
  );
};

export default works;
