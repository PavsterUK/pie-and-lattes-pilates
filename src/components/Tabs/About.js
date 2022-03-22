import React from 'react'

import styles from "./About.module.css"
import Card from '../GUI/Card'
import myPhoto from "../../images/me.jpg"

const About = () => {
  return (
    <Card>
      <div className={styles.container}>
        <h1>About Me </h1>
        <hr/>
        <h3>
          Hi, my name is Kotryna and I am a classically trained Pilates teacher
          living in Bristol. Pilates was always my happy place. After long hours
          in front of the computer, while studying Law and working for the busy
          global antipiracy company, Pilates was the only thing that would help
          me to regain my body and calm my mind.<br/><br/> I have been practicing Pilates
          myself since 2006 and already happily reaching my first decade of
          teaching. I have completed The Pilates Center Advanced Teacher
          training program, which is also known as the “Harvard of Pilates” in
          2015 in London.<br/><br/> I have continued my Pilates education working with
          master teachers Debora Kolwey, Rachel Taylor Segel and Amy Taylor
          Alpers. Having the interest to adapt Pilates to children led me to the
          Polestar Pilates course - Pilates for Juniors.<br/><br/> Life is all about
          balance. So it is important to have some Pie and Lattes, but also some
          Pilates. Come and join me for fun, vigorous classes, where you can
          connect your mind and body, improve your balance, flexibility,
          muscular tone. Become healthier happier, and stronger.
        </h3>
        <img src={myPhoto} alt="me" ></img>
        
      </div>
    </Card>
  )
}

export default About