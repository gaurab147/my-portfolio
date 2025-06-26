import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
      </ul>
    </nav>
  );
}
