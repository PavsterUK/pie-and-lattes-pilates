import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Reclaim Your Body</h1>
          <p className={styles.heroSubtitle}>Move without pain. Build resilience. Find your balance.</p>
          <Link to="/pricing-bookings">
            <button className="btn">Start Your Journey Today</button>
          </Link>
        </div>
      </section>

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
          <Link to="/pricing-bookings">
            <button className={`btn ${styles.btnSecondary}`}>View Pricing & Book</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
