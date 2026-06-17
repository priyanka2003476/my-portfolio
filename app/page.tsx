import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#020617]
        overflow-hidden
        relative
      "
    >
      {/* Background Glow Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* Left Glow */}
        <div
          className="
            absolute
            top-0
            left-0
            w-[700px]
            h-[700px]
            bg-blue-600/20
            blur-[180px]
            rounded-full
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-[600px]
            h-[600px]
            bg-cyan-500/20
            blur-[180px]
            rounded-full
          "
        />

        {/* Center Glow */}
        <div
          className="
            absolute
            top-1/3
            left-1/2
            -translate-x-1/2
            w-[400px]
            h-[400px]
            bg-indigo-500/10
            blur-[150px]
            rounded-full
          "
        />

      </div>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="certifications" className="scroll-mt-24">
        <Certifications />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

    </main>
  );
}
