import React from "react";

import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../GUI/Card";

const Welcome = () => {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.greeter}>
          <h1>Welcome to keynsham Reformer pilates </h1>
          <Link to="/pricing-bookings">
            <button className={styles.rubberBand}>Book now &#x27A4;</button>
          </Link>

          <p>
            We offer one-to-one and group Reformer Pilates classes in our
            professionally equipped studio on High Street in Keynsham. We offer
            group classes to all levels and abilities at a maximum of 3 people
            per group, which will allow you to get the maximum attention from
            your instructor during the class.
          </p>

          <p>
            {" "}
            <br /> The group Reformer classes are designed to boost fitness,
            strength, and flexibility. If you like to work out alone or have
            some specific issues, the one-to-one session is exactly what you
            need.
            <br />
            <br />
            We help our clients to overcome or manage specific issues such as:
            <br /> - Bulged discs and other bad back common issues; <br />-
            Sciatica pain; <br />- Multiple sclerosis; <br />- Recovering after
            knee/ hip replacement/
            <br />- c-section or any other intervention to your body, that left
            impact; <br />- Pelvic floor issues; <br />- Posture alignment,
            scoliosis and many others.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Welcome;
