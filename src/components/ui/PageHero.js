import React from 'react';
import styles from './PageHero.module.css';

const PageHero = ({ image, title, subtitle }) => {
    return (
        <div className={styles.hero}>
            <img src={image} alt={title} className={styles.heroImage} />
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{title}</h1>
                {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHero;
