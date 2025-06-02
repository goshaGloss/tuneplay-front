import Link from "next/link";
import styles from "./hero.module.css";
import { Banner } from "../../page";

const Hero = ({ banner }: { banner: Banner | undefined }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBlock}>
        <p className={styles.heroTitle}>{banner?.title}</p>
        <p className={styles.heroSubtitle}>{banner?.description}</p>
        <Link className={styles.heroButton} href={"/mini-games"}>
          Начать Играть
        </Link>
      </div>
    </div>
  );
};

export default Hero;
