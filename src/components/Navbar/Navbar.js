import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className={styles.main_nav}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image
              src={"/icons/logo.svg"}
              alt="@touseefcodes logo"
              width={30}
              height={30}
              objectFit="contain"
            />
          </Link>
        </div>
        <header className={styles.links}>
          <Link href="/about">about.</Link>
          <Link href="/works">works.</Link>
          <Link href="/contact">contact.</Link>
        </header>
        <div className={styles.hamburger} onClick={() => setMenu(!menu)}>
          <div className={styles.ham_logo}>
            <Image
              src={`/icons/hamburger.svg`}
              alt="@touseefcodes hamburger"
              width={30}
              height={30}
              objectFit="contain"
            />
          </div>
          {menu ? (
            <header className={styles.links_mobile}>
              <Link href="/about">about.</Link>
              <Link href="/works">works.</Link>
              <Link href="/contact">contact.</Link>

              <section className={styles.links_social}>
                <h2>connect</h2>
                <a
                  href="https://twitter.com/touseefcodes"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <a
                  href="https://linkedin.com/in/touseefcodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    alt="linkedin logo for @touseefcodes"
                    width={30}
                    height={30}
                    objectFit="contain"
                  />
                </a>
              </section>
            </header>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
