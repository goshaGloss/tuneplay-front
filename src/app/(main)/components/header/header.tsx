import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <Image alt="logo" src="logo.svg" width={165} height={60} />
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home">О нас</a>
            </li>
            <hr className={styles.navLinkSeparator} />
            <li className={styles.navItem}>
              <a href="#about">Мини-игры</a>
            </li>
            <hr className={styles.navLinkSeparator} />
            <li className={styles.navItem}>
              <a href="#services">Тарифы</a>
            </li>
          </ul>
        </nav>
        <div className={styles.navLinks}>
          <Link href={"/"} className={styles.navLink}>
            <Image alt="instagram" src="instagram.svg" width={33} height={33} />
          </Link>
          <Link href={"/"} className={styles.navLink}>
            <Image alt="profile" src="profile.svg" width={33} height={33} />
          </Link>
          <Link href={"/"} className={styles.navLink}>
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
