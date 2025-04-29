import styles from "./mini-games.module.css";
import Image from "next/image";

const MiniGames = () => {
  return (
    <div className={styles.miniGames}>
      <p className={styles.miniGamesTitle}>Мини-игры</p>

      <div className={styles.miniGamesContainer}>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.mainGame}`}>
            <h2>PIXEL GAME</h2>
            <Image
              src="/main-game.png"
              alt="main-game"
              width={140}
              height={140}
            />
            <p className={styles.playNow}>ИГРАТЬ СЕЙЧАС</p>
          </div>

          <div className={`${styles.card} ${styles.orange}`}>
            <div className={styles.content}>
              <p>Угадай артиста</p>
              <Image
                src="/guess-note.png"
                alt="guess-note"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className={`${styles.card} ${styles.blue}`}>
            <div className={styles.content}>
              <p>Ритм-мастер</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Image
                  src="/woman-guitar.png"
                  alt="woman"
                  width={60}
                  height={90}
                />
                <Image
                  src="/rhythm-master.png"
                  alt="note"
                  width={30}
                  height={50}
                />
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.pink}`}>
            <div className={styles.content}>
              <p>Музыкальная викторина</p>
              <Image src="/musical.png" alt="musical" width={50} height={40} />
            </div>
          </div>

          <div className={`${styles.card} ${styles.orange}`}>
            <div className={styles.content}>
              <p>ИГРАТЬ ЕЩЕ</p>
              <Image
                src="/play-more.png"
                alt="play-more"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniGames;
