import styles from "./Footer.module.scss";
import Image from "next/image";
import { siteData } from "../../siteData";

const Footer: React.FC = () => {
  const {
    footerBriefBio,
    author,
    linkedin,
    twitter,
    footerHeadshotImage,
    github,
  } = siteData;
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footer_social_section}>
          <article>
            <div className={styles.headshot}>
              <Image
                src={footerHeadshotImage}
                alt={`${author}'s headshot image`}
                width={100}
                height={100}
              />
            </div>
            <p>{footerBriefBio}</p>
            <div className="styles.gif_parent">
              <a href={linkedin} target="_blank" rel="noreferrer">
                <div className={styles.animated_gif}></div>
              </a>
            </div>
          </article>
          <article className={styles.footer_social_section_links}>
            <p>Elsewhere</p>
            <aside>
              <a href={twitter} target="_blank" rel="noreferrer">
                Twitter
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </aside>
          </article>
        </section>
        <p className={styles.date}>
          {author} • All Rights Reserved &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default Footer;
