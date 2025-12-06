import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Header";
import Home from "./components/pages/Home";
import WhatsReformer from "./components/pages/WhatsReformer";
import Pricing from "./components/pages/Pricing";
import Footer from "./components/navigation/Footer";
import Contacts from "./components/pages/Contact";
import About from "./components/pages/About";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Classes from "./components/pages/Classes";

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/whats-reformer" element={<WhatsReformer />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/pricing-bookings" element={<Pricing />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/our-team" element={<About />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
