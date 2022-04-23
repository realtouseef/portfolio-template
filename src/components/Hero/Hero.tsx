import Image from "next/image";
import styles from "./Hero.module.scss";
import { siteData } from "../../siteData";

const Hero: React.FC = () => {
  const { upwork, externalHireLinkName, description, twitter, linkedin } =
    siteData;

  return (
    <>
      <section className={styles.hero}>
        {/* the title goes here  */}
        <article className={styles.hero_header}>
          <h1>{description}</h1>
          {/* link goes here  */}
          <section className={styles.hero_social}>
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
        </article>
        {/* picture and the biography goes here  */}
        <article className={styles.hero_biography}>
          <div className={styles.text}>
            <p>
              Touseef is a frontend developer specializing in React.js, NextJS,
              Tailwindcss, and SCSS. His abilities go beyond just coding as he's
              a quick learner and has a large appetite for knowledge. He has
              good leadership skills and great communication skills as well.
            </p>
            <p>
              His role is to write and style the front-end components that meet
              the requirements of our mocks and fulfill our user stories.
            </p>
            <p>
              Touseef is an expert at structuring well-performing,
              easily-maintainable javascript frontend applications. He is also
              well-versed in modern web technologies.
            </p>
            <p>
              He has a knack for creating minimal websites. He has an eye for
              even the smallest of details like choosing colors, font sizes,
              images, etc. He is a big fan of simplicity and is a better team
              leader as compared to an individual contributor.
            </p>
            <a href={upwork} target="_blank" rel="noreferrer">
              <button>{externalHireLinkName}</button>
            </a>
          </div>
          <div className={styles.pic}>
            <Image
              src="/pic/touseef.jpg"
              alt="@touseefcodes"
              loading="eager"
              objectFit="cover"
              width={810}
              height={1080}
              priority
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Hero;
