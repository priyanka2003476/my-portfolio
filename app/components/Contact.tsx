"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EMAIL = "priyankaachar003@gmail.com";
const LOCATION = "Bengaluru, India";

const floatingParticles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x: [10, 25, 15, 30, 10][i % 5],
  size: [3, 4, 2, 3, 4, 2][i],
  delay: i * 0.8,
  duration: 4 + i * 0.5,
}));

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-28 border-t border-gray-800/60 relative overflow-hidden"
    >
      {/* ANIMATED BG PARTICLES */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/20 pointer-events-none"
          style={{ width: p.size, height: p.size, left: `${p.x + p.id * 15}%`, top: "30%" }}
          animate={{ y: [-20, -60, -20], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity }}
        />
      ))}

      {/* BG GLOWS - clamped on mobile */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-0 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] bg-blue-500 blur-[90px] sm:blur-[130px] md:blur-[160px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-0 w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[450px] md:h-[450px] bg-cyan-500 blur-[90px] sm:blur-[130px] md:blur-[160px] rounded-full pointer-events-none"
      />

      <div className="max-w-2xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-14"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400/70 uppercase mb-3 sm:mb-4"
          >
            — Let&apos;s Connect —
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Have an{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Opportunity?
            </span>
          </h2>

          {/* animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-5 sm:mb-6"
          />

          <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-7 max-w-md mx-auto px-2">
            Whether it&apos;s a job role, a side project, or just a tech chat —
            my inbox is always open. I respond to every message I receive.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-7 md:p-8 text-center overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.07)]"
        >
          {/* card inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

          {/* pulsing ring around card */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.01, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-cyan-400/10 pointer-events-none"
          />

          <div className="relative z-10">
            {/* status dot */}
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"
              />
              <span className="text-green-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Quick recruiter-facing facts: notice period, location, work mode */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-7">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] sm:text-xs flex items-center gap-1.5">
                📍 {LOCATION}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] sm:text-xs flex items-center gap-1.5">
                💻 Remote / Hybrid / Office
              </span>
            </div>

            {/* email with typewriter feel */}
            <motion.div
              onHoverStart={() => setHoverEmail(true)}
              onHoverEnd={() => setHoverEmail(false)}
              className="relative inline-block mb-7 sm:mb-8 cursor-default max-w-full"
            >
              <a
                href={`mailto:${EMAIL}`}
                className="font-mono text-cyan-400 text-xs sm:text-base md:text-lg tracking-wide hover:text-white transition-colors duration-300 break-all"
              >
                {EMAIL}
              </a>
              <motion.div
                animate={{ scaleX: hoverEmail ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500 origin-left"
              />
            </motion.div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.a
                href={`mailto:${EMAIL}`}
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(6,182,212,0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 group"
              >
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                  ✉️
                </motion.span>
                Send Me an Email
              </motion.a>

              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-cyan-500/40 text-cyan-300 font-semibold text-xs sm:text-sm backdrop-blur-sm hover:bg-cyan-500/10 transition flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 text-green-400"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied to clipboard!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Email Address
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Resume download — recruiters often want this one click away, right next to email */}
            <motion.a
              href="/Priyanka_Resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 inline-flex items-center justify-center gap-2 text-cyan-300/80 hover:text-cyan-300 text-xs sm:text-sm underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
              </svg>
              Download my Resume (PDF)
            </motion.a>
          </div>
        </motion.div>

        {/* GITHUB + LINKEDIN ROW - LinkedIn added since recruiters check this first */}
        <div className="mt-5 grid sm:grid-cols-2 gap-4">

          <motion.a
            href="https://www.linkedin.com/in/priyanka-s-620734256/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 0 40px rgba(59,130,246,0.15)" }}
            className="flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 group transition-all duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mb-0.5">LinkedIn</p>
                <p className="text-blue-400 font-mono text-xs sm:text-sm group-hover:text-white transition-colors truncate">
                  Connect with me
                </p>
              </div>
            </div>

            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.div>
          </motion.a>

          <motion.a
            href="https://github.com/priyanka2003476"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 0 40px rgba(168,85,247,0.15)" }}
            className="flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 group transition-all duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 transition-colors shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mb-0.5">GitHub</p>
                <p className="text-cyan-400 font-mono text-xs sm:text-sm group-hover:text-white transition-colors truncate">
                  priyanka2003476
                </p>
              </div>
            </div>

            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              className="shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.div>
          </motion.a>

        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 md:mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-gray-700" />
            <span className="text-gray-600 text-[10px] sm:text-xs tracking-[3px] uppercase">Built with 💙</span>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-gray-700" />
          </div>
          <p className="text-gray-600 text-[10px] sm:text-xs tracking-[2px] uppercase">
            Designed & Developed by Priyanka ✨
          </p>
        </motion.div>

      </div>
    </section>
  );
}
