import React from "react";
import Card from "../GUI/Card";
import ProductCard from "../GUI/ProductCard";
import TimeAndDate from "../../images/calendar-and-time.svg";
import OnePerson from "../../images/one-person.svg";
import ThreePerson from "../../images/team.svg";

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

        <ProductCard
          image={TimeAndDate}
          title={"book time slot"}
          summary={"select time and date that works for you."}
          href={
            "https://app.squarespacescheduling.com/schedule.php?owner=25295759"
          }
          linkDesc={"see available slots"}
        />

        <div className={styles.privateSessions}>
          <ProductCard
            image={OnePerson}
            price={"£25"}
            title={"Taster Session"}
            summary={
              "For first-time clients only. We recommend you to start with a 55-minute one-to-one class to see how Pilates with us can help you achieve your goals."
            }
            href={"https://buy.stripe.com/8wM6pm9993Iu6ek145"}
            linkDesc={"make a payment"}
          />

          <ProductCard
            image={OnePerson}
            price={"£75"}
            title={"Starter Pack"}
            summary={
              "Two private sessions, to make your start of the Pilates journey smoother. First-time clients only."
            }
            href={"https://buy.stripe.com/fZe296fxxfrc1Y4eV4"}
            linkDesc={"make a payment"}
          />

          <ProductCard
            image={OnePerson}
            price={"£51"}
            title={"1 off Private Session"}
            summary={
              "If you like to work out alone or have some specific issues, the one-to-one session is exactly what you need."
            }
            href={"https://buy.stripe.com/8wMeVSadd1AmbyEaEG"}
            linkDesc={"make a payment"}
          />

          <ProductCard
            image={OnePerson}
            price={"£245"}
            title={"5 Private Sessions"}
            summary={
              "PURCHASE A PACK TO GET A BETTER PRICE. IF YOU LIKE TO WORK OUT ALONE OR HAVE SOME SPECIFIC ISSUES, THE ONE-TO-ONE SESSION IS EXACTLY WHAT YOU NEED."
            }
            href={"https://buy.stripe.com/5kA1523OPbaWdGM6or"}
            linkDesc={"make a payment"}
          />

          <ProductCard
            image={OnePerson}
            price={"£470"}
            title={"10 Private Sessions"}
            summary={
              "PURCHASE A PACK TO GET A BETTER PRICE. IF YOU LIKE TO WORK OUT ALONE OR HAVE SOME SPECIFIC ISSUES, THE ONE-TO-ONE SESSION IS EXACTLY WHAT YOU NEED."
            }
            href={"https://buy.stripe.com/5kA4hefxxbaW1Y47sw"}
            linkDesc={"make a payment"}
          />

          <ProductCard
            image={OnePerson}
            price={"£470"}
            title={"10 Private Sessions"}
            summary={
              "PURCHASE A PACK TO GET A BETTER PRICE. IF YOU LIKE TO WORK OUT ALONE OR HAVE SOME SPECIFIC ISSUES, THE ONE-TO-ONE SESSION IS EXACTLY WHAT YOU NEED."
            }
            href={"https://buy.stripe.com/5kA4hefxxbaW1Y47sw"}
            linkDesc={"make a payment"}
          />
        </div>

        <div className={styles.duetSession}>
          <ProductCard
            image={OnePerson}
            secondImage={OnePerson}
            price={"£64"}
            title={"1 off Duet Session"}
            summary={
              "Share your session with a friend, colleague, or a loved one."
            }
            href={"https://buy.stripe.com/bIY5libhhcf01Y4fZ3"}
            linkDesc={"make a payment"}
          />

          <ProductCard
            image={OnePerson}
            secondImage={OnePerson}
            price={"£310"}
            title={"5 Duet Sessions"}
            summary={
              "Purchase a pack to get a better price. Share your session with a friend, colleague, or a loved one.."
            }
            href={"https://buy.stripe.com/dR6dROfxxfrcgSYbIO"}
            linkDesc={"make a payment"}
          />

          <ProductCard
            image={OnePerson}
            secondImage={OnePerson}
            price={"£600"}
            title={"10 Duet Sessions"}
            summary={
              "Purchase a pack to get a better price. Share your session with a friend, colleague, or a loved one.."
            }
            href={"https://buy.stripe.com/5kA9By1GHfrc1Y46ov"}
            linkDesc={"make a payment"}
          />
        </div>

        <div className={styles.groupClasses}>
          <ProductCard
            image={ThreePerson}
            price={"£90"}
            title={"5 Group classes"}
            summary={
              "We offer group classes to all levels and abilities at a maximum of 3 people per group, which will allow you to get the maximum attention from your instructor during the class."
            }
            href={"https://buy.stripe.com/dR64he7115QC1Y4dQY"}
            linkDesc={"make a payment"}
          />

          <ProductCard
            image={ThreePerson}
            price={"£170"}
            title={"10 Group classes"}
            summary={
              "We offer group classes to all levels and abilities at a maximum of 3 people per group, which will allow you to get the maximum attention from your instructor during the class."
            }
            href={"https://buy.stripe.com/eVa7tq7117YKgSYfZ7"}
            linkDesc={"make a payment"}
          />
        </div>

      </div>
    </Card>
  );
};

export default Pricing;
