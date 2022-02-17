import React from "react";
import Card from "./GUI/Card";

import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <Card>
      <div className={styles.container}>
        <h1>Pricing</h1>
        <h3>
          We recommend you start with a 55-minute Taster session to see how
          Pilates with us can help you achieve your goals. After your Taster
          session, you are welcome to use our promotion for first-time clients
          and purchase a Starter Pack which includes two more privates at a
          special price. You are also welcome to join Group Reformer sessions or
          One-to-One/Duet sessions as soon as you had your introductory session.
        </h3>

        <ul className={styles.price_list}>
          <li>
            <a>Starter Pack<br/><br/>£75</a>
          </li>

          <li>
            <a>1 off Private Session <br/><br/> £51</a>
          </li>

          <li>
            <a>5 Private Sessions <br/><br/> £245</a>
          </li>

          <li>
            <a>10 Private Sessions <br/><br/>£470</a>
          </li>

          <li>
            <a>1 off Duet Session<br/><br/> £64</a>
          </li>

          <li>
            <a>5 Duet Sessions <br/><br/>£310</a>
          </li>

          <li>
            <a>10 Duet Sessions <br/><br/>£600</a>
          </li>

          <li>
            <a>5 Group classes<br/><br/> £90</a>
          </li>

          <li>
            <a>10 Group classes <br/><br/>£170</a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Pricing;
