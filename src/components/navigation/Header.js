import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/Logo White.svg";
import styles from "./Header.module.css";

const NAV_ID = "site-navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink} aria-label="Keynsham Reformer Pilates Studio home">
          <img src={logo} alt="Keynsham Reformer Pilates Studio" className={styles.logo} />
        </Link>

        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-controls={NAV_ID}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>

        <nav id={NAV_ID} className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={location.pathname === '/' ? styles.active : ''} onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/whats-reformer" className={location.pathname === '/whats-reformer' ? styles.active : ''} onClick={closeMenu}>The Reformer</Link>
            </li>
            <li>
              <Link to="/classes" className={location.pathname === '/classes' ? styles.active : ''} onClick={closeMenu}>Classes</Link>
            </li>
            <li>
              <Link to="/pricing-bookings" className={location.pathname === '/pricing-bookings' ? styles.active : ''} onClick={closeMenu}>Pricing</Link>
            </li>
            <li>
              <Link to="/our-team" className={location.pathname === '/our-team' ? styles.active : ''} onClick={closeMenu}>The Team</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
