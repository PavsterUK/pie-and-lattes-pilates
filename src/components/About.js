import React from "react";

import Card from "../components/GUI/Card";
import styles from "./About.module.css";

const About = () => {
  return (
    <Card>
      <div className={styles.container}>
        <h1>WELCOME TO PIE LATTES</h1>
        <h2>REFORMER PILATES STUDIO IN KEYNSHAM.</h2>
        <p>
          We offer one-to-one and group Reformer Pilates classes in our
          professionally equipped studio on High Street in Keynsham. We offer
          group classes to all levels and abilities at a maximum of 3 people per
          group, which will allow you to get the maximum attention from your
          instructor during the class. The group Reformer classes are designed
          to boost fitness, strength, and flexibility. If you like to work out
          alone or have some specific issues, the one-to-one session is exactly
          what you need. We help our clients to overcome or manage specific
          issues such as: - Bulged discs and other bad back common issues; -
          Sciatica pain; - Multiple sclerosis; - Recovering after knee/ hip
          replacement/ c-section or any other intervention to your body, that
          left impact; - Pelvic floor issues; - Posture alignment, scoliosis and
          many others.
        </p>

        <h1>
          What is Pilates? <br />
        </h1>
        <h2>
          /pɪˈlɑːtiːz/ <br /> Noun: Pilates
        </h2>
        <p>
          A system of exercises using special apparatus, designed to improve
          physical strength, flexibility, and posture, and enhance mental
          awareness.
        </p>

        <p>
          Pilates is a type of mind-body exercise developed in the early 20th
          century by Joseph Pilates, after whom it was named. Pilates called his
          method "Contrology". It focuses on deep healthy breathing, flexible
          and decompressed spine and joints, robust circulation, and the trinity
          of body/mind/spirit.
        </p>

        <h1>What is Reformer?</h1>
        <p>
          “The Reformer is the most widely known piece of Pilates equipment and
          is an amazingly versatile apparatus. The Universal Reformer’s unique
          combination of springs, pulleys, straps, and sliding carriage make it
          an incredibly valuable and useful piece of equipment. Its
          adjustability enables Reformer to address a wide range of physical
          capabilities, disabilities, and fitness goals with refined,
          sophisticated solutions. Joseph Pilates created nearly 100 exercises
          on the Reformer – more exercises than he designed for any other piece
          of Pilates Equipment. “ *Everything you need to know about Pilates{" "}
        </p>
      </div>
    </Card>
  );
};

export default About;
