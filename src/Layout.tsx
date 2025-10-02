import { Outlet } from "react-router";
import Nav from "./components/Nav";

function Layout() {
  return (
    <>
      <Nav />
      <div className="block h-8"></div>
      <div className="w-full sm:w-2xl lg:w-4xl sm:mx-auto px-8">
        <Outlet />
        <div className="block h-16"></div>
      </div>
    </>
  );
}

export default Layout;
