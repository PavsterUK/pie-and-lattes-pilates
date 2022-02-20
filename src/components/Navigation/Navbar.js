import React from "react";
import logo from "../../images/svg.svg";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_title}>
        <img src={logo} alt="logo" />
        <p>LIVE IN A BODY YOU LOVE. LOVE THE BODY YOU'RE IN. </p>
      </div>
      <ul className={styles.main_nav}>
        <li>
          <p>&mdash;</p>
        </li>
        <li>
          <button onClick={props.setIsHome}>Home</button>
        </li>
        <li>
          <button onClick={props.setIsWhatsPilates}>What's pilates?</button>
        </li>
        <li>
          <button onClick={props.setIsPricing}>pricing</button>
        </li>
        <li>
          <button onClick={props.setIsAboutMe}> About me</button>
        </li>
        <li>
          <button onClick={props.setIsContacts}>contacts</button>
        </li>
        <li>
          <p>&mdash;</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
