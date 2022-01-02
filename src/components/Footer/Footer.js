import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footer_social_section}>
          <article>
            <div className={styles.headshot}></div>
            <p>
              If you liked what you see and want to have a similar website or a
              diff one, you can contact me anytime. Click the below gif 😅
            </p>
            <div className="styles.gif_parent">
              <a href="https://linkedin.com/in/touseefcodes" target="_blank">
                <div className={styles.animated_gif}></div>
              </a>
            </div>
          </article>
          <article className={styles.footer_social_section_links}>
            <p>Elsewhere</p>
            <aside>
              <a href="https://twitter.com/touseefcodes" target="_blank">
                Twitter
              </a>
              <a href="https://instagram.com/touseefcodes" target="_blank">
                Instagram
              </a>
              <a href="https://linkedin.com/in/touseefcodes" target="_blank">
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
