import React from "react";

import styles from "./Contacts.module.css";
import Card from "./GUI/Card";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.meet_us}>
          <h1>Contact Us</h1>
          <hr />
          <br />
          <h3>PIE&amp;LATTES Pilates Studio</h3>
          <h3>&#64; pienadlattesstudio@gmail.com</h3>
          <h3>&#9990; +447884788700</h3>
          <h3>&#9873; 23a High Street, Keynsham, BS31 1DP</h3>
          <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.2646706531064!2d-2.50076558423336!3d51.41656457962031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f59967da0f9%3A0xbe1274952ac66831!2s23a%20High%20St%2C%20Keynsham%2C%20Bristol%20BS31%201DP!5e0!3m2!1sen!2suk!4v1645383230096!5m2!1sen!2suk"
            width="400"
            height="300"
            
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Card>
    </div>
  );
};

export default Contacts;
