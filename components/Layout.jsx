import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

export const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Hello</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
