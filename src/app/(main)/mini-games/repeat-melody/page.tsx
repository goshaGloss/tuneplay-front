"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { useLossCounter } from "../../hooks/useLossCounter";
import axios from "axios";
import { redirect } from "next/navigation";

const notes = [
  { name: "C", file: "/notes/a.wav" },
  { name: "D", file: "/notes/b.wav" },
  { name: "E", file: "/notes/c.wav" },
];

export default function RepeatNotesGame() {
  const [sequence, setSequence] = useState<string[]>([notes[0].name]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [status, setStatus] = useState<"start" | "playing" | "error" | "win" | "gameOver">(
    "start"
  );
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [score, setScore] = useState(0);
  const [token, setToken] = useState("");
  
  const audioMapRef = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') ?? "" : "";
    if(!token) redirect('/');
    setToken(token);
  }, []);

  useEffect(() => {
    notes.forEach((note) => {
      audioMapRef.current[note.name] = new Audio(note.file);
    });
    
    return () => {
      Object.values(audioMapRef.current).forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  const { resetLosses, lossCount, addLoss } = useLossCounter({
    onThirdLoss: async () => {
      await axios.post("http://185.4.180.127:8080/api/leaderboard/create",
        { game: "repeat-notes", score },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStatus("gameOver");
    },
  });

  const playSound = (name: string) => {
    const audio = audioMapRef.current[name];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const playSequence = async (customSequence?: string[]) => {
    const seq = customSequence || sequence;
    setIsPlayingSequence(true);
    try {
      for (let i = 0; i < seq.length; i++) {
        playSound(seq[i]);
        await new Promise((res) => setTimeout(res, 700));
      }
    } finally {
      setIsPlayingSequence(false);
      setUserInput([]);
    }
  };

  const nextRound = () => {
    const nextNote = notes[Math.floor(Math.random() * notes.length)].name;
    const newSequence = [...sequence, nextNote];
    setSequence(newSequence);
    setStatus("playing");
    playSequence(newSequence);
    setScore(prev => prev + 1);
  };

  const startGame = () => {
    setSequence([notes[0].name]);
    setUserInput([]);
    setStatus("playing");
    setScore(0);
    resetLosses();
    playSequence();
  };

  const handleUserClick = (noteName: string) => {
    if (isPlayingSequence || status === "win" || status === "gameOver") return;
    
    playSound(noteName);
    const newInput = [...userInput, noteName];
    setUserInput(newInput);
    const currentStep = newInput.length - 1;

    if (noteName !== sequence[currentStep]) {
      addLoss();
      setStatus("error");
      setTimeout(() => {
        if (lossCount + 1 < 3) { // Проверяем, не достигли ли мы 3 ошибок
          setStatus("playing");
          playSequence();
        }
      }, 1000);
    } else if (newInput.length === sequence.length) {
      setStatus("win");
      setTimeout(nextRound, 1000);
    }
  };

  return (
    <div className={styles.miniGames}>
      {status === "gameOver" ? (
        <div className={styles.gameOver}>
          <h2>Игра окончена!</h2>
          <p>Ваш результат: {score} очков</p>
          <button onClick={startGame} className={styles.retryBtn}>
            Играть снова
          </button>
        </div>
      ) : (
        <>
          <h2>🎵 Повтори ноты</h2>
          <p>Ошибок: {lossCount}/3</p>
          
          {(status === "playing" || status === "win") && (
            <button
              className={styles.playNote}
              onClick={() => playSequence()}
              disabled={isPlayingSequence}
            >
              🔄 Повторить последовательность
            </button>
          )}

          {status === "start" && (
            <button onClick={startGame}>Начать игру</button>
          )}

          {status === "error" && lossCount < 3 && (
            <p style={{ color: "red" }}>❌ Ошибка! Попробуй ещё раз.</p>
          )}

          {(status === "playing" || status === "win") && (
            <div className={styles.notesContainer}>
              {notes.map((n) => (
                <div key={n.name} className={styles.noteWrapper}>
                  <button
                    onClick={() => handleUserClick(n.name)}
                    disabled={isPlayingSequence}
                    className={styles.noteBtn}
                  >
                    {n.name}
                  </button>
                  <button
                    className={styles.playNote}
                    onClick={() => playSound(n.name)}
                    disabled={isPlayingSequence}
                  >
                    🔊
                  </button>
                </div>
              ))}
            </div>
          )}

          {status === "win" && (
            <p style={{ color: "green" }}>
              ✅ Правильно! Следующий раунд...
            </p>
          )}
        </>
      )}
    </div>
  );
}