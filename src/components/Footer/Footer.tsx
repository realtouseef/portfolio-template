import { siteData } from "../../siteData";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const { footerBriefBio, linkedin, twitter } = siteData;
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footer_social_section}>
          <article>
            <div className={styles.headshot}></div>
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
              <a
                href="https://instagram.com/touseefcodes"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </aside>
          </article>
        </section>
        <p className={styles.date}>
          All Rights Reserved &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default Footer;
