import Image from "next/image";
import styles from "./advantages.module.css";
import { Advantage } from "../../page";

const Advantages = ({
  advantages,
}: {
  advantages: Advantage[] | undefined;
}) => {
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
          {advantages?.map((advantage, index) => {
            return (
              <div key={index} className={styles.advantagesBlock}>
                {index === 0 ? (
                  <Image
                    alt="freedom"
                    src="/freedom.png"
                    width={200}
                    height={160}
                  />
                ) : index === 1 ? (
                  <Image
                    alt="freedom"
                    src="/simplicity.png"
                    width={200}
                    height={160}
                  />
                ) : (
                  <Image
                    alt="freedom"
                    src="/improvement.png"
                    width={180}
                    height={190}
                  />
                )}
                <p className={styles.advantagesBlockTitle}>{advantage.title}</p>
                <p className={styles.advantagesBlockSubtitle}>
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
