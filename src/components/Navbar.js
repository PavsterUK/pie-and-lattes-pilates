import React from 'react';
import logo from "../images/svg.svg";
import styles from "../components/Navbar.module.css"

const Navbar = () => {
    return <div className={styles.container}>
        <div className={styles.logo_title}>
            <img src={logo} />
            <h2>KEYNSHAM PILATES STUDIO  "PIE  &#38; LATTES" </h2>
        </div>


        <ul className={styles.main_nav}>
            <li><a href={() => false}>Home</a></li>
            <li><a href={() => false}>About</a></li>
            <li><a href={() => false}>schedule</a></li>
            <li><a href={() => false}>courses</a></li>
            <li><a href={() => false}>classes</a></li>
            <li><a href={() => false}>Contacts</a></li>
        </ul>
    </div>
};

export default Navbar;