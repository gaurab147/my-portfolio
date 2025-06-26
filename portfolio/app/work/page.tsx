import Link from "next/link";
import styles from "./page.module.css";

export default function WorkPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <p className={styles.text}></p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
          <h3>TITLE1</h3>
          <p> Portfolio site using Next.js</p>
          <Link
            href="https://github.com/username/project1"
            className={styles.link}
          ></Link>
        </li>
        <li className={styles.workItem}>
          <h3>TITLE 2</h3>
          <p>A TODO app made with React and Firebase</p>
          <Link
            href="https://github.com/username/project2"
            className={styles.link}
          ></Link>
        </li>
      </ul>
    </main>
  );
}
