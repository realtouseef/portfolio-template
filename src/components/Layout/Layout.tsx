import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Glitch from "../Glitch/Glitch";

// scss
import styles from "./Layout.module.scss";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <section className={styles.container}>
        <Navbar />
        <main>{children}</main>
      </section>
      <Glitch />
      <section className={styles.container}>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
