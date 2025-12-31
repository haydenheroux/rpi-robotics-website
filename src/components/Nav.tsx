import { useState } from "react";
import { FaDiscord } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { useContent } from "../contexts/ContentContext";

function DiscordButton({ large }: { large?: boolean }) {
  const { content } = useContent();

  return (
    <a
      href={content.discord}
      className={`flex px-4 py-2 justify-center items-center ${large ? "w-full type-title" : "w-42 type-title-small"} brand-button`}
    >
      Join on <FaDiscord className="ml-4" size={32} />
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
            <span className="block min-w-48 type-title text-standard link-hover">
              RPI Robotics
            </span>
          </Link>
          <div className="hidden lg:flex px-2 text-ellipsis flex-row gap-8 justify-start items-center">
            {links.map((title) => (
              <Link key={title} to={"/" + title.toLowerCase()}>
                <span className="type-title-small text-standard link-hover">
                  {title}
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex gap-4 items-center justify-center">
            <DiscordButton />
            <ThemeToggle />
          </div>
          <div className="flex lg:hidden gap-4 items-center justify-center">
            <ThemeToggle small />
            <MdMenu
              size={24}
              className="bg-standard text-standard"
              onClick={() => setShowNav(!showNav)}
            />
          </div>
        </div>
      </nav>
      {showNav && (
        <nav className="fixed z-40 top-16 lg:hidden w-full pt-4 pb-8 px-10 bg-standard card rounded-[0]">
          <div className="flex flex-col gap-6 justify-start items-end">
            {links.map((title) => (
              <Link key={title} className="w-full" to={"/" + title.toLowerCase()}>
                <div className="px-4 py-2 text-center">
                  <span className="type-title text-standard link-hover">{title}</span>
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
