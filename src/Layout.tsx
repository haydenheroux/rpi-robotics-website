import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-standard">
      <Nav />
      <div className="w-full sm:w-2xl lg:w-4xl sm:mx-auto px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
