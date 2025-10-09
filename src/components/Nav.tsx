import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router";

function Nav() {
  const [showNav, setShowNav] = useState<boolean>(false);

  const links = ["Projects", "Leadership", "Calendar", "Contact"];

  return (
    <>
      <nav
        className={`w-screen min-h-16 py-4 px-8 bg-neutral-50 ${!showNav ? "drop-shadow-sm/25 drop-shadow-neutral-500" : "relative z-10"}`}
      >
        <div className="w-full lg:w-4xl lg:mx-auto flex flex-row gap-8 justify-between items-center">
          <Link to="/">
            <span className="min-w-32 type-title text-neutral-700 link-hover">
              RPI Robotics
            </span>
          </Link>
          <div className="hidden md:flex px-2 text-ellipsis flex-row gap-8 justify-start items-center">
            {links.map((title) => (
              <Link to={"/" + title.toLowerCase()}>
                <span className="type-large text-neutral-700 link-hover">
                  {title}
                </span>
              </Link>
            ))}
          </div>
          <Link to="/events">
            <span className="hidden md:flex px-4 py-2 justify-center items-center type-large-bold brand-button">
              Events
            </span>
          </Link>
          <div className="md:hidden link-hover">
            <MdMenu
              size={24}
              className="text-neutral-700"
              onClick={() => setShowNav(!showNav)}
            />
          </div>
        </div>
      </nav>
      {showNav && (
        <nav className="md:hidden w-screen pt-4 pb-8 px-6 bg-neutral-50 drop-shadow-sm/25 drop-shadow-neutral-500">
          <div className="flex flex-col gap-4 justify-start items-center">
            {links.map((title) => (
              <Link to={"/" + title.toLowerCase()}>
                <span className="type-large text-neutral-700 link-hover">
                  {title}
                </span>
              </Link>
            ))}
            <Link to="/events">
              <span className="px-4 py-2 flex justify-center items-center type-large-bold brand-button">
                Events
              </span>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
