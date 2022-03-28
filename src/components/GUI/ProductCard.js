import React from "react";

import styles from "./ProductCard.module.css";

function ProductCard(props) {

  let images = props.images.map(image => {
    return <img src={image} alt="pic" />
  })
    
  return (
    <div className={styles.container}>
      <div className={styles.image}>{images}</div>
      <h2>{props.title}</h2>
      <hr />
      <h5>{props.summary}</h5>
      <h2>{props.price}</h2>
      <a href={props.href}>{props.linkDesc}</a>
    </div>
  );
}

export default ProductCard;
