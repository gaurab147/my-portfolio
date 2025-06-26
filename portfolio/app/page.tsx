import Header from "./_components/header";
import Hero from "./_components/Hero";
import Skill from "./_components/skill/page";
import Profile from "./_components/profile/page";
import Strengths from "./_components/strengths/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />

      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>
          I’m a passionate front-end developer from Okinawa studying at Gaigo
          Gakuin. I enjoy building creative and responsive websites.
        </p>
      </section>

      <section id="profile" className={styles.section}>
        <h2>Profile</h2>
        <p>Skills: HTML, CSS, JavaScript, TypeScript, React, Next.js, Git</p>
      </section>

      <section id="work" className={styles.section}>
        <h2>My Work</h2>
        <p>Check out my GitHub for some projects I’ve built (coming soon!)</p>
      </section>

      <section id="skills">
        <Skill />
      </section>
      <section id="profile">
        <Profile />
      </section>
      <section id="strengths">
        <Strengths />
      </section>
    </main>
  );
}
