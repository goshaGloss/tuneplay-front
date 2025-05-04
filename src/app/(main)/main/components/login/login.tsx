import Image from "next/image";
import styles from "./login.module.css";
import Link from "next/link";

const Login = () => {
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
            <input placeholder="Почта" />
          </div>
          <div className={styles.inputWrapper}>
            <input placeholder="Пароль" />
          </div>
          <button className={styles.loginButton}>Войти</button>
          <Link href="/">Создать аккаунт</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
