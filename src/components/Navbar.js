import React from 'react';
import styles from "../components/Navbar.module.css"

const Navbar = () => {
    return <div className={styles.container}>
        <ul className={styles.main_nav}>
            <li><a href="javascript:void(0);">Home</a></li>
            <li><a href="javascript:void(0);">About Me</a></li>
            <li><a href="javascript:void(0);">schedule</a></li>
            <li><a href="javascript:void(0);">courses</a></li>
            <li><a href="javascript:void(0);">classes</a></li>
            <li><a href="javascript:void(0);">Contact us</a></li>
        </ul>
    </div>
};

export default Navbar;