import React from "react";
import PageHero from "../ui/PageHero";
import studioImage from "../../images/studio.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <PageHero
        title="Keynsham Reformer Pilates Studio
"
        subtitle="Move without pain. Build resilience. Find your balance."
        image={studioImage}
      >
        <a href="https://app.squarespacescheduling.com/schedule/39d8394f" target="_blank" rel="noopener noreferrer">
          <button className="btn">Book Now</button>
        </a>
      </PageHero>

      <section className={`container ${styles.aboutSection}`}>
        <h2>More Than Just a Workout</h2>
        <p>
          <strong>Feeling stiff, stressed, or struggling with back pain?</strong> You’re not alone.
          Modern life takes a toll on our bodies, leaving us disconnected and tight.
        </p>
        <p>
          At our Keynsham studio, we don't just "exercise." We rebuild. Using professional Reformer equipment,
          we help you restore your posture, regain your strength, and finally feel at home in your body again.
          With classes capped at just 3 people, you'll never get lost in the crowd.
        </p>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className="text-center">Why You'll Love It Here</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Build a Resilient Body</h3>
              <p>Tone muscles you didn't know you had. Create a long, lean, and powerful physique that supports you in everyday life.</p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Never Get Lost in the Crowd</h3>
              <p>With a maximum of 3 clients per class, you receive the personalized correction and guidance usually reserved for personal training.</p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Move Pain-Free Again</h3>
              <p>Say goodbye to back aches and stiffness. We specialize in posture alignment, injury recovery, and safe, low-impact movement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Don't Wait to Feel Better</h2>
          <p className={styles.ctaText}>Your first step towards a stronger, pain-free body is just a click away.</p>
          <a href="https://app.squarespacescheduling.com/schedule/39d8394f" target="_blank" rel="noopener noreferrer">
            <button className={`btn ${styles.btnSecondary}`}>Book Now</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
