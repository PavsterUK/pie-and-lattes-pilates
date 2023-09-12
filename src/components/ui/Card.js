import React from 'react';
import styles from "../ui/Card.module.css"

const Card = (props) => {
    return <div className={styles.container}>
        {props.children}
    </div>;
};

export default Card;
