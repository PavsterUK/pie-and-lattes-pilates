import React from "react";

import styles from "./Contact.module.css";
import Card from "../GUI/Card";
import EmailPic from "../../images/email-symbol.svg";
import PhonePic from "../../images/phone-line.svg";
import LocationPic from "../../images/address-location.svg";
import FacebookPic from "../../images/facebook-round-line.svg";
import InstagramPic from "../../images/instagram-round-line.svg";

const Contacts = () => {
  return (
    <Card>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <hr />

        <h3>PIE&amp;LATTES Pilates Studio</h3>

        <img className={styles.img} src={EmailPic} />
        <h3>pienadlattesstudio@gmail.com</h3>
        <img className={styles.img} src={PhonePic} />
        <h3>+447884788700</h3>
        <img className={styles.img} src={LocationPic} />
        <h3>23a High Street, Keynsham, BS31 1DP</h3>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com/PieandLattesPilatesStudio/">
            <img className={styles.img} src={FacebookPic} />
          </a>
          <a href="https://www.instagram.com/pienadlattes_pilates_studio/">
            <img className={styles.img} src={InstagramPic} />
          </a>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.2646706531064!2d-2.50076558423336!3d51.41656457962031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f59967da0f9%3A0xbe1274952ac66831!2s23a%20High%20St%2C%20Keynsham%2C%20Bristol%20BS31%201DP!5e0!3m2!1sen!2suk!4v1645383230096!5m2!1sen!2suk"
          width="400"
          height="300"
          title="PieLattes"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Card>
  );
};

export default Contacts;
