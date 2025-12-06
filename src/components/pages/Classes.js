import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../ui/PageHero';
import styles from './Classes.module.css';
import heroImage from '../../images/classes_hero.png';

const Classes = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <PageHero
                title="Find Your Flow"
                subtitle="Sessions tailored to your body, your goals, and your pace."
                image={heroImage}
            />

            <section className={`container ${styles.introSection}`}>
                <h2 className={styles.introTitle}>A Class for Every Body</h2>
                <p className={styles.introText}>
                    Whether you’re recovering from an injury, looking to deepen your practice, or simply want to move with friends,
                    we have a session format designed for you. Our studio is built on the belief that Pilates is for everyone.
                </p>
            </section>

            <section className="container">
                <div className={styles.classesGrid}>
                    {/* Private Session Card */}
                    <div className={styles.classCard}>
                        <h3 className={styles.cardTitle}>Private Sessions</h3>
                        <p className={styles.cardSubtitle}>1:1 Attention</p>
                        <p className={styles.cardDescription}>
                            The ultimate personalized experience. Perfect for rehabilitation, beginners building confidence, or advanced practitioners refining their technique.
                            Your instructor will design a session 100% tailored to your body's needs.
                        </p>
                        <ul className={styles.cardFeatures}>
                            <li>Bespoke programming</li>
                            <li>Detailed hands-on correction</li>
                            <li>Ideal for injury rehab</li>
                            <li>Flexible scheduling</li>
                        </ul>
                        <Link to="/contact">
                            <button className="btn">Inquire Now</button>
                        </Link>
                    </div>

                    {/* Duet Session Card */}
                    <div className={styles.classCard}>
                        <h3 className={styles.cardTitle}>Duet Sessions</h3>
                        <p className={styles.cardSubtitle}>2:1 Shared Focus</p>
                        <p className={styles.cardDescription}>
                            Training with a friend or partner is a great way to stay motivated. You'll still receive high-level personal attention,
                            but with the shared energy (and fun) of moving together.
                        </p>
                        <ul className={styles.cardFeatures}>
                            <li>Motivating partnership</li>
                            <li>Cost-effective personal training</li>
                            <li>Shared goals & progress</li>
                            <li>Interactive & fun</li>
                        </ul>
                        <Link to="/contact">
                            <button className="btn">Book Together</button>
                        </Link>
                    </div>

                    {/* Small Group Card */}
                    <div className={styles.classCard}>
                        <h3 className={styles.cardTitle}>Small Group</h3>
                        <p className={styles.cardSubtitle}>Max 3 Clients</p>
                        <p className={styles.cardDescription}>
                            Our signature small group classes offer the community feel of a class without getting lost in the crowd.
                            With a maximum of 3 people, you are guaranteed individual corrections and safety.
                        </p>
                        <ul className={styles.cardFeatures}>
                            <li>Social & supportive environment</li>
                            <li>Varied & dynamic flows</li>
                            <li>Structured progression</li>
                            <li>Most affordable option</li>
                        </ul>
                        <Link to="/pricing-bookings">
                            <button className="btn">View Schedule</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={`container ${styles.faqSection}`}>
                <h2 className={styles.faqTitle}>Often Asked Questions</h2>
                <div className={styles.faqGrid}>
                    <div className={styles.faqItem}>
                        <h3>What should I wear?</h3>
                        <p>Comfortable activewear that lets you move freely. Form-fitting clothes are best so instructors can check your alignment. Grip socks are mandatory for hygiene and safety.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Do I need experience?</h3>
                        <p>Not at all! Our Taster Sessions and Private appointments are designed specifically for beginners. We'll teach you the basics of the machine and the movement.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>How often should I come?</h3>
                        <p>Consistency is key. We recommend 1-2 sessions per week to feel and see the difference. "In 10 sessions you'll feel the difference, in 20 you'll see the difference..."</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Can I do Pilates with an injury?</h3>
                        <p>Yes, often it's the best thing for it! However, you MUST inform us beforehand. We may recommend a Private session first to assess your needs safely.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Classes;
