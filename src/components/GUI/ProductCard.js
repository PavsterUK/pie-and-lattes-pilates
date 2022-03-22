import React from "react";

import styles from "./ProductCard.module.css";

function ProductCard(props) {
  return (
      <div className={styles.container}>
          <div className={styles.image}><img src={props.image}/></div>
          <hr/>
          <h3 >Book Your Time Slot</h3>
          <h4 >Book Time Slots</h4>
          <button> Action button</button>
      </div>
  );
}

export default ProductCard;
