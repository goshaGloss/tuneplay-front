"use client";

import { useState } from "react";
import styles from "./modal.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';

export default function Modal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (email: string, password: string, callback: () => void) => void;
}) {
    const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsLoading(true);
      onSubmit(email, password, () =>{
         setIsLoading(false)
        window.location.href = '/profile';

        });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Регистрация</h2>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите Email"
            className={styles.input}
          />
        </div>

        <div className={styles.inputWrapper}>
          <input
            type={visible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите Пароль"
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
          <button
            className={styles.submit}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <span>{isLoading ? "" : "Создать аккаунт"}</span>
            <span
              className={`${styles.spinner} ${isLoading ? styles.show : ""}`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
