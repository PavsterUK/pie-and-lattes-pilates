import React from 'react';
import images from "../images/logo.svg"
import Card from './GUI/Card';
import styles from "./LandingPage.module.css";
import Navbar from './Navbar';

const LandingPage = () => {
    return <div className={styles.container} >
        <section className={styles.top_section} >
            
            <Navbar />
            

        </section>



    </div>;
};

export default LandingPage;