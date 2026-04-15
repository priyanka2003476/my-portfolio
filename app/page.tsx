
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

      {/* Blue Glow Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[150px] top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[150px] bottom-10 right-10"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
    </main>
  );
}


