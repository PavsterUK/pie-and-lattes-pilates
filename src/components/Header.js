import React from 'react';
import logo from "../images/svg.svg";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
          <div className={styles.logo_title}>
            <img src={logo} alt="logo" />
            <p>LIVE IN A BODY YOU LOVE. LOVE THE BODY YOU'RE IN. </p>
          </div>
        </div>
      );
}

export default Header