"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";
import { useLossCounter } from "../../hooks/useLossCounter";

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
  const [score, setScore] = useState(0)
  const [token, setToken] = useState("")

  useEffect(() => {
    axios
      .get<LinesResponse>("http://185.4.180.127/api/lyrics-game")
      .then(({ data }) => {
        setLyric(data.lines.find((lyric) => lyric.search));
        setAnswers(data.lines.map((lyric) => lyric.end));
      });
  }, [refetch]);

  useEffect(() => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') ?? "" : "";
  if(!token) redirect('/')
  setToken(token);
}, []);

    const { resetLosses, lossCount, addLoss } = useLossCounter({
    onThirdLoss: async () => {
      await axios.post("http://185.4.180.127:8080/api/leaderboard/create",
        { game:"guess-artist", score },
        { headers: { Authorization: `Bearer ${token}` } });
    },
  });


  return (
    <div className={styles.miniGames}>
             {lossCount === 3 ? <button onClick={() => {
          setScore(0)
          setIsAnswerIncorrect(false)
          resetLosses()
        }} className={styles.retryBtn}>Начать сначала</button> :      <div className={styles.miniGamesContainer}>
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
                    setScore(score + 1)
                    setRefetch(!refetch);
                  } else {
                    addLoss()
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
      </div>}

    </div>
  );
}

export default Page;
