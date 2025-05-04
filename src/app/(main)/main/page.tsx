import About from "./components/about/about";
import Advantages from "./components/advantages/advantages";
import Hero from "./components/hero/hero";
import Login from "./components/login/login";
import MiniGames from "./components/mini-games/mini-games";
import Player from "./components/player/player";
import Tariffs from "./components/tariffs/tariffs";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Player />
      <Advantages />
      <Tariffs />
      <MiniGames />
      <Login />
    </div>
  );
}
