import Image from "next/image";
import styles from "./music-master.module.css";

const MusicMaster = () => {
  return (
    <div className={styles.musicMaster}>
      <div className={styles.musicMasterContainer}>
        <div className={styles.musicMasterTitle}>
          <Image alt="scrolls" src="/scrolls.png" width={300} height={200} />
          <p>Стань мастером музыки</p>
        </div>
        <p className={styles.musicMasterSubtitle}>
          Не знаешь, с чего начать? Наши уроки и подсказки помогут тебе освоить
          основы музыки. Узнай, как строить аккорды, создавать ритмы и сочетать
          звуки. Следуй инструкциям или экспериментируй самостоятельно — всё в
          твоих руках!
        </p>
      </div>
    </div>
  );
};

export default MusicMaster;
