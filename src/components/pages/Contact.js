import React from "react";
import styles from "./Contact.module.css";
import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";
import PageHero from "../ui/PageHero";
import contactHero from "../../images/contact_hero.png";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "../../constants/links";

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
              <div className={styles.iconWrapper}>
                <MapPin className={styles.icon} size={32} />
              </div>
              <h3 className={styles.label}>Address</h3>
              <p className={styles.value}>
                25 Temple Street<br />
                Keynsham, BS31 1HF
              </p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} size={32} />
              </div>
              <h3 className={styles.label}>Email</h3>
              <p className={styles.value}>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className={styles.link}>
                  {CONTACT_DETAILS.email}
                </a>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <Phone className={styles.icon} size={32} />
              </div>
              <h3 className={styles.label}>Phone</h3>
              <p className={styles.value}>
                <a href={CONTACT_DETAILS.phoneHref} className={styles.link}>
                  {CONTACT_DETAILS.phoneDisplay}
                </a>
              </p>
            </div>

            <div className={styles.socialMedia}>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <Facebook className={styles.socialIcon} size={28} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <Instagram className={styles.socialIcon} size={28} />
              </a>
            </div>
          </section>

          <section className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps?q=25%20Temple%20Street%2C%20Keynsham%20BS31%201HF&output=embed"
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
