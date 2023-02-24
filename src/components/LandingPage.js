import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

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

const LandingPage = () => {
  return (
    <HashRouter>
      <div className={styles.container}>
        <Header />
        <Sidebar />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/whats-reformer" element={<WhatsReformer />} />
          <Route path="/pricing-bookings" element={<Pricing />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/our-team" element={<AboutMe />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default LandingPage;
