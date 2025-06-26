import styles from "./page.module.css";

export default function StrengthsPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Strengths</h2>
      <p className={styles.text}></p>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}></h3>
        <p className={styles.strengthText}></p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}></h3>
        <p className={styles.strengthText}></p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}></h3>
        <p className={styles.strengthText}>。</p>
      </section>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}></h3>
        <p className={styles.strengthText}></p>
      </section>
    </main>
  );
}
