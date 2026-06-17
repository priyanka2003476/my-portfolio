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
            bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
            bg-clip-text text-transparent
            tracking-wide
            cursor-pointer
          "
        >
          {/* Priyanka */}
        </h1>

        {/* MENU */}
        <div className="flex items-center gap-6 text-gray-300">

          <a href="#about" className="hover:text-cyan-300 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-300 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-cyan-300 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-300 transition">
            Projects
          </a>

          <a href="#certifications" className="hover:text-cyan-300 transition">
            Certifications
          </a>

          <a href="#contact" className="hover:text-cyan-300 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}
