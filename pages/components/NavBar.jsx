import styles from "./navbar.module.css";

// // <div className={styles.navMain}>
// {
//   /* <ul className={styles.list}>
//         <li className={styles.li}>Home</li>
//         <li className={styles.li}>Services</li>
//         <li className={styles.li}>Projets</li>
//         <li className={styles.li}>Contact Us</li>
//       </ul> */
// }
// // </div>

import React from "react";

const NavBar = () => {
  return (
    <>
      <div className={styles.navMain}>
        <ul className={styles.list}>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>Services</li>
          <li className={styles.li}>Projets</li>
          <li className={styles.li}>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
