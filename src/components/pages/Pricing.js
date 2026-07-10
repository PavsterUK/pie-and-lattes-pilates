import React from 'react';
import styles from './Pricing.module.css';
import PageHero from '../ui/PageHero';
import pricingHero from '../../images/pricing_hero.png';
import { VAGARO_BOOKING_URL } from '../../constants/links';

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
                    <p className={styles.policyText}>
                        Please kindly note: Full advance payment is required for Taster Sessions and single appointments, payable at the time of booking.
                        <br />
                        Please be aware of the 24 hours cancellation policy.
                        <br />
                        Use our online booking page to choose a class, session, package, or gift card.
                    </p>
                    <a className={`btn ${styles.introBookingBtn}`} href={VAGARO_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                        Book Online
                    </a>
                </section>

                <section className={styles.pricingSection}>
                    <h2 className={styles.sectionTitle}>First-Time Clients</h2>
                    <div className={styles.pricingGroup}>
                        <div className={styles.groupGrid}>
                            <div className={`${styles.card} ${styles.highlight}`}>
                                <span className={styles.highlightLabel}>Recommended</span>
                                <h3 className={styles.cardTitle}>Taster Session</h3>
                                <div className={styles.price}>£35</div>
                                <p className={styles.cardDesc}>
                                    One 55-minute private intro session. We assess your needs and show you how the Reformer works.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Starter Pack</h3>
                                <div className={styles.price}>£90</div>
                                <p className={styles.cardDesc}>
                                    Two private sessions for new clients. Ideal after your taster if you want extra support.
                                </p>
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
                                    <div className={styles.price}>£68</div>
                                    <p className={styles.cardDesc}>
                                        One private 1:1 session tailored to your body, needs, and goals.
                                    </p>
                                </div>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Pack of 4</h3>
                                    <div className={styles.price}>£260</div>
                                    <p className={styles.cardDesc}>
                                        Four private 1:1 sessions. Works out at £65 per session and saves £12.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Duet Sessions */}
                        <div className={styles.pricingGroup}>
                            <h3 className={styles.groupTitle}>Duet (2:1)</h3>
                            <div className={styles.groupGrid}>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Single Session</h3>
                                    <div className={styles.price}>£80</div>
                                    <p className={styles.cardDesc}>
                                        One session for two people training together. £80 total, not per person.
                                    </p>
                                </div>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Pack of 4</h3>
                                    <div className={styles.price}>£304</div>
                                    <p className={styles.cardDesc}>
                                        Four duet sessions for the pair. Works out at £76 per session and saves £16.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Group Classes */}
                        <div className={styles.pricingGroup}>
                            <h3 className={styles.groupTitle}>Small Group (3:1)</h3>
                            <div className={styles.groupGrid}>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Single Class</h3>
                                    <div className={styles.price}>£29</div>
                                    <p className={styles.cardDesc}>
                                        One small group class, max 3 people. £29 per person.
                                    </p>
                                </div>
                                <div className={styles.card}>
                                    <h3 className={styles.cardTitle}>Pack of 4</h3>
                                    <div className={styles.price}>£100</div>
                                    <p className={styles.cardDesc}>
                                        Four small group classes. Works out at £25 per class and saves £16.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.bookingSection}>
                    <h2 className={styles.bookingTitle}>Ready to book your class or session?</h2>
                    <p className={styles.bookingText}>Choose a class, private session, package, or gift card on our secure booking page.</p>
                    <a className={`btn ${styles.bookingBtn}`} href={VAGARO_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                        Book Online
                    </a>
                </section>
            </div>
        </>
    );
};

export default Pricing;
