import React from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>Home</div>
      <div>Projects</div>
      <div>Services</div>
      <div>About</div>
    </nav>
  );
};

export default Navbar;
