import { useState } from "react";
import { MdMenu } from "react-icons/md";

function Nav() {
  const [showNav, setShowNav] = useState<boolean>(false);

  const links = ["Projects", "Leadership", "Calendar", "Contact"];

  return (
    <>
      <nav
        className={`w-screen h-16 py-4 px-6 bg-neutral-50 ${!showNav ? "drop-shadow-sm/25 drop-shadow-neutral-500" : "relative z-10"}`}
      >
        <div className="w-full lg:w-4xl lg:mx-auto flex flex-row gap-8 justify-between items-center">
          <span className="min-w-32 type-title text-neutral-700">
            RPI Robotics
          </span>
          <div className="hidden md:flex px-2 text-ellipsis flex-row gap-8 justify-start items-center">
            {links.map((title) => (
              <span className="type-large text-neutral-700 link-hover">
                {title}
              </span>
            ))}
          </div>
          <span className="hidden md:flex w-20 h-9 px-2 py-1 justify-center items-center type-large-bold brand-button">
            Events
          </span>
          <div className="link-hover">
            <MdMenu
              size={24}
              className="md:hidden text-neutral-700"
              onClick={() => setShowNav(!showNav)}
            />
          </div>
        </div>
      </nav>
      {showNav && (
        <nav className="md:hidden w-screen pt-4 pb-8 px-6 bg-neutral-50 drop-shadow-sm/25 drop-shadow-neutral-500">
          <div className="flex flex-col gap-4 justify-start items-center">
            {links.map((title) => (
              <span className="type-large text-neutral-700 link-hover">
                {title}
              </span>
            ))}
            <span className="w-32 h-9 px-2 py-1 flex justify-center items-center type-large-bold brand-button">
              Events
            </span>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
