"use client";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 w-full z-50
        backdrop-blur-xl bg-black/30
        border-b border-white/10
        px-6 md:px-10 py-4
      "
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <h1
          className="
            text-2xl font-bold
            bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400
            bg-clip-text text-transparent
            tracking-wide
            cursor-pointer
          "
        >
          Priyanka
        </h1>

        {/* MENU */}
        <div
          className="
            flex items-center
            gap-4 md:gap-8
            text-sm md:text-base
            text-gray-300
          "
        >

          <a
            href="#about"
            className="
              relative hover:text-white transition duration-300
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-blue-400
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            About
          </a>

          <a
            href="#skills"
            className="
              relative hover:text-white transition duration-300
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-blue-400
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Skills
          </a>

          <a
            href="#projects"
            className="
              relative hover:text-white transition duration-300
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-blue-400
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
              relative hover:text-white transition duration-300
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-blue-400
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}