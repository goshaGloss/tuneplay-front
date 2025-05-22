"use client";

import { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Modal from "./Modal";
import MusicPlayer from "./MusicPlayer";
import axios, { AxiosResponse } from "axios";
import { redirect } from "next/navigation";

type Song = {
  id: string;
  customer_id: string;
  create_at: string; // можно заменить на Date, если преобразуешь строку
  title: string;
  text: string;
};

type User = {
  email: string;
  id: string;
  songs: Song[];
};

const MusicProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);

  const createSong = (title: string, theme: string) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    axios
      .post(
        "http://localhost:8080/api/song/new",
        { title, theme },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(({ data }: AxiosResponse<Song>) => {
        setSongs([...songs, data]);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) redirect("/");
    axios
      .get("http://localhost:8080/api/customer/info", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: AxiosResponse<User>) => {
        setIsModalOpen(false);
        setSongs(data.songs);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div style={{ width: 600 }}>
        <h1 className={styles.title}>Моя музыка</h1>

        <ul className={styles.songList}>
          {songs.map((song, index) => (
            <MusicPlayer key={index} title={song.title} text={song.text} src={"beat 1.mp3"} />
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
            onSubmit={(title: string, theme: string) => {
              createSong(title, theme);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MusicProfile;
