"use client";

import { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Modal from "./Modal";
import MusicPlayer from "./MusicPlayer";
import axios, { AxiosResponse } from "axios";
import LeaderBoard from "./LeaderBoard";

type Song = {
  id: string;
  customer_id: string;
  create_at: string; // можно заменить на Date, если преобразуешь строку
  title: string;
  text: string;
  music: string;
};

type User = {
  email: string;
  id: string;
  songs: Song[];
  leaderboard: {game:string; id:string; score:number}[]
};

const MusicProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);
  const [leaderboard, setLeaderBoard] = useState<{game:string; id:string; score:number}[]>([])

  const createSong = (title: string, theme: string, callback: () => void) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    axios
      .post(
        "http://185.4.180.127:8080/api/song/new",
        { title, theme },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(({ data }: AxiosResponse<Song>) => {
        callback()
        setSongs([...songs, data]);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://185.4.180.127:8080/api/customer/info", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: AxiosResponse<User>) => {
        setIsModalOpen(false);
        setLeaderBoard(data.leaderboard)
        setSongs(data.songs);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.profileContent}>
          <LeaderBoard myStats={leaderboard}/>
          <div className={styles.profileList}>
                    <h1 className={styles.title}>Моя музыка</h1>
        <ul className={styles.songList}>


          {songs.map((song, index) => (
            <MusicPlayer
              key={index}
              title={song.title}
              text={song.text}
              id={song.id}
              src={"http://185.4.180.127:8080/" + song.music}
              updateSongs={() =>{
                setSongs(songs.filter(songData => song.id !=songData.id))
              }}
            />
          ))}
        </ul>

        <button
          className={styles.generateButton}
          onClick={() => setIsModalOpen(true)}
        >
          Сгенерировать песню
        </button>
          </div>
        </div>

        {isModalOpen && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            onSubmit={(title: string, theme: string, callback) => {
              createSong(title, theme, callback);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MusicProfile;
