import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.content}>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/skills">Skills</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/experience">Experience</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/side-project">Side Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
