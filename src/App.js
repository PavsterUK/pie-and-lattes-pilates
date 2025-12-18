import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import GlobalBackground from "./components/ui/3d/GlobalBackground";

// Lazy load all page components for code-splitting
const Home = React.lazy(() => import("./components/pages/Home"));
const WhatsReformer = React.lazy(() => import("./components/pages/WhatsReformer"));
const Pricing = React.lazy(() => import("./components/pages/Pricing"));
const Contacts = React.lazy(() => import("./components/pages/Contact"));
const About = React.lazy(() => import("./components/pages/About"));
const TermsAndConditions = React.lazy(() => import("./components/pages/TermsAndConditions"));
const Classes = React.lazy(() => import("./components/pages/Classes"));

// Simple loading fallback
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    color: 'var(--color-primary)'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="main-wrapper">
        <GlobalBackground />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/whats-reformer" element={<WhatsReformer />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/pricing-bookings" element={<Pricing />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/our-team" element={<About />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

