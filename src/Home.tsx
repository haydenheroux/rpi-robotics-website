import Carousel from "./components/Carousel";
import { useContent } from "./contexts/ContentContext";

function Home() {
  const { content } = useContent();

  return <Carousel images={content.posters} />
}

export default Home;
