import React from "react";

import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greeter}>
        <h1>Welcome to keynsham Reformer pilates </h1>
        <p>
          Train your body as an integrated whole, focusing on core, lower body,
          and upper body strength as well as flexibility and posture.
        </p>
        <div className={styles.button}>
          <button>Book now &#x27A4;</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
