import React from 'react'

import styles from "./RoundedPinkBox.module.css";

const RoundedPinkBox = (props) => {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default RoundedPinkBox