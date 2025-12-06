import React, { useState } from 'react';
import styles from './About.module.css';
import Kotryna from '../../images/Ingrida2.JPG';
import Alice from '../../images/Alice2.jpg';
import Emily from '../../images/Emily2.jpeg';
import PageHero from '../ui/PageHero';
import teamHero from '../../images/team_hero.png';

const TeamMember = ({ image, name, role, bio }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Split bio into paragraphs
    const paragraphs = bio.split('\n\n');
    const intro = paragraphs[0];
    const rest = paragraphs.slice(1);

    return (
        <article className={styles.memberCard}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.contentWrapper}>
                <h2 className={styles.name}>{name}</h2>
                <h3 className={styles.role}>{role}</h3>
                <div className={styles.bio}>
                    <p>{intro}</p>
                    {isExpanded && rest.map((para, index) => (
                        <p key={index} style={{ marginTop: '1rem' }}>{para}</p>
                    ))}
                </div>
                {rest.length > 0 && (
                    <button
                        className={styles.showMoreBtn}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                        <span className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}>▼</span>
                    </button>
                )}
            </div>
        </article>
    );
};

const About = () => {
    const team = [
        {
            name: 'Kotryna',
            role: 'Pilates Teacher',
            image: Kotryna,
            bio: `Hey there, I'm Kotryna, a classically trained Pilates teacher based in beautiful Bristol. Let me tell you how Pilates has been my ultimate happy place throughout the years. As a Law student and a busy professional working for a global antipiracy company, my days were spent in front of the computer. However, Pilates was my sanctuary, my escape to a calm and peaceful mind and a strong and healthy body.

Since 2006, I have been dedicated to the practice of Pilates and am thrilled to be approaching my first decade of teaching. I am a proud graduate of The Pilates Center Advanced Teacher Training program, renowned as the "Harvard of Pilates", which I completed in London in 2015. I also have had the privilege of working with exceptional teachers such as Debora Kolwey, Rachel Taylor Segel, and Amy Taylor Alpers, all of whom have contributed to my ongoing education and expertise.

My passion for Pilates extends beyond adults and into children's fitness, and I am proud to be a certified Polestar Pilates instructor for Juniors. I believe that balance is the key to a healthy and fulfilling life, and that's why I always make sure to enjoy my pie and lattes, while also prioritizing my Pilates practice.

So come and join me for fun and challenging classes, where we'll connect our mind and body, and work on improving balance, flexibility, and muscular tone. Let's become healthier, happier, and stronger together.`
        },
        {
            name: 'Alice',
            role: 'Pilates Teacher',
            image: Alice,
            bio: `Alice is a Pilates teacher and dance artist based in Bristol, with a deep passion for movement and fitness. She has been practicing Pilates for years and qualified as a Mat work and Equipment Pilates teacher in 2014 with Alan Herdman. Alice graduated from Falmouth University in 2017 with a first-class BA in Dance and Choreography, which she has incorporated into her unique and dynamic Pilates classes. With experience teaching in various studios across Bristol, Alice has developed a teaching style that is both supportive and challenging, catering to all levels from beginners to advanced practitioners.

Alice believes that Pilates is not just a workout, but a way of life. She inspires her students to incorporate Pilates principles into their daily routines for overall health and wellbeing. Her classes emphasize correct form and alignment, minimizing the risk of injury while maximizing the benefits of the practice. Alice is committed to sharing her expertise and regularly participates in workshops and seminars to bring new insights to her teaching.

Join Alice for a transformative Pilates experience and achieve your fitness goals while feeling your best. Her classes are perfect for improving posture, building strength, and unwinding after a long day. With Alice's infectious passion for Pilates, you're sure to leave her class feeling inspired and motivated.`
        },
        {
            name: 'Emily',
            role: 'Pilates Teacher',
            image: Emily,
            bio: `Emily is a professionally trained dancer from London Studios, with over two decades of experience teaching dance across a variety of styles and settings. Her journey in movement has naturally evolved to include 8 years of expertise as an instructor in Barre, Fitness, and Reformer Pilates, where her deep understanding of the body and alignment truly shines. Beyond the studio, Emily has held leadership, training, and managerial roles, highlighting her strengths not only as a practitioner but also as a mentor and guide.

Most recently, she has expanded her qualifications to become a certified Yoga Instructor and Spiritual Healer—an evolution that reflects her holistic approach to wellness. Emily’s teaching is known for being grounded, precise, and intuitively attuned to her clients’ needs. With a calm, confident presence and a wealth of knowledge, she offers a well-rounded and supportive experience that empowers individuals both physically and energetically.`
        }
    ];

    return (
        <>
            <PageHero
                image={teamHero}
                title="Meet Our Team"
                subtitle="Dedicated to your wellness journey."
            />
            <div className={`container ${styles.pageWrapper}`}>

                <div className={styles.teamGrid}>
                    {team.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;
