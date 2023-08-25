"use client";

import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className={styles.root}>
      <Logo />
      <div>
        <Link
          className={
            pathname.includes("/blog") ? styles.activeLink : styles.link
          }
          href="/blog"
        >
          Blog
        </Link>
        <span className={styles.divider}>|</span>
        <Link className={styles.link} href="#">
          Terminal Mode
        </Link>
        <span className={styles.divider}>|</span>
        <Link className={styles.link} href="/resume">
          Resume
        </Link>
      </div>
    </div>
  );
};
