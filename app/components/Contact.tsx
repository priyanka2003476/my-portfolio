"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EMAIL = "priyankaachar003@gmail.com";

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
      className="scroll-mt-28 px-6 md:px-10 py-28 border-t border-gray-800/60 relative overflow-hidden"
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

      {/* BG GLOWS */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500 blur-[160px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="max-w-2xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-[0.3em] text-cyan-400/70 uppercase mb-4"
          >
            — Let&apos;s Connect —
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
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
            className="h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"
          />

          <p className="text-gray-400 text-base leading-7 max-w-md mx-auto">
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
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 text-center overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.07)]"
        >
          {/* card inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

          {/* pulsing ring around card */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.01, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl ring-1 ring-cyan-400/10 pointer-events-none"
          />

          <div className="relative z-10">
            {/* status dot */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"
              />
              <span className="text-green-400 text-xs font-semibold tracking-widest uppercase">
                Available for opportunities
              </span>
            </div>

            {/* email with typewriter feel */}
            <motion.div
              onHoverStart={() => setHoverEmail(true)}
              onHoverEnd={() => setHoverEmail(false)}
              className="relative inline-block mb-8 cursor-default"
            >
              <a
                href={`mailto:${EMAIL}`}
                className="font-mono text-cyan-400 text-base sm:text-lg tracking-wide hover:text-white transition-colors duration-300"
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={`mailto:${EMAIL}`}
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(6,182,212,0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 group"
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-cyan-500/40 text-cyan-300 font-semibold text-sm backdrop-blur-sm hover:bg-cyan-500/10 transition flex items-center justify-center gap-2 relative overflow-hidden"
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
          </div>
        </motion.div>

        {/* GITHUB CARD */}
        <motion.a
          href="https://github.com/priyanka2003476"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 0 40px rgba(168,85,247,0.15)" }}
          className="mt-5 flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 rounded-2xl px-6 py-5 group transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 transition-colors">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">GitHub</p>
              <p className="text-cyan-400 font-mono text-sm group-hover:text-white transition-colors">
                github.com/priyanka2003476
              </p>
            </div>
          </div>

          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.div>
        </motion.a>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-700" />
            <span className="text-gray-600 text-xs tracking-[3px] uppercase">Built with 💙</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-700" />
          </div>
          <p className="text-gray-600 text-xs tracking-[2px] uppercase">
            Designed & Developed by Priyanka ✨
          </p>
        </motion.div>

      </div>
    </section>
  );
}
