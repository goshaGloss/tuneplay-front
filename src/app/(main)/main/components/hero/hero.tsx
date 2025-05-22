import Link from "next/link";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBlock}>
        <p className={styles.heroTitle}>Погрузитесь в мир</p>
        <p className={styles.heroTitle}>музыкального творчества</p>
        <p className={styles.heroSubtitle}>
          В мире TunePlay каждый уровень – это новая музыкальная
        </p>
        <p className={styles.heroSubtitle}>
          страна, наполненная волшебством и приключениями.
        </p>
        <Link className={styles.heroButton} href={"/"}>
          Начать Играть
        </Link>
      </div>
    </div>
  );
};

export default Hero;
