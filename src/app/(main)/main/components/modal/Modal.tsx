"use client";

import { useState } from "react";
import styles from "./modal.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Modal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setIsVisible] = useState(false);
  const handleSubmit = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      onSubmit(email, password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Введите почту</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.input}
        />
        <h2 className={styles.title}>Введите пароль</h2>
        <div className={styles.inputWrapper}>
          <input
            type={visible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className={styles.input}
          />
          <button
            type="button"
            onClick={() => setIsVisible(!visible)}
            className={styles.toggleButton}
          >
            {visible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className={styles.actions}>
          <button className={styles.submit} onClick={handleSubmit}>
            Создать аккаунт
          </button>
          <button className={styles.cancel} onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
