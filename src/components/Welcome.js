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
          <a href="https://app.squarespacescheduling.com/schedule.php?owner=25295759">Book now &#x27A4;</a>
      </div>
    </div>
  );
};

export default Welcome;
