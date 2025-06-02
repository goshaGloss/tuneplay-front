"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const notes = [
  { name: "C", file: "/notes/a.wav" },
  { name: "D", file: "/notes/b.wav" },
  { name: "E", file: "/notes/c.wav" },
];

export default function RepeatNotesGame() {
  const [sequence, setSequence] = useState<string[]>([notes[0].name]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [status, setStatus] = useState<"start" | "playing" | "error" | "win">(
    "start"
  );
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);

  // Храним Audio-объекты в ref
  const audioMapRef = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    // Создаём аудио заранее
    notes.forEach((note) => {
      audioMapRef.current[note.name] = new Audio(note.file);
    });
  }, []);

  const playSound = (name: string) => {
    const audio = audioMapRef.current[name];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  useEffect(() => {
    return () => {
      // Очистка всех аудио
      Object.values(audioMapRef.current).forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  console.log(sequence);
  const nextRound = () => {
    const nextNote = notes[Math.floor(Math.random() * notes.length)].name;
    const newSequence = [...sequence, nextNote];
    setSequence(newSequence);
    setStatus("playing");
    playSequence(newSequence); // Передаём новую последовательность
  };

  // Обновляем playSequence, чтобы она принимала sequence как аргумент
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

  const startGame = () => {
    setUserInput([]);
    playSequence();

    setStatus("playing");
  };

  const handleUserClick = (noteName: string) => {
    if (isPlayingSequence || status === "win") return;
    playSound(noteName);
    const newInput = [...userInput, noteName];
    setUserInput(newInput);
    const currentStep = newInput.length - 1;

    if (noteName !== sequence[currentStep]) {
      setStatus("error");
    } else if (newInput.length === sequence.length) {
      setStatus("win");
      setTimeout(nextRound, 1000);
    }
  };

  return (
    <div className={styles.miniGames}>
      <h2>🎵 Повтори ноты</h2>
      {(status === "playing" || status === "win") && (
        <button
          className={styles.playNote}
          onClick={() => playSequence()}
          disabled={isPlayingSequence}
          style={{ marginTop: "1rem" }}
        >
          🔄 Повторить последовательность
        </button>
      )}
      {status === "start" && <button onClick={startGame}>Начать игру</button>}

      {status === "error" && (
        <>
          <p style={{ color: "red" }}>❌ Ошибка! Попробуй ещё раз.</p>
          <button onClick={startGame}>Попробовать снова</button>
        </>
      )}

      {status !== "start" && status !== "error" && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {notes.map((n) => (
              <div
                key={n.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
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

          {status === "win" && (
            <p style={{ color: "green", marginTop: "1rem" }}>
              ✅ Правильно! Следующий раунд...
            </p>
          )}
        </>
      )}
    </div>
  );
}
