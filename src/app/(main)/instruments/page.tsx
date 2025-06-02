import styles from "./instruments.module.css";

const Instruments = () => {
  return (
    <div className={styles.instruments}>
      <div className={styles.instrumentsContainer}>
        <div className={styles.instrumentsTitle}>
          <p>Играй на любом инструменте!</p>
        </div>
        <p className={styles.instrumentsSubtitle}>
          Выбери свой любимый инструмент — фортепиано, гитару, барабаны или даже
          синтезатор! Наши интерактивные инструменты позволяют тебе
          экспериментировать со звуками и создавать уникальные мелодии. Просто
          нажимай на клавиши или струны — и музыка оживает!
        </p>
      </div>
    </div>
  );
};

export default Instruments;
