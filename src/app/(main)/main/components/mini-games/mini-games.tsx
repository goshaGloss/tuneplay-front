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
                  width={180}
                  height={180}
                />
                <p style={{ color: "white" }} className={styles.playNow}>
                  ИГРАТЬ СЕЙЧАС
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cardColumn}>
            <div className={`${styles.card} ${styles.blue}`}>
              <div className={styles.content}>
                <p>Закончи строчку</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Image
                    src="/woman-guitar.png"
                    alt="woman"
                    width={120}
                    height={160}
                  />
                </div>
                <p className={styles.playNow}>ИГРАТЬ СЕЙЧАС</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniGames;
