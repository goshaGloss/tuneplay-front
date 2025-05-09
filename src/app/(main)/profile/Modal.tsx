"use client";

import { useState } from "react";
import styles from "./modal.module.css";

export default function Modal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (prompt: string, title: string, keywords?: string) => void;
}) {
  const [prompt, setPrompt] = useState("");
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleSubmit = () => {
    if (prompt.trim() !== "") {
      onSubmit(prompt, title, keywords);
      setPrompt("");
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Введите название песни</h2>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название песни"
          className={styles.input}
        />
        <h2 className={styles.title}>Введите промпт</h2>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Например: энергичная EDM для тренировки"
          className={styles.input}
        />
        <h2 className={styles.title}>Введите ключевые слова</h2>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Ключевые слова"
          className={styles.input}
        />
        <div className={styles.actions}>
          <button className={styles.submit} onClick={handleSubmit}>
            Сгенерировать
          </button>
          <button className={styles.cancel} onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
