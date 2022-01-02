import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        {/* the title goes here  */}
        <article className={styles.hero_header}>
          <h1>
            I'm Touseef ibn Khaleel — Jr. ReactJS Engineer, blogger, & a
            software tinkerer.
          </h1>
          {/* link goes here  */}
          <section className={styles.hero_social}>
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
        </article>
        {/* picture and the biography goes here  */}
        <article className={styles.hero_biography}>
          <div className={styles.text}>
            <p>
              I'm currently Head of Design at Northstar and I produce music as
              Cordio, make videos, design for coffee at Taste Notes, make icons
              at OS Icons, work on ideas at Trademarked, and run my Patreon.
            </p>
            <p>
              I specialize in product design for both the web and mobile apps
              and thrive in 0 → 1 work. My focus is in design leadership, visual
              design, user experience, and design systems. I also code for the
              web with a focus on React, CSS architecture, and component
              systems.{" "}
            </p>
            <p>
              I'm currently available for design advising roles for early stage
              startups and sound/music design projects for apps, podcasts, and
              films.
            </p>
            <p>
              {" "}
              I produce music under the alias Cordio, and create tracks for
              films, shows, and podcasts. Listen to all my music anywhere you
              stream music, or snag some on my Bandcamp.
            </p>
            <a
              href="https://www.upwork.com/freelancers/~013c6a875bcebb5f00"
              target="_blank"
            >
              <button>Upwork</button>
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
