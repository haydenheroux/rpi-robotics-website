import { useState } from "react";
import { FaDiscord } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router";

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
        className={`fixed z-50 w-full min-h-16 py-4 px-10 bg-neutral-50 ${showNav ? "" : "card rounded-[0]"}`}
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
          <div className="hidden md:block">
            <DiscordButton />
          </div>
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
        <nav className="fixed top-16 md:hidden w-full pt-4 pb-8 px-10 bg-neutral-50 card rounded-[0] z-40">
          <div className="flex flex-col gap-6 justify-start items-end">
            {links.map((title) => (
              <Link className="w-full" to={"/" + title.toLowerCase()}>
                <div className="px-4 py-2 bg-neutral-50 card text-center link-inset">
                  <span className="type-title text-neutral-700">{title}</span>
                </div>
              </Link>
            ))}
            <DiscordButton large />
          </div>
        </nav>
      )}
      <div className="h-16" />
    </>
  );
}

export default Nav;
