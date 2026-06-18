"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const roles = [
    "Full Stack .NET Developer",
    "Blazor Developer",
    "Problem Solver",
  ];
  const [index, setIndex] = useState(0);
  const [marquePaused, setMarqueePaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const marqueeText =
    "Junior .NET Developer with 1 year of experience  ✦  Passionate about building scalable web applications  ✦  Specialized in ASP.NET Core & Blazor  ✦  Clean Architecture enthusiast  ✦  Always learning, always growing  ✦  Open to exciting opportunities  ✦  ";

  return (
    <section className="lg:min-h-screen flex flex-col lg:grid lg:grid-cols-[60%_40%] items-center gap-10 lg:gap-12 px-5 sm:px-8 md:px-14 lg:px-20 pt-16 sm:pt-20 lg:pt-16 pb-16 sm:pb-20 lg:pb-16 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020617] via-[#07152f] to-[#0f3b8f]" />

      {/* GLOW BLOBS - clamped so they never force horizontal scroll on small screens */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] bg-blue-600 blur-[100px] sm:blur-[140px] lg:blur-[180px] opacity-15 top-0 left-0 -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-cyan-500 blur-[90px] sm:blur-[130px] lg:blur-[160px] opacity-15 bottom-0 right-0 -z-10"
      />

      {/* ── LEFT SIDE ── */}
      <motion.div
        className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* NAME */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white"
        >
          Priyanka S
        </motion.h1>

        {/* DIVIDER */}
        <motion.div
          variants={item}
          className="mt-5 w-full max-w-xs lg:max-w-none h-px bg-gradient-to-r from-cyan-500/60 via-blue-500/30 to-transparent"
        />

        {/* ROLE SWITCHER */}
        <motion.p
          variants={item}
          className="mt-5 font-mono text-cyan-400 text-base sm:text-lg tracking-wide h-7"
        >
          {roles[index]}
        </motion.p>

        {/* SHORT BIO */}
        <motion.p
          variants={item}
          className="mt-6 text-gray-300 text-sm sm:text-[16px] leading-7 sm:leading-8 max-w-md lg:max-w-xl"
        >
          Building scalable, secure full-stack web applications with{" "}
          <span className="text-blue-400 font-semibold">ASP.NET Core</span>,{" "}
          <span className="text-cyan-400 font-semibold">Blazor</span>, and{" "}
          <span className="text-indigo-400 font-semibold">SQL Server</span> —
          crafting clean APIs and intuitive UIs that solve real problems.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div variants={item} className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.5)" }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="px-6 sm:px-7 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg text-center"
          >
            Start a Conversation
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="px-6 sm:px-7 py-3 rounded-lg border border-cyan-500/40 text-cyan-300 font-semibold text-sm backdrop-blur-sm hover:bg-cyan-500/10 transition text-center"
          >
            Explore Projects
          </motion.a>
        </motion.div>

        {/* SOCIAL ICONS WITH TOOLTIPS */}
        <motion.div variants={item} className="mt-8 flex items-center gap-6">

          {/* GitHub */}
          <div className="relative group">
            <motion.a
              href="https://github.com/priyanka2003476"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-white transition-colors block"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </motion.a>
            {/* Tooltip - hidden on touch devices since hover doesn't apply */}
            <div className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 border border-white/10 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl">
              GitHub Profile
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </div>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <motion.a
              href="https://www.linkedin.com/in/priyanka-s-620734256/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-blue-400 transition-colors block"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <div className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 border border-white/10 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl">
              LinkedIn Profile
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </div>
          </div>

          {/* Resume Download */}
          <div className="relative group">
            <motion.a
              href="/Priyanka_Resume.pdf"
              download
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors block"
              aria-label="Download Resume"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
              </svg>
            </motion.a>
            <div className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 border border-white/10 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl">
              Download Resume
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </div>
          </div>

        </motion.div>
      </motion.div>

      {/* ── RIGHT SIDE — AVATAR ── */}
      <motion.div
        className="flex flex-col items-center justify-center relative order-1 lg:order-2 w-full"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* AMBIENT GLOW - scales down on mobile */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] bg-blue-500 blur-[80px] sm:blur-[110px] lg:blur-[130px] opacity-20 rounded-full"
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative flex items-center justify-center"
        >
          {/* OUTER SPINNING RING - sized relative to avatar at each breakpoint */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-[190px] h-[190px] sm:w-[250px] sm:h-[250px] lg:w-[310px] lg:h-[310px] border border-blue-400/25 rounded-full"
          />

          {/* FLOATING DOT */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-[190px] h-[190px] sm:w-[250px] sm:h-[250px] lg:w-[310px] lg:h-[310px]"
          >
            <div className="absolute top-0 left-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
          </motion.div>

          {/* WELCOME BADGE - repositioned so it stays on-screen on mobile */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 sm:top-6 right-0 sm:-right-6 lg:-right-10 bg-white/10 backdrop-blur-xl border border-blue-400/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm text-blue-100 shadow-[0_0_25px_rgba(59,130,246,0.2)] z-20"
          >
            Welcome
          </motion.div>

          {/* SPARKLES */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -left-4 sm:-left-6 lg:-left-8 top-8 sm:top-10 lg:top-12 text-cyan-300 text-lg sm:text-xl lg:text-2xl"
          >
            ✦
          </motion.div>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute right-1 sm:right-2 bottom-6 sm:bottom-8 text-yellow-300 text-base sm:text-lg lg:text-xl"
          >
            ✨
          </motion.div>

          {/* GLOW BORDER RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-4px] sm:inset-[-5px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 blur-md opacity-70"
          />

          {/* AVATAR IMAGE - shrinks at smaller breakpoints */}
          <Image
            src="/images/girl.png"
            alt="Priyanka S"
            width={230}
            height={230}
            loading="eager"
            className="rounded-full border border-blue-500/20 relative z-10 w-[140px] h-[140px] sm:w-[190px] sm:h-[190px] lg:w-[230px] lg:h-[230px]"
          />
        </motion.div>

        {/* GLASS NAME CARD below image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 sm:mt-8 relative"
        >
          {/* glass card */}
          <div className="relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl overflow-hidden">
            {/* glass background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.1)]" />
            {/* inner shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-white/5 to-blue-500/10 rounded-2xl" />
            {/* top highlight */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <p className="relative z-10 text-center font-semibold text-base sm:text-lg tracking-widest bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
              Priyanka S
            </p>
            <p className="relative z-10 text-center text-[10px] sm:text-xs text-cyan-400/70 tracking-[0.2em] mt-0.5 font-mono">
              .NET Developer
            </p>
          </div>
        </motion.div>

      </motion.div>

      {/* SCROLLING MARQUEE — in normal flow on mobile/tablet so it sits right after content; pinned to bottom only on desktop where the section has a fixed viewport height */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="static lg:absolute mt-10 sm:mt-12 lg:mt-0 lg:bottom-6 left-0 right-0 overflow-hidden whitespace-nowrap cursor-pointer order-3 lg:order-none w-full"
        onMouseEnter={() => setMarqueePaused(true)}
        onMouseLeave={() => setMarqueePaused(false)}
        title="Hover to pause"
      >
        <div
          className="inline-block text-blue-300/60 text-xs sm:text-sm font-mono"
          style={{
            animation: "marquee 30s linear infinite",
            animationPlayState: marquePaused ? "paused" : "running",
          }}
        >
          {marqueeText}{marqueeText}
        </div>
      </motion.div>

      {/* MARQUEE KEYFRAME */}
      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}
