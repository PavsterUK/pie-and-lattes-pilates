import React from "react";

import Card from "../GUI/Card";
import styles from "./WhatsReformer.module.css";
import funny from "../../images/funny.jpeg";
//import reformer from "../../images/Reformer Photo.jpg";
import reformer from "../../images/pilates-machine.jpg";

const WhatsReformer = () => {
  return (
    <Card>
      <div className={styles.container}>
        <h1>What is a Reformer?</h1>
        <img src={reformer} alt="reformer" />
        <h3>
          “The Reformer is the most widely known piece of Pilates equipment and
          is an amazingly versatile apparatus.The Universal Reformer’s unique
          combination of springs, pulleys, straps, and sliding carriage make it
          an incredibly valuable and useful piece of equipment.Its adjustability
          enables Reformer to address a wide range of physical capabilities,
          disabilities, and fitness goals with refined, sophisticated solutions.
          Joseph Pilates created nearly 100 exercises on the Reformer – more
          exercises than he designed for any other piece of Pilates Equipment. “
          *Everything you need to know about Pilates{" "}
          
        </h3>

        <h1>
          What is Pilates? <br />
        </h1>

        <h3>
          Pilates is a type of mind-body exercise developed in the early 20th
          century by Joseph Pilates, after whom it was named. Pilates called his
          method "Contrology". It focuses on deep healthy breathing, flexible
          and decompressed spine and joints, robust circulation, and the trinity
          of body/mind/spirit.
        </h3>
        <br />
        <img src={funny} alt="funny" />
      </div>
    </Card>
  );
};

export default WhatsReformer;
