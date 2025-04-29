import Image from "next/image";
import styles from "./advantages.module.css";

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <Image
        className={styles.rightCloudLarge}
        alt="left-cloud-large"
        src="/right-cloud-large.png"
        width={400}
        height={400}
      />
      <div className={styles.advantagesContainer}>
        <p className={styles.advantagesTitle}>
          Преимущества нашего сервиса для создания мелодии
        </p>
        <div className={styles.advantagesBlocks}>
          <div className={styles.advantagesBlock}>
            <Image alt="freedom" src="/freedom.png" width={200} height={160} />
            <p className={styles.advantagesBlockTitle}>Свобода творчества</p>
            <p className={styles.advantagesBlockSubtitle}>
              Открывайте новые инструменты и эффекты, чтобы создавать уникальные
              мелодии.
            </p>
          </div>
          <div className={styles.advantagesBlock}>
            <Image
              alt="freedom"
              src="/simplicity.png"
              width={200}
              height={160}
            />
            <p className={styles.advantagesBlockTitle}>
              Простота использования
            </p>
            <p className={styles.advantagesBlockSubtitle}>
              Интуитивно понятный интерфейс позволяет легко освоить игру даже
              начинающим музыкантам.
            </p>
          </div>
          <div className={styles.advantagesBlock}>
            <Image
              alt="freedom"
              src="/improvement.png"
              width={180}
              height={190}
            />
            <p className={styles.advantagesBlockTitle}>Постоянное развитие</p>
            <p className={styles.advantagesBlockSubtitle}>
              С каждым новым уровнем вы будете открывать новые возможности для
              творчества, делая вашу музыку ещё более разнообразной и
              интересной.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
