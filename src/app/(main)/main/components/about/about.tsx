import { AboutUsCard } from "../../page";
import styles from "./about.module.css";
import Image from "next/image";

const About = ({ cards }: { cards: AboutUsCard[] | undefined }) => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.leftClouds}>
        <Image
          className={styles.leftCloudLarge}
          alt="left-cloud-large"
          src="/left-cloud-large.png"
          width={400}
          height={400}
        />
        <Image
          className={styles.leftCloudSmall}
          alt="logo"
          src="/left-cloud-small.png"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.rightClouds}>
        <Image
          className={styles.rightCloudLarge}
          alt="left-cloud-large"
          src="/right-cloud-large.png"
          width={400}
          height={400}
        />
        <Image
          className={styles.rightCloudSmall}
          alt="logo"
          src="/right-cloud-small.png"
          width={250}
          height={250}
        />
        <Image
          className={styles.rightCloudHalf}
          alt="logo"
          src="/right-cloud-half.png"
          width={135}
          height={170}
        />
      </div>
      <div className={styles.aboutContainer}>
        <p className={styles.aboutTitle}>О нас</p>
        <div className={styles.aboutBlocks}>
          {cards?.map((card) => {
            return (
              <div key={card.id} className={styles.aboutBlock}>
                <p className={styles.aboutBlockTitle}>{card.title}</p>
                <p className={styles.aboutBlockDescription}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
