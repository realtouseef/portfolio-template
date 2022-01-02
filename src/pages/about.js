import Head from "next/head";
import styles from "../styles/pages/about.module.scss";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Touseef </title>
      </Head>
      <section>
        <article className={styles.about}>
          <h1 className={styles.heading}>Make things & help othes</h1>
          <article className={styles.about_content}>
            <p>
              My role is to write and style the front-end components that meet
              the requirements of our mocks and fulfill our user stories.{" "}
            </p>
            <p>
              I also monitor and process pull requests for production
              deployments.
            </p>
            <p>
              I'm currently the Head of Design at Northstar, leading our design
              efforts across the company and building a team to change the
              future of financial wellness. I've helped scale multiple startups
              and have worked on products with millions of users that have
              changed the world (Uber, Facebook, Dave [has since IPO'd], Keller
              Williams, and others).
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
              <a href={`https://quranfan.vercel.app`} target="_blank">
                quranfan.com →
              </a>
            </article>
            <article>
              <h3>Buymeacoffee Clone</h3>
              <p>Lead Developer</p>
              <a href={`https://buymeacoffee-clone.vercel.app`} target="_blank">
                buymeacoffee-clone.com →
              </a>
            </article>
            <article>
              <h3>Qoals Clone</h3>
              <p>Lead Developer</p>
              <a href={`https://qoals-clone.vercel.app`} target="_blank">
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
