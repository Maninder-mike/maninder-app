import React from "react";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.navMain}>
        <ul className={styles.list}>
          <li className={styles.li}><a href="https://maninder.dev">Maninder.dev</a></li>
        </ul>
        <ul className={styles.list}>
          {/* <li className={styles.li}>Home</li>
          <li className={styles.li}>Services</li>
          <li className={styles.li}>Projets</li>
          <li className={styles.li}>About Me</li> */}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
