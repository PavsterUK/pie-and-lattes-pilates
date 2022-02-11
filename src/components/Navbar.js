import React from 'react';
import logo from "../images/svg.svg";
import styles from "../components/Navbar.module.css"

const Navbar = () => {
    return <div className={styles.container}>
        <div className={styles.logo_title}>
            <img src={logo} />
            <p>Keynsham Reformer Pilates <br/> STUDIO </p>
        </div>
        <ul className={styles.main_nav}>
            <li><a href={() => false}>Home</a></li>
            <li><a href={() => false}>About</a></li>
            <li><a href={() => false}>schedule</a></li>
            <li><a href={() => false}>classes</a></li>
            <li><a href={() => false}>Contacts</a></li>
        </ul>
    </div>
};

export default Navbar;