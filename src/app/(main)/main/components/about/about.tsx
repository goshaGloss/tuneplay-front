import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
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
          <div className={styles.aboutBlock}>
            <p className={styles.aboutBlockTitle}>
              Интерактивное музыкальное обучение
            </p>
            <p className={styles.aboutBlockDescription}>
              TunePlay объединяет увлекательные игровые механики с
              образовательными элементами. Дети изучают основы музыки, ритма и
              нот с помощью пошаговых инструкций, интерактивных подсказок и
              практических заданий, которые делают процесс обучения
              веселым и доступным. 
            </p>
          </div>
          <div className={styles.aboutBlock}>
            <p className={styles.aboutBlockTitle}>
              развлекательный контент и мини-игры
            </p>
            <p className={styles.aboutBlockDescription}>
              Сервис предлагает разнообразные мини-игры , такие как Ритм-мастер
              , Музыкальная викторина , Звуковые пазлы и многие другие. 
            </p>
          </div>
          <div className={styles.aboutBlock}>
            <p className={styles.aboutBlockTitle}>
              Интегрированный искуственный интеллект
            </p>
            <p className={styles.aboutBlockDescription}>
              Сервис предлагает разнообразные мини-игры , такие как
              Искусственный интеллект анализирует введенные данные и
              оригинальные мелодические фразы, служащие отправной точкой для
              создания песен. Это позволяет пользователям  мгновенно черпать
              вдохновение и экспериментировать с разнообразной музыкой. к
              Ритм-мастер , Музыкальная викторина , Звуковые пазлы и многие
              другие. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
