import React from "react";
import Card from "./GUI/Card";

import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slogan1}><p>Transform, renew, revitalize. </p></div>
      <div className={styles.slogan2}><p>Live in a body you love. Love the body you're in. </p></div>
      <div className={styles.slogan2}><p>Exercise smarter, not harder. </p></div>


    </div>
  );
};

export default Welcome;
