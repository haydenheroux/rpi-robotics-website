import Carousel from "./components/Carousel";

function Home() {
  return <Carousel images={Array.from({ length: 10 }, () => `https://picsum.photos/800/1280?random=${Math.random()}`)} />
}

export default Home;
