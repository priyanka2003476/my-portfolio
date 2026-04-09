"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-black/40 border-b border-gray-800 flex justify-between items-center px-10 py-4 z-50">

      {/* Logo */}
      <h1 className="font-bold text-lg text-white">Priyanka</h1>

      {/* Menu */}
      <div className="flex items-center gap-6 text-gray-300">

        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>

        {/* Resume Button */}
        <a
          href="/Priyanka_Resume.pdf"
          download
          className="ml-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}