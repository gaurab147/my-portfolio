import styles from "./page.module.css";

export default function StrengthsPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Strengths</h2>
      <p className={styles.text}>
        As a passionate web development student, I bring a mix of technical
        skills and a strong work ethic. I’m constantly learning and improving
        through hands-on projects and real-world challenges.
      </p>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>Front-End Development</h3>
        <p className={styles.strengthText}>
          Proficient in HTML, CSS, and JavaScript. I can create responsive and
          interactive user interfaces with clean and maintainable code.
        </p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>Problem Solving</h3>
        <p className={styles.strengthText}>
          I enjoy solving logical and coding challenges, and I use debugging
          tools and console logs to trace and fix errors efficiently.
        </p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>Version Control & Collaboration</h3>
        <p className={styles.strengthText}>
          Comfortable using Git and GitHub for tracking code, managing projects,
          and collaborating with others in a team.
        </p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>Eagerness to Learn</h3>
        <p className={styles.strengthText}>
          I am constantly exploring new technologies, frameworks, and best
          practices to grow as a developer and stay up to date.
        </p>
      </section>
    </main>
  );
}
