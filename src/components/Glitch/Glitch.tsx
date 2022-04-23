import styles from "./Glitch.module.scss";
import { siteData } from "../../siteData";
const Glitch: React.FC = () => {
  const { email } = siteData;
  return (
    <>
      <section className={styles.glitch}>
        <article className={styles.glitch_content}>
          <h1>Let's work together</h1>
          <button>{email}</button>
        </article>
      </section>
    </>
  );
};

export default Glitch;
