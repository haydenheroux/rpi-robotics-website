function Nav() {
  return (
    <nav className="w-screen h-16 py-4 px-6 bg-neutral-50 drop-shadow-sm/25 drop-shadow-neutral-500">
      <div className="w-full sm:w-4xl sm:mx-auto flex flex-row gap-8 justify-between items-center">
        <span className="min-w-26 type-title text-neutral-700">
          RPI Robotics
        </span>
        <div className="px-2 overflow-x-scroll text-ellipsis flex flex-row gap-8 justify-start items-center">
          <span className="type-nav text-neutral-700">Projects</span>
          <span className="type-nav text-neutral-700">Leadership</span>
          <span className="type-nav text-neutral-700">Contact</span>
        </div>
        <span className="w-16 p-2 text-center type-nav-bold brand-button">
          Events
        </span>
      </div>
    </nav>
  );
}

export default Nav;
