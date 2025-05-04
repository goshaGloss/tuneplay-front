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
import { redirect } from "next/navigation";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (email: string, password: string) => {
    axios
      .post("http://185.4.180.127:8080/api/customer/create", {
        email,
        password,
      })
      .then(({ data }: AxiosResponse<{ token: string }>) => {
        localStorage.setItem("token", data.token);
        redirect("profile");
      });
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
