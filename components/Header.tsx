import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>My First</span> Next
      </h1>
      <p className={styles.description}>Practice makes perfect</p>
    </div>
  );
};

export default Header;
