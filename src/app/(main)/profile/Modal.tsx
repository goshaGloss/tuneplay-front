"use client";

import { useState } from "react";
import styles from "./modal.module.css";

export default function Modal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (prompt: string, title: string, callback:() => void) => void;
}) {
  const [prompt, setPrompt] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (prompt.trim() !== "" && title.trim() !== "") {
      setIsLoading(true)
      onSubmit(title, prompt, () => {

        setIsLoading(false)
        onClose()
      });
      setPrompt("");
      setTitle("")
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Создание песни</h2>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название песни"
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Например: энергичная EDM для тренировки"
            className={styles.input}
          />
        </div>

        <div className={styles.actions}>
                    <button
            className={styles.submit}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <span>{isLoading ? "" : "Сгенерировать"}</span>
            <span
              className={`${styles.spinner} ${isLoading ? styles.show : ""}`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
