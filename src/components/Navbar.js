import React from 'react';
import styles from "../components/Navbar.module.css"

const Navbar = () => {
    return <div className={styles.container}>
        <ul className={styles.main_nav}>
            <li><a href={() => false}>Home</a></li>
            <li><a href={() => false}>About Me</a></li>
            <li><a href={() => false}>schedule</a></li>
            <li><a href={() => false}>courses</a></li>
            <li><a href={() => false}>classes</a></li>
            <li><a href={() => false}>Contact us</a></li>
        </ul>
    </div>
};

export default Navbar;