import React, { useState } from "react";

import WhatsPilates from "./WhatsPilates";
import Contacts from "./Contacts";
import Footer from "./Footer";
import styles from "./LandingPage.module.css";
import Navbar from "./Navigation/Navbar";
import Pricing from "./Pricing";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Sidebar from "./Navigation/Sidebar";
import Header from "./Header";
import "./Navigation/Sidebar.css";

const LandingPage = () => {
  const [isWelcome, setisWelcome] = useState(true);
  const [isWhatsPilates, setIsWhatsPilates] = useState(false);
  const [isPricing, setIsPricing] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  const [isAboutMe, setIsAboutMe] = useState(false);

  const setIsWhatsPilatesHandler = () => {
    setisWelcome(false);
    setIsPricing(false);
    setIsContacts(false);
    setIsAboutMe(false);
    setIsWhatsPilates(true);
  };

  const setIsPricingHandler = () => {
    setisWelcome(false);
    setIsWhatsPilates(false);
    setIsContacts(false);
    setIsAboutMe(false);
    setIsPricing(true);
  };

  const setIsHomeHandler = () => {
    setIsWhatsPilates(false);
    setIsPricing(false);
    setIsContacts(false);
    setIsAboutMe(false);
    setisWelcome(true);
  };

  const setIsContactsHandler = () => {
    setIsWhatsPilates(false);
    setIsPricing(false);
    setisWelcome(false);
    setIsAboutMe(false);
    setIsContacts(true);
  };

  const setIsAboutMeHandler = () => {
    setIsWhatsPilates(false);
    setIsPricing(false);
    setisWelcome(false);
    setIsContacts(false);
    setIsAboutMe(true);
  };

  return (
    <div id="outer-container" className={styles.container}>
      <Header />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <Navbar
        setIsHome={setIsHomeHandler}
        setIsWhatsPilates={setIsWhatsPilatesHandler}
        setIsPricing={setIsPricingHandler}
        setIsContacts={setIsContactsHandler}
        setIsAboutMe={setIsAboutMeHandler}
      />

      {isWelcome && <Welcome />}
      {isWhatsPilates && <WhatsPilates />}
      {isPricing && <Pricing />}
      {isContacts && <Contacts />}
      {isAboutMe && <AboutMe />}
      <div id="page-wrap"></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
