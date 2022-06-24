import React from "react";
import styles from "../styles/Home.module.css";

const Form = () => {
  return (
    <form
      onSubmit={() => {
        console.log("submited");
      }}
      className={styles.form}
    >
      <input type="text" placeholder="Name" className={styles.input} />
      <input type="email" placeholder="Email" className={styles.input} />
      <button className={styles.input}>Join Me</button>
    </form>
  );
  ``;
};

export default Form;
