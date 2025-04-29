import About from "./components/about/about";
import Advantages from "./components/advantages/advantages";
import Hero from "./components/hero/hero";
import Player from "./components/player/player";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Player />
      <Advantages />
    </div>
  );
}
