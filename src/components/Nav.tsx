function Nav() {
  return (
    <nav className="h-16 mx-8 my-4 flex flex-row gap-8 justify-start items-center overflow-x-scroll">
      <img src="./icon.svg" alt="RPI Robotics Club Logo" className="h-14" />
      <span className="type-subhead text-brand-white hover:text-neutral-400">Projects</span>
      <span className="type-subhead text-brand-white hover:text-neutral-400">Leadership</span>
      <span className="type-subhead text-brand-white hover:text-neutral-400">Calendar</span>
    </nav>
  );
}

export default Nav;
