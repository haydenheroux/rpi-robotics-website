import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[url(./light_background.jpg)] dark:bg-[url(./dark_background.jpg)] bg-cover bg-center bg-no-repeat">
      <Nav />
      <div className="w-full sm:w-2xl lg:w-4xl sm:mx-auto px-8">{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
