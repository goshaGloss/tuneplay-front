import Image from "next/image";
import styles from "./login.module.css";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { redirect } from "next/navigation";

const Login = ({ openModal }: { openModal: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setIsVisible] = useState(false);
  const handleSubmit = () => {
    if (email.trim() !== "" && password.trim() !== "") {
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
        localStorage.setItem("token", data.token);
        redirect("/profile");
      });
  };
  return (
    <div id="login" className={styles.login}>
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
          >
            Войти
          </button>
          <Link
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
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
