import styles from "./page.module.css";

export default function SkillPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}></p>
      <ul className={styles.skillList}>
        <li>HTML / CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React / Next.js</li>
        <li>Node.js / Express（現在学習中）</li>
      </ul>
    </main>
  );
}
