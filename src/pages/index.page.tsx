import Carousel from "../components/Carousel";
import { useContent } from "../contexts/ContentContext";
import HomeLayout from "../layouts/HomeLayout";

function Page() {
  const { content } = useContent();

  return (
    <HomeLayout>
      <Carousel images={content.posters} />
    </HomeLayout>
  );
}

export default {
  Page,
  route: "/",
};
