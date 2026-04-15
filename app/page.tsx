
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

// export default function Home() {
//   return (
//     <main className="min-h-screen text-white bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

//       {/* Blue Glow Effects */}
//       <div className="fixed inset-0 -z-10">
//         <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[150px] top-10 left-10"></div>
//         <div className="absolute w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[150px] bottom-10 right-10"></div>
//       </div>

//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Contact />
      
//     </main>
//   );
// }



import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] overflow-x-hidden scroll-smooth">

      {/* PREMIUM GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        {/* Top Glow */}
        <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[180px] top-[-100px] left-[-100px] animate-pulse"></div>

        {/* Bottom Glow */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[180px] bottom-[-100px] right-[-100px] animate-pulse"></div>

        {/* Center subtle glow */}
        <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[150px] top-[40%] left-[30%]"></div>

      </div>

      <Navbar />

      {/* SECTION SPACING WRAPPER */}
      <div className="space-y-32 md:space-y-40">

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Contact />

      </div>

    </main>
  );
}