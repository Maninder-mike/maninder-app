import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navMain}>
      <ul className={styles.list}>
        <li className={styles.li}>Home</li>
        <li className={styles.li}>Services</li>
        <li className={styles.li}>Projets</li>
        <li className={styles.li}>Contact Us</li>
      </ul>
    </div>
  );
};
