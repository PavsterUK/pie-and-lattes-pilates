import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Keynsham Reformer Pilates</h4>
            <p>High Street, Keynsham<br />Bristol, UK</p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/pricing-bookings" className={styles.link}>Book a Class</Link>
            <Link to="/contact" className={styles.link}>Contact Us</Link>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Follow Us</h4>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/pieandlattespilates/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className={styles.socialIcon} />
              </a>
              <a href="https://www.facebook.com/pieandlattespilates/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className={styles.socialIcon} />
              </a>
            </div>
            <div className={styles.legal}>
              <Link to="/terms" className={styles.legalLink}>Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Keynsham Reformer Pilates Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
