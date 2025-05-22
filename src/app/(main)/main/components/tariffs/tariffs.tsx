import Link from "next/link";
import styles from "./tariffs.module.css";
import Image from "next/image";
import cloudStyles from "../about/about.module.css";

const Tariffs = () => {
  return (
    <div id="tariffs" className={styles.tariffs}>
      <div className={cloudStyles.leftClouds}>
        <Image
          className={cloudStyles.leftCloudLarge}
          alt="left-cloud-large"
          src="/left-cloud-large.png"
          width={400}
          height={400}
        />
        <Image
          className={cloudStyles.leftCloudSmall}
          alt="logo"
          src="/left-cloud-small.png"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.tariffsContainer}>
        <p className={styles.tariffsTitle}>Тарифы</p>
        <div className={styles.tariffsBlocks}>
          <div className={`${styles.tariffBlock} ${styles.tariffBlockFirst}`}>
            <p className={styles.tariffBlockTitle}>Начальный</p>
            <Image
              alt="left-cloud-large"
              src="/note-basic.png"
              width={113}
              height={208}
            />
            <p className={styles.tariffBlockPrice}>бесплатно</p>
            <Link className={styles.tariffBlockButton} href={"/"}>
              Подробнее
            </Link>
          </div>
          <div className={`${styles.tariffBlock} ${styles.tariffBlockSecond}`}>
            <p
              className={`${styles.tariffBlockTitle} ${styles.tariffBlockTitleSecond}`}
            >
              Расширенный
            </p>
            <Image
              alt="left-cloud-large"
              src="/note-extended.png"
              width={78}
              height={217}
            />
            <p className={styles.tariffBlockPrice}>2 990 Тг</p>
            <Link className={styles.tariffBlockButton} href={"/"}>
              Подробнее
            </Link>
          </div>
          <div className={`${styles.tariffBlock} ${styles.tariffBlockThird}`}>
            <p
              className={`${styles.tariffBlockTitle} ${styles.tariffBlockTitleSecond}`}
            >
              Маэстро
            </p>
            <Image
              alt="left-cloud-large"
              src="/note-maestro.png"
              width={113}
              height={208}
            />
            <p
              className={`${styles.tariffBlockPrice} ${styles.tariffBlockTitleSecond}`}
            >
              4 990 тг
            </p>
            <Link className={styles.tariffBlockButton} href={"/"}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
