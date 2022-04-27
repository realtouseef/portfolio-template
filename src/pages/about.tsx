import styles from "../styles/pages/about.module.scss";
import Head from "next/head";
import { siteData } from "../siteData";
import { aboutData } from "../miscData";

const about: React.FC = () => {
  const { siteTitle } = siteData;
  const { bio1, bio2, bio3, bio4, bio5, workHistory } = aboutData;

  return (
    <>
      <Head>
        <title>About | {siteTitle} </title>
      </Head>
      <section>
        <article className={styles.about}>
          <h1 className={styles.heading}>Make things & help others</h1>
          <article className={styles.about_content}>
            <p>{bio1}</p>
            <p>{bio2}</p>
            <p>{bio3}</p>
            <p>{bio4}</p>
            <p>{bio5}</p>
          </article>
        </article>
        <section className={styles.about_links}>
          <h1 className={styles.history_heading}>Work History</h1>
          <article className={styles.links_data}>
            {workHistory.map(
              ({ id, description, projectName, role, link, linkName }) => (
                <article key={id}>
                  <h3>{projectName}</h3>
                  <p>{role}</p>
                  <p>{description}</p>
                  <a href={link} target="_blank" rel="noreferrer">
                    {linkName} →
                  </a>
                </article>
              )
            )}
          </article>
        </section>
      </section>
    </>
  );
};

export default about;
