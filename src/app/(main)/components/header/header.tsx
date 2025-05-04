"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <Image alt="logo" src="/logo.svg" width={165} height={60} />
        </Link>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <div className={styles.navHeader}>
            <Image
              alt="logo"
              className={styles.goldenLogo}
              src="/golden-logo.svg"
              width={165}
              height={60}
            />
            <Image
              className={styles.xIcon}
              onClick={() => setMenuOpen(false)}
              alt="x"
              src="/x-icon.svg"
              width={24}
              height={24}
            />
          </div>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                О нас
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#minigames" onClick={() => setMenuOpen(false)}>
                Мини-игры
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#tariffs" onClick={() => setMenuOpen(false)}>
                Тарифы
              </a>
            </li>
          </ul>

          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              <Image
                alt="instagram"
                src="/instagram.svg"
                width={33}
                height={33}
              />
            </Link>
            <Link href="/profile" className={styles.navLink}>
              <Image
                onClick={() => setMenuOpen(false)}
                alt="profile"
                src="/profile.svg"
                width={33}
                height={33}
              />
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="#login"
              className={styles.navLink}
            >
              Войти
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
