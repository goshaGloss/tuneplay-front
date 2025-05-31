"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

type Artist = {
  id: number;
  name: string;
  photo: string;
  created_at: string;
  updated_at: string;
  search?: boolean; // необязательное поле, т.к. есть не у всех
};

type ArtistsResponse = {
  artists: Artist[];
};

function Page() {
  const [artist, setArtist] = useState<Artist | undefined>(undefined);
  const [answers, setAnswers] = useState<string[]>([]);
  const [refetch, setRefetch] = useState(false);
  const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);
  useEffect(() => {
    axios
      .get<ArtistsResponse>("http://185.4.180.127/api/artist-game")
      .then(({ data }) => {
        setArtist(data.artists.find((artist) => artist.search));
        setAnswers(data.artists.map((artist) => artist.name));
      });
  }, [refetch]);
  return (
    <div className={styles.miniGames}>
      <div className={styles.miniGamesContainer}>
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>
          Угадай артиста
        </h2>
        <div className={styles.guessContainer}>
          {artist ? (
            <div
              style={{ position: "relative", width: "300px", height: "300px" }}
            >
              <Image
                src={`http://185.4.180.127/storage/${artist?.photo}`}
                fill
                style={{ objectFit: "contain" }}
                alt="artist-photo"
              />
            </div>
          ) : null}

          <div className={styles.answersGrid}>
            {answers.map((name, index) => (
              <div
                key={index}
                onClick={() => {
                  if (name === artist?.name) {
                    setIsAnswerIncorrect(false);
                    setRefetch(!refetch);
                  } else {
                    setIsAnswerIncorrect(true);
                  }
                }}
              >
                {name}
              </div>
            ))}
          </div>
          {isAnswerIncorrect ? (
            <p style={{ color: "red", fontWeight: 700, marginTop: 16 }}>
              Неправильный ответ!
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Page;
