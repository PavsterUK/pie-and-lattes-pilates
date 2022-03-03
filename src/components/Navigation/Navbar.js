import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.main_nav}>
        <li>
          <p>&mdash;</p>
        </li>
        <li>
          <button onClick={() => props.home({ home: true })}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => props.whatsReformer({ whatsReformer: true })}>
            What's Reformer?
          </button>
        </li>
        <li>
          <button
            onClick={() => props.pricingBookings({ pricingBookings: true })}
          >
            pricing &amp; Bookings
          </button>
        </li>
        <li>
          <button onClick={() => props.about({ about: true })}> About</button>
        </li>
        <li>
          <button onClick={() => props.about({ contact: true })}>contact</button>
        </li>
        <li>
          <p>&mdash;</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
