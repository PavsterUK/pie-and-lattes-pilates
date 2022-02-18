import React, { useState } from "react";
import About from "./About";
import styles from "./LandingPage.module.css";
import Navbar from "./Navigation/Navbar";
import Pricing from "./Pricing";
import Welcome from "./Welcome";

const LandingPage = () => {
  const [isNavbar, setIsNavbar] = useState(true);
  const [isWelcome, setisWelcome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isPricing, setIsPricing] = useState(false);

  const setIsAboutHandler = () => {
    setisWelcome(false);
    setIsPricing(false);
    setIsAbout(true);
  };

  const setIsPricingHandler = () => {
    setisWelcome(false);
    setIsAbout(false);
    setIsPricing(true);
  };

  const setIsHomeHandler = () => {
    setIsAbout(false);
    setIsPricing(false);
    setisWelcome(true);
  };

  return (
    <div className={styles.container}>
      {isNavbar && (
        <Navbar
          setIsHome={setIsHomeHandler}
          setIsAbout={setIsAboutHandler}
          setIsPricing={setIsPricingHandler}
        />
      )}
      {isWelcome && <Welcome />}
      {isAbout && <About />}
      {isPricing && <Pricing />}
    </div>
  );
};

export default LandingPage;
