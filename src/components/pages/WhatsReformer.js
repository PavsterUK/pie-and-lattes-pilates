import React from "react";
import styles from "./WhatsReformer.module.css";
import PageHero from "../ui/PageHero";
import reformer from "../../images/pilates-machine.jpg";

const WhatsReformer = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <PageHero
        title="The Reformer"
        subtitle="Versatile. Supportive. Transformative."
        image={reformer}
      />

      {/* Intro Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Meet Your New Support System</h2>
        <p className={styles.textBlock}>
          The Reformer might look intimidating at first, but it’s actually the most supportive piece of equipment you’ll ever use.
          Think of it as a helping hand that meets you exactly where you are.
        </p>
        <p className={styles.textBlock}>
          Unlike a mat, the Reformer uses springs and straps to support your weight, allowing you to move with freedom and confidence.
          Whether you need assistance to complete a movement or resistance to build serious strength, the machine adapts to <strong>your</strong> body, not the other way around.
        </p>
        <blockquote className={styles.quote}>
          "It feels like floating. You leave the class feeling taller, lighter, and completely aligned."
        </blockquote>
      </section>

      {/* Benefits Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why You'll Fall in Love</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Total Body Tone</h3>
            <p>Sculpt long, lean muscles from head to toe. You'll engage your core in every single movement.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Kind to Your Joints</h3>
            <p>Get a deeply challenging workout without the impact. Perfect for protecting knees and hips while getting strong.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Find Your Balance</h3>
            <p>The moving carriage challenges your stability, improving your balance and coordination for daily life.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Heal & Strengthen</h3>
            <p>The gold standard for rehabilitation. Safely recover from injuries and banish chronic pain for good.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.sectionTitle}>Ready to Try It?</h2>
        <p className={styles.ctaText}>
          Experience the benefits for yourself. Book a Taster Session today.
        </p>
        <a href="https://app.squarespacescheduling.com/schedule/39d8394f" target="_blank" rel="noopener noreferrer">
          <button className="btn">Book Now</button>
        </a>
      </section>
    </div>
  );
};

export default WhatsReformer;
