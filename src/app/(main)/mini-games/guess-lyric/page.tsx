"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

type Line = {
  id: number;
  start: string;
  end: string;
  created_at: string;
  updated_at: string;
  search?: boolean; // не у всех есть
};

type LinesResponse = {
  lines: Line[];
};

function Page() {
  const [lyric, setLyric] = useState<Line | undefined>(undefined);
  const [answers, setAnswers] = useState<string[]>([]);
  const [refetch, setRefetch] = useState(false);
  const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);
  useEffect(() => {
    axios
      .get<LinesResponse>("http://185.4.180.127/api/lyrics-game")
      .then(({ data }) => {
        setLyric(data.lines.find((lyric) => lyric.search));
        setAnswers(data.lines.map((lyric) => lyric.end));
      });
  }, [refetch]);
  return (
    <div className={styles.miniGames}>
      <div className={styles.miniGamesContainer}>
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>
          Закончи строчку
        </h2>
        <div className={styles.guessContainer}>
          {lyric ? <h3>{lyric.start}</h3> : null}

          <div className={styles.answersGrid}>
            {answers.map((name, index) => (
              <div
                key={index}
                onClick={() => {
                  console.log(lyric?.end, name);
                  if (name === lyric?.end) {
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
