import React from "react";
import styles from "../styles/Home.module.css";

const Card = () => {
  return (
    <div className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </div>
  );
};

export default Card;
