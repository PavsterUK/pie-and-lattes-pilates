import React from "react";

import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <a href="https://www.instagram.com/pienadlattes_pilates_studio/" className={styles.instagram}>
          <img src={instagram} alt="instagram"></img>
        </a>
        <a href="https://www.facebook.com/PieandLattesPilatesStudio/" className={styles.facebook}> 
          <img src={facebook} alt="facebook"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
