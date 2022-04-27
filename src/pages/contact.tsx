import styles from "../styles/pages/contact.module.scss";
import Image from "next/image";
import Head from "next/head";
import { siteData } from "../siteData";
import { contactData } from "../miscData";

const contact: React.FC = () => {
  const { siteTitle, twitter, linkedin, email, github, author } = siteData;
  const { briefBio1, briefBio2, techStack, availableFor } = contactData;
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
              alt={`twitter logo for ${author}`}
              width={30}
              height={30}
              objectFit="contain"
              loading="eager"
            />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <Image
              src="/icons/github.svg"
              alt={`instagram logo for ${author}`}
              width={30}
              height={30}
              objectFit="contain"
              loading="eager"
            />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Image
              src="/icons/linkedin.svg"
              alt={`linkedin logo for ${author}`}
              width={30}
              height={30}
              objectFit="contain"
              loading="eager"
            />
          </a>
        </section>
        <div className={styles.btn}>{email}</div>
        <section className={styles.about}>
          <p>{briefBio1}</p>
          <p>{briefBio2}</p>
          <p>
            <span>Technologies I know/use: </span>
            {techStack}
          </p>
        </section>
      </article>
      <section className={styles.available}>
        <h1>Available For</h1>
        <article className={styles.available_content}>
          {availableFor.map(({ id, title, description }) => (
            <main key={id}>
              <h2>{title}</h2>
              <p>{description}</p>
            </main>
          ))}
        </article>
      </section>
    </>
  );
};

export default contact;
