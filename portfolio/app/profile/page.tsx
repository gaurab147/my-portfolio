import Image from "next/image";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/poze.jpeg"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <p>
            <strong>NAME：</strong>ACHARYA GAURAB
          </p>
          <p>
            <strong>AGE：</strong>24
          </p>
          <p>
            Future-ready web developer with a passion for clean code, smart
            design, and building digital experiences that actually work.
          </p>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>HOBBIES</h3>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/diving.jpeg"
              alt="ADVENTURE"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>ADVENTURE</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/singing.jpeg"
              alt="SINGING"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>SINGING</p>
          </article>
          {/* 必要に応じてカードを追加 */}
        </div>
      </section>
    </main>
  );
}
