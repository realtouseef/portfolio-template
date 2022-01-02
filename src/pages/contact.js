import Image from "next/image";
import Head from "next/head";
import styles from "../styles/pages/contact.module.scss";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Touseef </title>
      </Head>
      <article className={styles.contact}>
        <section className={styles.contact_links}>
          <h1 className={styles.contact_heading}>Contact</h1>
          <a href="https://twitter.com/touseefcodes" target="_blank">
            <Image
              src="/icons/twitter.svg"
              alt="twitter logo for @touseefcodes"
              width={30}
              height={30}
              objectFit="contain"
            />
          </a>
          <a href="https://instagram.com/touseefcodes" target="_blank">
            <Image
              src="/icons/instagram.svg"
              alt="instagram logo for @touseefcodes"
              width={30}
              height={30}
              objectFit="contain"
            />
          </a>
          <a href="https://linkedin.com/in/touseefcodes" target="_blank">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin logo for @touseefcodes"
              width={30}
              height={30}
              objectFit="contain"
            />
          </a>
        </section>
        <div className={styles.btn}>touseef69r@gmail.com</div>
        <section className={styles.about}>
          <p>
            My role is to write and style the front-end components that meet the
            requirements of our mocks and fulfill our user stories.{" "}
          </p>
          <p>
            I also monitor and process pull requests for production deployments.
          </p>
          <p>
            I'm currently the Head of Design at Northstar, leading our design
            efforts across the company and building a team to change the future
            of financial wellness. I've helped scale multiple startups and have
            worked on products with millions of users that have changed the
            world (Uber, Facebook, Dave [has since IPO'd], Keller Williams, and
            others).
          </p>
          <p>
            <span>Technologies I use:</span> SCSS, TailwindCSS, JavaScript, ES6,
            ReactJS, NextJS
          </p>
        </section>
      </article>
      <section className={styles.available}>
        <h1>Available For</h1>
        <article className={styles.available_content}>
          <article>
            <h3>Frontend Development</h3>
            <p>
              Available for any frontend project for anyone; 0 → 1 advising,
              visual design feedback, and building out the entire website.
            </p>
          </article>
          <article>
            <h3>Frontend Development</h3>
            <p>
              Available for any frontend project for anyone; 0 → 1 advising,
              visual design feedback, and building out the entire website.
            </p>
          </article>
          <article>
            <h3>Frontend Development</h3>
            <p>
              Available for any frontend project for anyone; 0 → 1 advising,
              visual design feedback, and building out the entire website.
            </p>
          </article>
          <article>
            <h3>Frontend Development</h3>
            <p>
              Available for any frontend project for anyone; 0 → 1 advising,
              visual design feedback, and building out the entire website.
            </p>
          </article>
        </article>
      </section>
    </>
  );
};

export default contact;
