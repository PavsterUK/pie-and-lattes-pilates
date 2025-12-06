import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/Logo White.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Keynsham Reformer Pilates Studio" className={styles.logo} />
        </Link>

        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={location.pathname === '/' ? styles.active : ''} onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/whats-reformer" className={location.pathname === '/whats-reformer' ? styles.active : ''} onClick={toggleMenu}>The Reformer</Link>
            </li>
            <li>
              <Link to="/classes" className={location.pathname === '/classes' ? styles.active : ''} onClick={toggleMenu}>Classes</Link>
            </li>
            <li>
              <Link to="/pricing-bookings" className={location.pathname === '/pricing-bookings' ? styles.active : ''} onClick={toggleMenu}>Pricing</Link>
            </li>
            <li>
              <Link to="/our-team" className={location.pathname === '/our-team' ? styles.active : ''} onClick={toggleMenu}>The Team</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''} onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;