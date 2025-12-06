import React from "react";
import styles from "./Contact.module.css";
import EmailPic from "../../images/email-symbol.svg";
import PhonePic from "../../images/phone-line.svg";
import LocationPic from "../../images/address-location.svg";
import FacebookPic from "../../images/facebook-round-line.svg";
import InstagramPic from "../../images/instagram-round-line.svg";
import PageHero from "../ui/PageHero";
import contactHero from "../../images/contact_hero.png";

const Contact = () => {
  return (
    <>
      <PageHero
        image={contactHero}
        title="Get in Touch"
        subtitle="We'd love to hear from you."
      />
      <div className={`container ${styles.pageWrapper}`}>


        <div className={styles.contentWrapper}>
          <section className={styles.infoSection}>
            <div className={styles.infoBlock}>
              <img className={styles.icon} src={LocationPic} alt="Location" />
              <h3 className={styles.label}>Address</h3>
              <p className={styles.value}>
                23a High Street<br />
                Keynsham, BS31 1DP
              </p>
            </div>

            <div className={styles.infoBlock}>
              <img className={styles.icon} src={EmailPic} alt="Email" />
              <h3 className={styles.label}>Email</h3>
              <p className={styles.value}>
                <a href="mailto:pieandlattesstudio@gmail.com" className={styles.link}>
                  pieandlattesstudio@gmail.com
                </a>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <img className={styles.icon} src={PhonePic} alt="Phone" />
              <h3 className={styles.label}>Phone</h3>
              <p className={styles.value}>
                <a href="tel:+447884788700" className={styles.link}>
                  +44 7884 788700
                </a>
              </p>
            </div>

            <div className={styles.socialMedia}>
              <a href="https://www.facebook.com/PieandLattesPilatesStudio/" target="_blank" rel="noopener noreferrer">
                <img className={styles.socialIcon} src={FacebookPic} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/pienadlattes_pilates_studio/" target="_blank" rel="noopener noreferrer">
                <img className={styles.socialIcon} src={InstagramPic} alt="Instagram" />
              </a>
            </div>
          </section>

          <section className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.2646706531064!2d-2.50076558423336!3d51.41656457962031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f59967da0f9%3A0xbe1274952ac66831!2s23a%20High%20St%2C%20Keynsham%2C%20Bristol%20BS31%201DP!5e0!3m2!1sen!2suk!4v1645383230096!5m2!1sen!2suk"
              title="Pie and Lattes Pilates Studio Location"
              className={styles.mapFrame}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
