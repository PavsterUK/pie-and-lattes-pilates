import React, { useState, useEffect } from "react";

import WhatsReformer from "../components/Tabs/WhatsReformer";
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
  const [tabs, setTabs] = useState({
    welcome: false,
    whatsReformer: false,
    pricing: false,
    contacts: false,
    about: false,
  });

  const openTab = (tabName) => {
    setTabs((prevState) => ({
      ...prevState,
      tabName : true,
    }));
  }

  return (
    <div className={styles.container}>
      <Header />
      <Sidebar
        setIsHome={setTabs}
        setIsWhatsReformer={setTabs}
        setIsPricing={setTabs}
        setIsContacts={setTabs}
        setIsAboutMe={setTabs}
      />

      <Navbar
        setIsHome={setTabs}
        setIsWhatsReformer={setTabs}
        setIsPricing={setTabs}
        setIsContacts={setTabs}
        setIsAboutMe={setTabs}
      />

      {tabs.welcome && <Welcome />}
      {tabs.whatsReformer && <WhatsReformer />}
      {tabs.pricing && <Pricing />}
      {tabs.contacts && <Contacts />}
      {tabs.about && <AboutMe />}
      <Footer />
    </div>
  );
};

export default LandingPage;
