import React from 'react';
import main_logo from "../images/main_logo.svg";
import styles from "../components/Navbar.module.css"

const Navbar = () => {
    return <div className={styles.container}>
        <ul className={styles.main_nav}>
            <li><a href="">Home</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">schedule</a></li>
            <image scr={main_logo}/>
            
            <li><a href="">courses</a></li>
            <li><a href="">classes</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
    </div>
};

export default Navbar;
