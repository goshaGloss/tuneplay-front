"use client";

import { useRef, useState } from "react";
import styles from "./player.module.css";
import Image from "next/image";

export default function MusicPlayer({
  title,
  src,
  text,
}: {
  title: string;
  src: string;
  text: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent || 0);
    }
  };

  return (
    <div className={styles.player}>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <div className={styles.controls}>
          <button onClick={togglePlay}>
            {isPlaying ? (
              <Image
                alt="player-logo"
                src="pause-icon.svg"
                width={32}
                height={32}
              />
            ) : (
              <Image
                alt="player-logo"
                src="play-icon.svg"
                width={32}
                height={32}
              />
            )}
          </button>
          <div className={styles.progress}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button
            className={styles.lyricsButton}
            onClick={() => setIsModalOpen(true)}
          >
            Текст песни
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setIsModalOpen(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Текст песни</h2>
            <pre className={styles.lyrics}>{text}</pre>
            <button
              className={styles.lyricsButtonCancel}
              onClick={() => setIsModalOpen(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}