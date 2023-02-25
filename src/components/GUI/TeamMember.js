import React, { useState } from "react";
import styles from "./TeamMember.module.css";

const TeamMember = ({ image, name, role, info }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`${styles.wrapper} column align-center`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={`${name}`} />
      </div>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <button onClick={toggleCollapsed}>Read {name}'s story &#x276F;</button>

      <div className={styles.collapsibleDiv}>
        {!isCollapsed && <p className={styles.info}>{info}</p>}
      </div>
    </div>
  );
};

export default TeamMember;
