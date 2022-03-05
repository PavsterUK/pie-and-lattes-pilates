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
          <button onClick={() => props.openTab({ home: true })}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => props.openTab({ whatsReformer: true })}>
            What's Reformer?
          </button>
        </li>
        <li>
          <button
            onClick={() => props.openTab({ pricingBookings: true })}
          >
            pricing &amp; Bookings
          </button>
        </li>
        <li>
          <button onClick={() => props.openTab({ about: true })}> About</button>
        </li>
        <li>
          <button onClick={() => props.openTab({ contact: true })}>contact</button>
        </li>
        <li>
          <p>&mdash;</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
