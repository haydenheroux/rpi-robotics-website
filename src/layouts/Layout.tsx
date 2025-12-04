import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-standard">
      <Nav />
      <div className="w-full sm:w-2xl lg:w-4xl sm:mx-auto px-8">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
