'use client';


import Image from "next/image";
import styles from "./login.module.css";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Login = ({ openModal }: { openModal: () => void }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsLoading(true);
      loginAction(email, password);
      setEmail("");
      setPassword("");
    }
  };
  const loginAction = (email: string, password: string) => {
    axios
      .post("http://185.4.180.127:8080/api/customer/auth", {
        email,
        password,
      })
      .then(({ data }: AxiosResponse<{ token: string }>) => {
        setIsLoading(false);
        localStorage.setItem("token", data.token);
        router.push('/profile')
      })
      .catch(() => setIsLoading(false));
  };
  return (
    <div id="login" className={styles.login}>
      <Image alt="login" width={600} height={650} src="/login-img.png" />
      <div className={styles.loginContainer}>
        <form>
          <Image
            alt="left-cloud-large"
            src="golden-logo.svg"
            width={207}
            height={74}
          />
          <p className={styles.loginTitle}>Начните приключение</p>
          <p className={styles.loginTitle}>Прямо сейчас</p>
          <div className={styles.inputWrapper}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Почта"
            />
          </div>
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
          <button
            onClick={() => {
              handleSubmit();
            }}
            type="button"
            className={styles.loginButton}
            disabled={isLoading}
          >
            <span>{isLoading ? "" : "Войти"}</span>
            <span
              className={`${styles.spinner} ${isLoading ? styles.show : ""}`}
            ></span>
          </button>
          <Link
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
            style={{ color: "white" }}
            href="/"
          >
            Создать аккаунт
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
