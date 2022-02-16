import React from "react";
import About from "./About";
import styles from "./LandingPage.module.css";
import Navbar from "./Navigation/Navbar";
import Welcome from "./Welcome";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Welcome />
      

    </div>
  );
};

export default LandingPage;
