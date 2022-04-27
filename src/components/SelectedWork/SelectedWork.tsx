import Image from "next/image";
import { WorkData } from "./WorkData";
import styles from "./SelectedWork.module.scss";
import { siteData } from "../../siteData";

const SelectedWork: React.FC = () => {
  const { author } = siteData;
  return (
    <>
      <section className={styles.select}>
        <h1 className={styles.select_first_heading}>work.</h1>
        {WorkData.map(({ id, title, description, linkText, link, picture }) => (
          <article className={styles.select_content} key={id}>
            <main>
              <h1>{title}</h1>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noreferrer">
                {linkText}
              </a>
            </main>
            <article>
              <Image
                className={styles.image}
                src={picture}
                alt={`${title} "project of ${author}"`}
                width={1280}
                height={720}
                objectFit="contain"
                loading="eager"
              />
            </article>
          </article>
        ))}
      </section>
    </>
  );
};

export default SelectedWork;
