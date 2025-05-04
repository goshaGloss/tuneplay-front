"use client";

import { useState } from "react";
import styles from "./profile.module.css";
import Modal from "./Modal";
import MusicPlayer from "./MusicPlayer";

const MusicProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const songs = [
    {
      title: "Ambient Sky",
      src: "/songs/ambient.mp3",
    },
    {
      title: "Lo-Fi Chill",
      src: "/songs/lofi.mp3",
    },
    {
      title: "Synthwave Dreams",
      src: "/songs/synthwave.mp3",
    },
  ];

  return (
    <div className={styles.container}>
      <div style={{ width: 600 }}>
        <h1 className={styles.title}>Моя музыка</h1>

        <ul className={styles.songList}>
          {songs.map((song, index) => (
            <MusicPlayer key={index} title={song.title} src={song.src} />
          ))}
        </ul>

        <button
          className={styles.generateButton}
          onClick={() => setIsModalOpen(true)}
        >
          Сгенерировать песню
        </button>

        {isModalOpen && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            onSubmit={() => {
              setIsModalOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MusicProfile;
