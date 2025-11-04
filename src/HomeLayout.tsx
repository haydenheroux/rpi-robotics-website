import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function HomeLayout() {
  return (
    <div className="min-h-screen bg-[url(./light_background.jpg)] dark:bg-[url(./dark_background.jpg)] bg-cover bg-center bg-no-repeat">
      <Nav />
      <div className="block h-8"></div>
      <div className="w-full sm:w-2xl lg:w-4xl sm:mx-auto px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
