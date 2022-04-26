import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Glitch from "../Glitch/Glitch";

// scss
import styles from "./Layout.module.scss";

type ChildProps = {
  children: React.ReactNode;
};

const Layout: React.FC = ({ children }: ChildProps) => {
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
