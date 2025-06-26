// List 2 - app/about/page.tsx

import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}></p>

      <section className={styles.imageSection}>
        <Image
          src="/images/profile.JPG"
          alt="About Image"
          width={800}
          height={400}
          border-radius={50}
          className={styles.image}
        />
        <div>
          Hey, I’m Gaurab Acharya — a future-focused web developer in the
          making, currently diving deep into code at Okinawa Business Gakuin
          (GAIGO Gakuin). I craft clean, responsive websites with creativity,
          precision, and purpose. Always learning. Always building. Always
          leveling up. 🚀
        </div>
      </section>
    </main>
  );
}
