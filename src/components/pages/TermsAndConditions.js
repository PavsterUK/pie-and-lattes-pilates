import React, { useEffect } from 'react';
import styles from './TermsAndConditions.module.css';

const TermsAndConditions = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`container ${styles.pageWrapper}`}>
            <h1 className={styles.title}>Terms & Conditions</h1>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Cancellation Policy</h2>
                    <p className={styles.text}>
                        We operate a strict <strong>24-hour cancellation policy</strong> for all private sessions and group classes.
                    </p>
                    <p className={styles.text}>
                        If you cancel within 24 hours of your scheduled appointment time, or fail to attend, you will be charged the full fee for that session.
                        Cancellations made with more than 24 hours' notice will be rescheduled or credited to your account without penalty.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Payments & Bookings</h2>
                    <ul className={styles.list}>
                        <li>Full advance payment is required for all Taster Sessions and single appointments to secure your booking.</li>
                        <li>Class packs and memberships are non-refundable and non-transferable.</li>
                        <li>All packs have an expiration date from the date of purchase. Please check your specific package details.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Studio Etiquette</h2>
                    <ul className={styles.list}>
                        <li><strong>Socks:</strong> For hygiene and safety reasons, grip socks must be worn at all times while using the Reformer machines. These can be purchased at the studio if needed.</li>
                        <li><strong>Arrival:</strong> Please arrive 5 minutes before your scheduled class time. Late arrivals may not be admitted to group classes to avoid disruption and ensure a proper warm-up.</li>
                        <li><strong>Phones:</strong> Please silence your mobile phones before entering the studio space.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Health & Safety</h2>
                    <p className={styles.text}>
                        Your health and safety are our top priority. New clients must complete a Health Questionnaire prior to their first session.
                    </p>
                    <p className={styles.text}>
                        It is your responsibility to inform your instructor of any injuries, medical conditions, or pregnancy before the session begins.
                        While our instructors are highly trained, participation in any exercise program carries a risk of injury.
                        By attending classes at Pie and Lattes Pilates, you agree to assume full responsibility for any risks, injuries, or damages, known or unknown,
                        which might occur as a result of participating in the program.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;
