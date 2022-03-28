import React from "react";
import Card from "../GUI/Card";
import ProductCard from "../GUI/ProductCard";
import TimeAndDate from "../../images/calendar-and-time.svg";
import OnePerson from "../../images/one-person.svg";
import ThreePerson from "../../images/team.svg";
import ScrollRightImg from "../../images/scroll-right.svg";

import styles from "./Pricing.module.css";
import RoundedPinkBox from "../GUI/RoundedPinkBox";

const Pricing = () => {
  return (
    <Card>
      <div className={styles.container}>
        <RoundedPinkBox>
          <h1>Where To Begin?</h1>
          <h3>
            We recommend you start with a 55-minute Taster session to see how
            Pilates with us can help you achieve your goals.
            <br />
            <br /> After your Taster session, you are welcome to use our
            promotion for first-time clients and purchase a Starter Pack which
            includes two more privates at a special price. <br />
            <br />
            You are also welcome to join Group Reformer sessions or
            One-to-One/Duet sessions as soon as you had your introductory
            session.
          </h3>
          <br />
        </RoundedPinkBox>

        <div className={styles.step1}>
          <RoundedPinkBox>
            <h1>Book Your Class Here</h1>
            <h3>
              **Full advance payment is required for Taster Session and any
              1-off sessions**
            </h3>

            <br/>

            <ProductCard
              images={[TimeAndDate]}
              summary={"select a time and date that works for you. "}
              href={
                "https://app.squarespacescheduling.com/schedule.php?owner=25295759"
              }
              linkDesc={"book a time slot"}
            />
          </RoundedPinkBox>
        </div>

        <div className={styles.step2}>
          <h1>Pricing and Packs</h1>
          <h3> !!!Please be aware of the 24 hours cancelation policy!!! </h3>
          <br/>
          <h3>***Payable at the end of a time slot booking.</h3>
          <div className={styles.starterPack}>
            <h2 className={styles.packDesc}>First-Time Clients</h2>
            <div className={styles.starterPackCardWrapper}>
              <ProductCard
                images={[OnePerson]}
                price={"£25"}
                title={"Taster Session"}
                summary={
                  "For first-time clients only. We recommend you to start with a 55-minute one-to-one class to see how Pilates with us can help you achieve your goals. "
                }
                href={"#"}
                linkDesc={"***"}
              />

              <div className={styles.scrollRightImg}>
                <img src={ScrollRightImg} alt="scroll right"/>
              </div>

              <ProductCard
                images={[OnePerson]}
                price={"£75"}
                title={"Starter Pack"}
                summary={
                  "Two private sessions, to make your start of the Pilates journey smoother. First-time clients only."
                }
                href={"https://buy.stripe.com/fZe296fxxfrc1Y4eV4"}
                linkDesc={"Buy now"}
              />
            </div>
          </div>

          <div className={styles.privateSessions}>
            <h2 className={styles.packDesc}>Private Sessions</h2>
            <div className={styles.privateSessionsWrapper}>
              <ProductCard
                images={[OnePerson]}
                price={"£51"}
                title={"1 off Private Session"}
                summary={
                  "If you like to work out alone or have some specific issues, the one-to-one session is exactly what you need."
                }
                href={"#"}
                linkDesc={"***"}
              />

              <div className={styles.scrollRightImg}>
                <img src={ScrollRightImg} alt="scroll right"/>
              </div>

              <ProductCard
                images={[OnePerson]}
                price={"£245"}
                title={"5 Private Sessions"}
                summary={
                  "PURCHASE A PACK TO GET A BETTER PRICE. IF YOU LIKE TO WORK OUT ALONE OR HAVE SOME SPECIFIC ISSUES, THE ONE-TO-ONE SESSION IS EXACTLY WHAT YOU NEED."
                }
                href={"https://buy.stripe.com/5kA1523OPbaWdGM6or"}
                linkDesc={"Buy now"}
              />

              <ProductCard
                images={[OnePerson]}
                price={"£470"}
                title={"10 Private Sessions"}
                summary={
                  "PURCHASE A PACK TO GET A BETTER PRICE. IF YOU LIKE TO WORK OUT ALONE OR HAVE SOME SPECIFIC ISSUES, THE ONE-TO-ONE SESSION IS EXACTLY WHAT YOU NEED."
                }
                href={"https://buy.stripe.com/5kA4hefxxbaW1Y47sw"}
                linkDesc={"Buy now"}
              />
            </div>
          </div>

          <div className={styles.duetSessions}>
            <h2 className={styles.packDesc}>Duet Sessions</h2>
            <div className={styles.duetSessionsWrapper}>
              <ProductCard
                images={[OnePerson,OnePerson]}
                price={"£64"}
                title={"1 off Duet Session"}
                summary={
                  "Share your session with a friend, colleague, or a loved one."
                }
                href={"#"}
                linkDesc={"***"}
              />

              <div className={styles.scrollRightImg}>
                <img src={ScrollRightImg} alt="scroll right"/>
              </div>

              <ProductCard
                images={[OnePerson,OnePerson]}
                price={"£310"}
                title={"5 Duet Sessions"}
                summary={
                  "Purchase a pack to get a better price. Share your session with a friend, colleague, or a loved one."
                }
                href={"https://buy.stripe.com/dR6dROfxxfrcgSYbIO"}
                linkDesc={"Buy now"}
              />

              <ProductCard
                images={[OnePerson,OnePerson]}
                price={"£600"}
                title={"10 Duet Sessions"}
                summary={
                  "Purchase a pack to get a better price. Share your session with a friend, colleague, or a loved one."
                }
                href={"https://buy.stripe.com/5kA9By1GHfrc1Y46ov"}
                linkDesc={"Buy now"}
              />
            </div>
          </div>

          <div className={styles.groupClasses}>
            <h2 className={styles.packDesc}>Group Classes</h2>
            <div className={styles.groupClassesWrapper}>
              <ProductCard
                images={[ThreePerson]}
                price={"£90"}
                title={"5 Group classes"}
                summary={
                  "We offer group classes to all levels and abilities at a maximum of 3 people per group, which will allow you to get the maximum attention from your instructor during the class."
                }
                href={"https://buy.stripe.com/dR64he7115QC1Y4dQY"}
                linkDesc={"Buy now"}
              />

              <div className={styles.scrollRightImg}>
                <img src={ScrollRightImg} alt="scroll right"/>
              </div>

              <ProductCard
                images={[ThreePerson]}
                price={"£170"}
                title={"10 Group classes"}
                summary={
                  "We offer group classes to all levels and abilities at a maximum of 3 people per group, which will allow you to get the maximum attention from your instructor during the class."
                }
                href={"https://buy.stripe.com/eVa7tq7117YKgSYfZ7"}
                linkDesc={"Buy now"}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Pricing;
