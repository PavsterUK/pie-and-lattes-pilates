import React from "react";

import styles from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={props.image} />
        <img src={props.secondImage} />
      </div>
      <h2>{props.title}</h2>
      <hr />
      <h5>{props.summary}</h5>
      <h2>{props.price}</h2>
      <a href={props.href}>{props.linkDesc}</a>
    </div>
  );
}

export default ProductCard;
