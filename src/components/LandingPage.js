import React from "react";
import About from "./About";
import styles from "./LandingPage.module.css";
import Navbar from "./Navigation/Navbar";
import Pricing from "./Pricing";
import Welcome from "./Welcome";

const LandingPage = () => {
  const isNavbar = true;
  const isWelcome = false;
  const isAbout = false;
  const isPricing = true;

  return (
    <div className={styles.container}>
      {isNavbar && <Navbar />}
      {isWelcome && <Welcome />}
      {isAbout && <About />}
      {isPricing && <Pricing />}


    </div>
  );
};

export default LandingPage;
