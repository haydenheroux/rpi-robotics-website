import { useState } from "react";
import { FaDiscord } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";

function DiscordButton({ large }: { large?: boolean }) {
  return (
    <a
      href="https://discord.gg/DPWMz5BqZP"
      className={`flex px-4 py-2 justify-center items-center ${large ? "w-full type-title" : "type-large-bold"} brand-button`}
    >
      Join on <FaDiscord className="ml-1.5" size={26} />
    </a>
  );
}

function Nav() {
  const [showNav, setShowNav] = useState<boolean>(false);

  const links = ["Projects", "Leadership", "Calendar", "Contact"];

  return (
    <>
      <nav
        className={`fixed z-50 w-full min-h-16 py-4 px-8 bg-standard ${showNav ? "" : "card rounded-[0]"}`}
      >
        <div className="w-full lg:w-4xl lg:mx-auto flex flex-row gap-8 justify-between items-center">
          <Link to="/">
            <span className="min-w-32 type-title text-standard link-hover">
              RPI Robotics
            </span>
          </Link>
          <div className="hidden md:flex px-2 text-ellipsis flex-row gap-8 justify-start items-center">
            {links.map((title) => (
              <Link key={title} to={"/" + title.toLowerCase()}>
                <span className="type-large text-standard link-hover">
                  {title}
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4 items-center justify-center">
            <DiscordButton />
            <ThemeToggle />
          </div>
          <div className="md:hidden link-hover">
            <MdMenu
              size={24}
              className="text-standard"
              onClick={() => setShowNav(!showNav)}
            />
          </div>
        </div>
      </nav>
      {showNav && (
        <nav className="fixed z-40 top-16 md:hidden w-full pt-4 pb-8 px-10 bg-standard card rounded-[0]">
          <div className="flex flex-col gap-6 justify-start items-end">
            {links.map((title) => (
              <Link key={title} className="w-full" to={"/" + title.toLowerCase()}>
                <div className="px-4 py-2 bg-standard card text-center link-inset">
                  <span className="type-title text-standard">{title}</span>
                </div>
              </Link>
            ))}
            <DiscordButton large />
          </div>
        </nav>
      )}
      <div className="h-32" />
    </>
  );
}

export default Nav;
