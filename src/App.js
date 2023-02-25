import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import Home from "./components/Tabs/Home";
import WhatsReformer from "./components/Tabs/WhatsReformer";
import Pricing from "./components/Tabs/Pricing";
import Footer from "./components/Navigation/Footer";
import Contacts from "./components/Tabs/Contact";
import About from "./components/Tabs/About";
import "./components/Navigation/Sidebar.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-wrapper">
          <Header />
          <Sidebar />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/whats-reformer" element={<WhatsReformer />} />
            <Route path="/pricing-bookings" element={<Pricing />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/our-team" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
