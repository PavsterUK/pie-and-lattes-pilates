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
          <button onClick={props.setIsHome}>Home</button>
        </li>
        <li>
          <button onClick={props.setIsWhatsReformer}>What's Reformer?</button>
        </li>
        <li>
          <button onClick={props.setIsPricing}>pricing &amp; Bookings</button>
        </li>
        <li>
          <button onClick={props.setIsAboutMe}> About me</button>
        </li>
        <li>
          <button onClick={props.setIsContacts}>contact</button>
        </li>
        <li>
          <p>&mdash;</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
