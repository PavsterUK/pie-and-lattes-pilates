import React from 'react';
import styles from './Pricing.module.css';
import PageHero from '../ui/PageHero';
import pricingHero from '../../images/pricing_hero.png';

const Pricing = () => {
    return (
        <>
            <PageHero
                image={pricingHero}
                title="Invest in Yourself"
                subtitle="Flexible options for every lifestyle."
            />
            <div className={`container ${styles.pageWrapper}`}>

                <section className={styles.introSection}>
                    <p className={styles.introText}>
                        Invest in your long-term health. Whether you need focused rehabilitation or a consistently challenging workout,
                        we have a flexible option to suit your life.
                        <br /><br />
                        <strong>New here?</strong> We highly recommend starting with a Taster Session to get comfortable with the machine and meet your teacher.
                    </p>
                    <p className={styles.policyText} style={{ marginTop: '1.5rem', fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.9 }}>
                        Please kindly note: Full advance payment is required for Taster Sessions and single appointments, payable at the time of booking.
                        <br />
                        Please be aware of the 24 hours cancellation policy.
                    </p>
                </section>

                <section className={styles.pricingSection}>
                    <h2 className={styles.sectionTitle}>First-Time Clients</h2>
                    <div className={styles.pricingGroup}>
                        <div className={styles.groupGrid}>
                            <div className={`${styles.card} ${styles.highlight}`}>
                                <span className={styles.highlightLabel}>Recommended</span>
                                <h3 className={styles.cardTitle}>Taster Session</h3>
                                <div className={styles.price}>£33</div>
                                <p className={styles.cardDesc}>
                                    A 55-minute one-to-one class to assess your needs and introduce you to our studio.
                                </p>
                                <a href="https://app.squarespacescheduling.com/schedule.php?owner=25295759" target="_blank" rel="noopener noreferrer">
                                    <button className={`btn ${styles.bookBtn}`}>Book Taster</button>
                                </a>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Starter Pack</h3>
                                <div className={styles.price}>£85</div>
                                <p className={styles.cardDesc}>
                                    Includes two private sessions to kickstart your journey.
                                </p>
                                <a href="https://buy.stripe.com/fZe6pm4STbaWeKQbJ4" target="_blank" rel="noopener noreferrer">
                                    <button className={`btn ${styles.bookBtn}`}>Buy Pack</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.pricingSection}>
                    <h2 className={styles.sectionTitle}>Regular Sessions</h2>
                    <div className={styles.groupsContainer}>
                        {/* Private Sessions */}
                        <div className={styles.pricingGroup}>
                            <h3 className={styles.groupTitle}>Private (1:1)</h3>
                            <div className={styles.groupGrid}>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Single Session</h3>
                                    <div className={styles.price}>£58</div>
                                    <p className={styles.cardDesc}>
                                        Single private session tailored to your specific needs and goals.
                                    </p>
                                    <a href="https://app.squarespacescheduling.com/schedule.php?owner=25295759" target="_blank" rel="noopener noreferrer">
                                        <button className={`btn ${styles.bookBtn}`}>Book Session</button>
                                    </a>
                                </div>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Pack of 4</h3>
                                    <div className={styles.price}>£220</div>
                                    <p className={styles.cardDesc}>
                                        A pack of 4 private sessions. Save £12.
                                    </p>
                                    <a href="https://app.acuityscheduling.com/catalog.php?owner=25295759&action=addCart&clear=1&id=1948530" target="_blank" rel="noopener noreferrer">
                                        <button className={`btn ${styles.bookBtn}`}>Buy Pack</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Duet Sessions */}
                        <div className={styles.pricingGroup}>
                            <h3 className={styles.groupTitle}>Duet (2:1)</h3>
                            <div className={styles.groupGrid}>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Single Session</h3>
                                    <div className={styles.price}>£71</div>
                                    <p className={styles.cardDesc}>
                                        Private session for two people. Price is total for both.
                                    </p>
                                    <a href="https://app.squarespacescheduling.com/schedule.php?owner=25295759" target="_blank" rel="noopener noreferrer">
                                        <button className={`btn ${styles.bookBtn}`}>Book Duet</button>
                                    </a>
                                </div>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Pack of 4</h3>
                                    <div className={styles.price}>£272</div>
                                    <p className={styles.cardDesc}>
                                        A pack of 4 duet sessions. Save £12.
                                    </p>
                                    <a href="https://app.acuityscheduling.com/catalog.php?owner=25295759&action=addCart&clear=1&id=1948535" target="_blank" rel="noopener noreferrer">
                                        <button className={`btn ${styles.bookBtn}`}>Buy Pack</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Group Classes */}
                        <div className={styles.pricingGroup}>
                            <h3 className={styles.groupTitle}>Small Group (3:1)</h3>
                            <div className={styles.groupGrid}>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Single Class</h3>
                                    <div className={styles.price}>£27</div>
                                    <p className={styles.cardDesc}>
                                        Small group class (max 3 people). High attention to detail.
                                    </p>
                                    <a href="https://app.acuityscheduling.com/catalog.php?owner=25295759&action=addCart&clear=1&id=1948532" target="_blank" rel="noopener noreferrer">
                                        <button className={`btn ${styles.bookBtn}`}>Book Class</button>
                                    </a>
                                </div>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Pack of 4</h3>
                                    <div className={styles.price}>£95</div>
                                    <p className={styles.cardDesc}>
                                        A pack of 4 group classes. Save £13.
                                    </p>
                                    <a href="https://app.acuityscheduling.com/catalog.php?owner=25295759&action=addCart&clear=1&id=1948525" target="_blank" rel="noopener noreferrer">
                                        <button className={`btn ${styles.bookBtn}`}>Buy Pack</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.bookingSection}>
                    <h2 className={styles.bookingTitle}>Ready to Book a Time?</h2>
                    <p className={styles.bookingText}>You can view our full schedule and book your slot directly.</p>
                    <a href="https://app.squarespacescheduling.com/schedule.php?owner=25295759" target="_blank" rel="noopener noreferrer">
                        <button className="btn">View Schedule</button>
                    </a>
                </section>
            </div>
        </>
    );
};

export default Pricing;
