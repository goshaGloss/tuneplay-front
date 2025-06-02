"use client";

import axios, { AxiosResponse } from "axios";
import About from "./components/about/about";
import Advantages from "./components/advantages/advantages";
import Hero from "./components/hero/hero";
import Login from "./components/login/login";
import MiniGames from "./components/mini-games/mini-games";
import Modal from "./components/modal/Modal";
import Player from "./components/player/player";
import { useEffect, useState } from "react";

// import Tariffs from "./components/tariffs/tariffs";

export type Banner = {
  id: number;
  title: string;
  description: string;
  created_at: string; // ISO date string
  updated_at: string;
};

export type AboutUsCard = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type Advantage = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type HomeData = {
  banner: Banner;
  about_us_cards: AboutUsCard[];
  advantagers: Advantage[];
};

export default function Page() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState<undefined | HomeData>(undefined);

  useEffect(() => {
    axios.get<HomeData>("http://185.4.180.127/api/index").then(({ data }) => {
      setIndex(data);
    });
  }, []);

  const onSubmit = (email: string, password: string, callback: () => void) => {
    axios
      .post("http://185.4.180.127:8080/api/customer/create", {
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
      <Hero banner={index?.banner} />
      <About cards={index?.about_us_cards} />
      <Player />
      <Advantages advantages={index?.advantagers} />
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
