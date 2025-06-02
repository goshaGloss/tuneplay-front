"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./player.module.css";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

export default function MusicPlayer({
  title,
  src,
  text,
  id,
  updateSongs
}: {
  title: string;
  src: string;
  text: string;
  id:string;
  updateSongs: () => void
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [token, setToken] = useState("")
    
    useEffect(() =>{
      setToken(window.localStorage.getItem("token") ?? "")
    },[])

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
        <div className={styles.deleteAndTitle}>
        <span className={styles.title}>{title}</span>
        <FaTrash style={{color: "red", cursor: "pointer"}} onClick={() => axios.delete("http://185.4.180.127:8080/api/song/delete/"+id ,         { headers: { Authorization: `Bearer ${token}` } }
).then((data) => {if(data.data.status === "success") updateSongs()})}/>
        </div>
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