import React from 'react';
import images from "../images/main_logo.svg"
import styles from "./LandingPage.module.css";
import Header from './Navbar';

const LandingPage = () => {
  return <div className={styles.container}>
    <section className={styles.top_section}>
      <img src={images}/>
      <div className={styles.header}><Header/></div>


    </section>



  </div>;
};

export default LandingPage;
