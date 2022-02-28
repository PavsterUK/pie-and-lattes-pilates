import React from "react";
import Card from "../GUI/Card";

import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <Card>
      <div className={styles.container}>
        <h1>Sessions &amp; Prices</h1>

        <h3>
          We recommend you start with a 55-minute Taster session to see how
          Pilates with us can help you achieve your goals.
          <br />
          <br /> After your Taster session, you are welcome to use our promotion
          for first-time clients and purchase a Starter Pack which includes two
          more privates at a special price. <br />
          <br />
          You are also welcome to join Group Reformer sessions or
          One-to-One/Duet sessions as soon as you had your introductory session.
        </h3>

        <br />
        (**Click on a card you wish to book**)

        <ul className={styles.price_list}>
          <li>
            <a href="https://buy.stripe.com/8wM6pm9993Iu6ek145">
              Taster Session
              <br />
              <br />
              £25
            </a>
          </li>
          <li>
            <a href="https://buy.stripe.com/fZe296fxxfrc1Y4eV4">
              Starter Pack
              <br />
              <br />
              £75
            </a>
          </li>

          <li>
            <a href="https://buy.stripe.com/8wMeVSadd1AmbyEaEG">
              1 off Private Session <br />
              <br /> £51
            </a>
          </li>

          <li>
            <a href="https://buy.stripe.com/5kA1523OPbaWdGM6or">
              5 Private Sessions <br />
              <br /> £245
            </a>
          </li>

          <li>
            <a href="https://buy.stripe.com/5kA4hefxxbaW1Y47sw">
              10 Private Sessions <br />
              <br />
              £470
            </a>
          </li>

          <li>
            <a href="https://buy.stripe.com/bIY5libhhcf01Y4fZ3">
              1 off Duet Session
              <br />
              <br /> £64
            </a>
          </li>

          <li>
            <a href="https://buy.stripe.com/dR6dROfxxfrcgSYbIO">
              5 Duet Sessions <br />
              <br />
              £310
            </a>
          </li>

          <li>
            <a href="https://buy.stripe.com/5kA9By1GHfrc1Y46ov">
              10 Duet Sessions <br />
              <br />
              £600
            </a>
          </li>

          <li>
            <a href="https://buy.stripe.com/dR64he7115QC1Y4dQY">
              5 Group classes
              <br />
              <br /> £90
            </a>
          </li>

          <li>
            <a href="https://buy.stripe.com/eVa7tq7117YKgSYfZ7">
              10 Group classes <br />
              <br />
              £170
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Pricing;
