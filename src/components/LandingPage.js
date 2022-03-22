import React, { useState, useEffect } from "react";

import WhatsReformer from "../components/Tabs/WhatsReformer";
import Contacts from "./Tabs/Contact";
import Footer from "./Navigation/Footer";
import styles from "./LandingPage.module.css";
import Navbar from "./Navigation/Navbar";
import Pricing from "../components/Tabs/Pricing";
import Home from "./Tabs/Home";
import AboutMe from "./Tabs/About";
import Sidebar from "./Navigation/Sidebar";
import Header from "./Navigation/Header";
import "./Navigation/Sidebar.css";

const tabsClosed = {
  welcome: false,
  whatsReformer: false,
  pricingBookings: false,
  contact: false,
  about: false,
};

const LandingPage = () => {
  const [tabs, setTabs] = useState(tabsClosed);

  useEffect(() => {
    openTab({ home: true });
  }, []);

  const openTab = (openTab) => {
    setTabs({
      ...tabsClosed,
      ...openTab,
    });
  }

  
  return (
    <div className={styles.container}>
      <Header />
      <Sidebar 
        openTab={openTab}
      />

      <Navbar
        openTab={openTab}
      />

      {tabs.home && <Home openTab={openTab} />}
      {tabs.whatsReformer && <WhatsReformer />}
      {tabs.pricingBookings && <Pricing />}
      {tabs.contact && <Contacts />}
      {tabs.about && <AboutMe />}
      <Footer />
    </div>
  );
};

export default LandingPage;
