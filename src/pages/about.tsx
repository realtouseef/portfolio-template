import Head from "next/head";
import { siteData } from "../siteData";
import styles from "../styles/pages/about.module.scss";

const about: React.FC = () => {
  const { siteTitle } = siteData;
  return (
    <>
      <Head>
        <title>About | {siteTitle} </title>
      </Head>
      <section>
        <article className={styles.about}>
          <h1 className={styles.heading}>Make things & help othes</h1>
          <article className={styles.about_content}>
            <p>
              Touseef is a frontend developer specializing in React.js, NextJS,
              Tailwindcss, and SCSS. His abilities go beyond just coding as he's
              a quick learner and has a large appetite for knowledge. He has
              good leadership skills and great communication skills as well.
            </p>
            <p>
              His role is to write and style the front-end components that meet
              the requirements of our mocks and fulfill our user stories.
            </p>
            <p>
              Touseef is an expert at structuring well-performing,
              easily-maintainable javascript frontend applications. He is also
              well-versed in modern web technologies.
            </p>
            <p>
              He has a knack for creating minimal websites. He has an eye for
              even the smallest of details like choosing colors, font sizes,
              images, etc. He is a big fan of simplicity and is a better team
              leader as compared to an individual contributor.
            </p>
            <p>
              <span>Technologies I use:</span> SCSS, TailwindCSS, JavaScript,
              ES6, ReactJS, NextJS
            </p>
          </article>
        </article>
        <section className={styles.about_links}>
          <h1 className={styles.history_heading}>Work History</h1>
          <article className={styles.links_data}>
            <article>
              <h3>Quranfan</h3>
              <p>Lead Developer</p>
              <a
                href={`https://quranfan.vercel.app`}
                target="_blank"
                rel="noreferrer"
              >
                quranfan.com →
              </a>
            </article>
            <article>
              <h3>Buymeacoffee Clone</h3>
              <p>Lead Developer</p>
              <a
                href={`https://buymeacoffee-clone.vercel.app`}
                target="_blank"
                rel="noreferrer"
              >
                buymeacoffee-clone.com →
              </a>
            </article>
            <article>
              <h3>Qoals Clone</h3>
              <p>Lead Developer</p>
              <a
                href={`https://qoals-clone.vercel.app`}
                target="_blank"
                rel="noreferrer"
              >
                qoals-clone.com →
              </a>
            </article>
          </article>
        </section>
      </section>
    </>
  );
};

export default about;
