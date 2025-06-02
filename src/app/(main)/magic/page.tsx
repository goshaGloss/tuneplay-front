import styles from "./magic.module.css";

const Magic = () => {
  return (
    <div className={styles.magic}>
      <div className={styles.magicContainer}>
        <div className={styles.magicTitle}>
          <p>Добавь волшебства в свою музыку</p>
        </div>
        <p className={styles.magicSubtitle}>
          Используй нашу огромную библиотеку звуков и эффектов, чтобы сделать
          свою мелодию неповторимой. Добавь звуки природы, электронные биты или
          даже космические эффекты. Твоя музыка может звучать так, как ты
          захочешь!
        </p>
      </div>
    </div>
  );
};

export default Magic;
