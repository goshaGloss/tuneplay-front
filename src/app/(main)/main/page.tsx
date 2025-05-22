"use client";

import axios, { AxiosResponse } from "axios";
import About from "./components/about/about";
import Advantages from "./components/advantages/advantages";
import Hero from "./components/hero/hero";
import Login from "./components/login/login";
import MiniGames from "./components/mini-games/mini-games";
import Modal from "./components/modal/Modal";
import Player from "./components/player/player";
import { useState } from "react";
// import Tariffs from "./components/tariffs/tariffs";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (email: string, password: string, callback: () => void) => {
    axios
      .post("https://185.4.180.127:8080/api/customer/create", {
        email,
        password,
      })
      .then(({ data }: AxiosResponse<{ token: string }>) => {
        callback();
        localStorage.setItem("token", data.token);
      })
      .catch(() => callback());
  };
  return (
    <div>
      <Hero />
      <About />
      <Player />
      <Advantages />
      {/* <Tariffs /> */}
      <MiniGames />
      <Login openModal={() => setIsModalOpen(true)} />
      {isModalOpen ? (
        <Modal
          onSubmit={onSubmit}
          onClose={() => setIsModalOpen(!isModalOpen)}
        />
      ) : null}
    </div>
  );
}
