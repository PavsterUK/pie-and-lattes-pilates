import React from "react";
import Card from "./GUI/Card";

import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greeter}>
        <h1>Welcome to keynsham Reformer pilates </h1>
        <p>Feel stronger, build tone &#38; boost your energy</p>
      </div>
    </div>
  );
};

export default Welcome;
