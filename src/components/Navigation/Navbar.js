import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.main_nav}>
        <li>
          <p>&mdash;</p>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/whats-reformer">What's a Reformer?</Link>
        </li>
        <li>
          <Link to="/pricing-bookings">Pricing &amp; Bookings</Link>
        </li>
        <li>
          <Link to="/our-team">OUR TEAM</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <p>&mdash;</p>
      </ul>
    </div>
  );
};

export default Navbar;
