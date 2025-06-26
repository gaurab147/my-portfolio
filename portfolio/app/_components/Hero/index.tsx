"use client";
import styles from "./index.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroText}>
        <h1>Hi, I’m </h1>ACHARYA GAURAB
        <p>Aspiring Front-End Developer</p>
      </div>
    </div>
  );
};

export default Hero;
