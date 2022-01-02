import Image from "next/image";
import { WorkData } from "./WorkData";
import styles from "./SelectedWork.module.scss";

const SelectedWork = () => {
  return (
    <>
      <section className={styles.select}>
        <h1 className={styles.select_first_heading}>work.</h1>
        {WorkData.map((item) => (
          <article className={styles.select_content}>
            <main>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <a href={item.link} target="_blank">
                {item.linkText}
              </a>
            </main>
            <article>
              <Image
                className={styles.image}
                src={item.picture}
                alt={item.title}
                width={1280}
                height={720}
                objectFit="contain"
              />
            </article>
          </article>
        ))}
      </section>
    </>
  );
};

export default SelectedWork;
