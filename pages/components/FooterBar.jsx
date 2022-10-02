import React from "react";
import styles from "../../styles/Home.module.css";

export const FooterBar = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with 🖤 in Canada by Maninder
          <span className={styles.logo}></span>
        </a>
      </footer>
    </>
  );
};
