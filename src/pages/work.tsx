import styles from "../styles/pages/works.module.scss";
import Image from "next/image";
import { WorkData } from "../components/SelectedWork/WorkData";
import Head from "next/head";
import { siteData } from "../siteData";

const work: React.FC = () => {
  const { siteTitle, description, siteKeywords } = siteData;
  return (
    <>
      <Head>
        <title>Work | {siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={siteKeywords} />
      </Head>
      <section className={styles.work_heading}>
        aimed at easing your life.
      </section>

      {WorkData.map((item) => (
        <article className={styles.work} key={item.id}>
          <main>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
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
              loading="eager"
            />
            <hr />
          </article>
        </article>
      ))}
    </>
  );
};

export default work;
