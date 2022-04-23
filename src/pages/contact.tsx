import styles from "../styles/pages/contact.module.scss";
import Image from "next/image";
import Head from "next/head";
import { siteData } from "../siteData";

const contact: React.FC = () => {
  const { siteTitle, twitter, linkedin, email } = siteData;
  return (
    <>
      <Head>
        <title>Contact | {siteTitle} </title>
      </Head>
      <article className={styles.contact}>
        <section className={styles.contact_links}>
          <h1 className={styles.contact_heading}>Contact</h1>
          <a href={twitter} target="_blank" rel="noreferrer">
            <Image
              src="/icons/twitter.svg"
              alt="twitter logo for @touseefcodes"
              width={30}
              height={30}
              objectFit="contain"
            />
          </a>
          <a
            href="https://instagram.com/touseefcodes"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/instagram.svg"
              alt="instagram logo for @touseefcodes"
              width={30}
              height={30}
              objectFit="contain"
            />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin logo for @touseefcodes"
              width={30}
              height={30}
              objectFit="contain"
            />
          </a>
        </section>
        <div className={styles.btn}>{email}</div>
        <section className={styles.about}>
          <p>
            Touseef is an expert at structuring well-performing,
            easily-maintainable javascript frontend applications. He is also
            well-versed in modern web technologies.
          </p>
          <p>
            He has a knack for creating minimal websites. He has an eye for even
            the smallest of details like choosing colors, font sizes, images,
            etc. He is a big fan of simplicity and is a better team leader as
            compared to an individual contributor.
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
            <h3>Building SPAs</h3>
            <p>
              Can create Single Page Applications based on your requirements.
            </p>
          </article>
          <article>
            <h3>Minimal Websites</h3>
            <p>
              Have a eye for the smallest details like choosing colors, font
              sizes, images, etc.
            </p>
          </article>
          <article>
            <h3>Custom Websites</h3>
            <p>Can build any site based on your requirements.</p>
          </article>
        </article>
      </section>
    </>
  );
};

export default contact;
