import React from 'react';
import logo from "../../images/svg.svg";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return <div className={styles.container}>
        <div className={styles.logo_title}>
            <img src={logo} />
            <p>LIVE IN A BODY YOU LOVE. LOVE THE BODY YOU'RE IN. </p>
        </div>
        <ul className={styles.main_nav}>
            <li><a href={() => false}>&mdash;</a></li>
            <li><a href={() => false}>Home</a></li>
            <li><a href={() => false}>About</a></li>
            <li><a href={() => false}>classes</a></li>
            <li><a href={() => false}>timetable</a></li>
            <li><a href={() => false}>pricing</a></li>
            <li><a href={() => false}>&mdash;</a></li>
        </ul>
    </div>
};

export default Navbar;