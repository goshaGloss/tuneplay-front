import styles from "./mini-games.module.css";
import Image from "next/image";

const MiniGames = () => {
  return (
    <div id="minigames" className={styles.miniGames}>
      <p className={styles.miniGamesTitle}>Мини-игры</p>

      <div className={styles.miniGamesContainer}>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.mainGame}`}>
            <h2>PIXEL GAME</h2>
            <Image
              src="/main-game.png"
              alt="main-game"
              width={225}
              height={200}
            />
            <p className={styles.playNow}>ИГРАТЬ СЕЙЧАС</p>
          </div>
          <div className={styles.cardColumn}>
            <div className={`${styles.card} ${styles.orange}`}>
              <div className={styles.content}>
                <p>Угадай артиста</p>
                <Image
                  src="/guess-note.png"
                  alt="guess-note"
                  width={156}
                  height={156}
                />
              </div>
            </div>
            <div className={`${styles.card} ${styles.pink}`}>
              <div className={styles.content}>
                <p>Музыкальная викторина</p>
                <Image
                  src="/musical.png"
                  alt="musical"
                  width={50}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className={styles.cardColumn}>
            <div className={`${styles.card} ${styles.blue}`}>
              <div className={styles.content}>
                <p>Ритм-мастер</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Image
                    src="/woman-guitar.png"
                    alt="woman"
                    width={120}
                    height={160}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.card} ${styles.orange}`}>
              <div className={styles.content}>
                <p>ИГРАТЬ ЕЩЕ</p>
                <Image
                  src="/play-more.png"
                  alt="play-more"
                  width={125}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniGames;
