import React from 'react';
import images from "../images/logo.svg"
import Card from './GUI/Card';
import styles from "./LandingPage.module.css";
import Navbar from './Navbar';

const LandingPage = () => {
    return <div className = { styles.container } >
        <section className = { styles.top_section } >
        <Navbar/>
        <img src = { images } >
        </img> <Card className = { styles.message } >
        <h4 > Website is being developed and will be coming soon!!!
        <br/>
        For any information about classes and timetable
        <br/>
        Please contact us directly on:
        <br/>
        Mobile: +447884788700 
        <br/>
        Email: pienadlattesstudio @gmail.com
        <br/>
        Thank you and see you soon!!!
        </h4>

    </Card>

    </section>



    </div>;
};

export default LandingPage;