import React, { useState } from "react";

import WhatsReformer from "../components/Tabs/WhatsReformer"
import Contacts from "../components/Tabs/Contacts";
import Footer from "./Navigation/Footer";
import styles from "./LandingPage.module.css";
import Navbar from "./Navigation/Navbar";
import Pricing from "../components/Tabs/Pricing";
import Welcome from "../components/Tabs/Welcome";
import AboutMe from "../components/Tabs/AboutMe";
import Sidebar from "./Navigation/Sidebar";
import Header from "./Navigation/Header";
import "./Navigation/Sidebar.css";

const LandingPage = () => {
  const [isWelcome, setisWelcome] = useState(true);
  const [isWhatsReformer, setIsWhatsReformer] = useState(false);
  const [isPricing, setIsPricing] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  const [isAboutMe, setIsAboutMe] = useState(false);

  const setIsWhatsReformerHandler = () => {
    setisWelcome(false);
    setIsPricing(false);
    setIsContacts(false);
    setIsAboutMe(false);
    setIsWhatsReformer(true);
  };

  const setIsPricingHandler = () => {
    setisWelcome(false);
    setIsWhatsReformer(false);
    setIsContacts(false);
    setIsAboutMe(false);
    setIsPricing(true);
  };

  const setIsHomeHandler = () => {
    setIsWhatsReformer(false);
    setIsPricing(false);
    setIsContacts(false);
    setIsAboutMe(false);
    setisWelcome(true);
  };

  const setIsContactsHandler = () => {
    setIsWhatsReformer(false);
    setIsPricing(false);
    setisWelcome(false);
    setIsAboutMe(false);
    setIsContacts(true);
  };

  const setIsAboutMeHandler = () => {
    setIsWhatsReformer(false);
    setIsPricing(false);
    setisWelcome(false);
    setIsContacts(false);
    setIsAboutMe(true);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar
        setIsHome={setIsHomeHandler}
        setIsWhatsReformer={setIsWhatsReformerHandler}
        setIsPricing={setIsPricingHandler}
        setIsContacts={setIsContactsHandler}
        setIsAboutMe={setIsAboutMeHandler}
      />

      <Navbar
        setIsHome={setIsHomeHandler}
        setIsWhatsReformer={setIsWhatsReformerHandler}
        setIsPricing={setIsPricingHandler}
        setIsContacts={setIsContactsHandler}
        setIsAboutMe={setIsAboutMeHandler}
      />

      {isWelcome && <Welcome />}
      {isWhatsReformer && <WhatsReformer />}
      {isPricing && <Pricing />}
      {isContacts && <Contacts />}
      {isAboutMe && <AboutMe />}
      <Footer />
    </div>
  );
};

export default LandingPage;
