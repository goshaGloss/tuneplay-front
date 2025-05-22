import styles from "./player.module.css";
import Image from "next/image";

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <div className={styles.playerBlocks}>
          <div className={styles.playerBlockLeft}>
            <div className={styles.audioPlayer}>
              <Image
                alt="player-logo"
                src="player-logo.svg"
                width={130}
                height={48}
              />
              <Image
                className={styles.noteImage}
                alt="note"
                src="note.svg"
                width={90}
                height={155}
              />
              <hr className={styles.playLength} />

              <div className={styles.playerIcons}>
                <Image alt="replay" src="replay.svg" width={18} height={18} />
                <Image alt="back" src="back.svg" width={20} height={20} />

                <Image alt="play" src="play.svg" width={42} height={42} />

                <Image alt="forward" src="forward.svg" width={20} height={20} />

                <Image alt="queue" src="queue.svg" width={24} height={12} />
              </div>
            </div>
          </div>
          <div className={styles.playerBlockRight}>
            <p className={styles.playerBlockRightTitle}>
              Создавай свою уникальную и неповторимую мелодию
            </p>
            <div className={styles.playerCircles}>
              <div className={styles.playerBlockCircleFirst}>
                <p className={styles.playerBlockCircleText}>Подробнее</p>
                <Image
                  alt="arrow-up"
                  src="arrow-up.svg"
                  height={12}
                  width={12}
                />
              </div>
              <div className={styles.playerBlockCircleSecond}>
                <p className={styles.playerBlockCircleText}>Подробнее</p>
                <Image
                  alt="arrow-up"
                  src="arrow-up.svg"
                  height={12}
                  width={12}
                />
              </div>
              <div className={styles.playerBlockCircleThird}>
                <p className={styles.playerBlockCircleText}>Подробнее</p>
                <Image
                  alt="arrow-up"
                  src="arrow-up.svg"
                  height={12}
                  width={12}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
