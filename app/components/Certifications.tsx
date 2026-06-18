"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const certifications = [
  {
    id: 1,
    title: "Data Science Training",
    issuer: "Internshala Trainings",
    date: "2023",
    credential: "Internshala",
    color: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-500/30",
    badge: "bg-sky-500/20 text-sky-400",
    // icon: "📊",
    image: "/images/cert-internshala-ds.png",
  },
//   {
//     id: 2,
//     title: "Internship & Job Preparation",
//     issuer: "Internshala Trainings",
//     date: "2023",
//     credential: "Internshala",
//     color: "from-teal-500/20 to-cyan-500/20",
//     border: "border-teal-500/30",
//     badge: "bg-teal-500/20 text-teal-400",
//     icon: "💼",
//     image: "/images/cert-internshala-job.png",
//   },
  {
    id: 3,
    title: "SQL for Data Analytics & Business Intelligence",
    issuer: "Udemy · 365 Careers",
    date: "2023",
    credential: "Udemy",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
    badge: "bg-violet-500/20 text-violet-400",
    // icon: "🗄️",
    image: "/images/cert-udemy-sql.png",
  },
  {
    id: 4,
    title: "Artificial Intelligence Certification",
    issuer: "Cognizant Foundation & ICT Academy · Tech4All",
    date: "2023",
    credential: "Tech4All Program",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
    badge: "bg-pink-500/20 text-pink-400",
    // icon: "🤖",
    image: "/images/cert-cognizant-ai.png",
  },
  {
    id: 5,
    title: "Data Analytics & Visualization",
    issuer: "Accenture Forage",
    date: "2024",
    credential: "Accenture Forage",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    badge: "bg-amber-500/20 text-amber-400",
    // icon: "📈",
    image: "/images/cert-accenture.png",
  },
  {
    id: 6,
    title: "ASP.NET Core 9 — Full Stack Development",
    issuer: "Udemy",
    date: "2025",
    credential: "Udemy",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/30",
    badge: "bg-blue-500/20 text-blue-400",
    // icon: "⚙️",
    image: "/images/cert-udemy-aspnet.png",
  },
  {
    id: 7,
    title: "Blazor Deep Dive (.NET 8)",
    issuer: "Udemy",
    date: "2025",
    credential: "Udemy",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    badge: "bg-green-500/20 text-green-400",
    // icon: "🔥",
    image: "/images/cert-udemy-blazor.png",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

  return (
    <section
      id="certifications"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background ambient glow - clamped for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-purple-400 uppercase mb-3 sm:mb-4"
          >
            — Achievements —
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2">
            Click on any card to view the full certificate
          </p>
        </motion.div>

        {/* Certificate Cards Grid — 3 cols on large, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className={`
                relative cursor-pointer rounded-2xl border ${cert.border}
                bg-gradient-to-br ${cert.color}
                backdrop-blur-sm p-5 sm:p-6 group
                transition-all duration-300 flex flex-col
              `}
            >
              {/* Hover glow ring */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-white/10" />

              {/* Top row */}
              <div className="flex items-center justify-end mb-3 sm:mb-4">
                <span className={`text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full ${cert.badge} whitespace-nowrap`}>
                  {cert.credential}
                </span>
              </div>

              {/* Title + Issuer */}
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors leading-snug flex-1">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-snug">{cert.issuer}</p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
                <span className="text-gray-500 text-xs">Issued {cert.date}</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-1 text-xs text-purple-400 font-medium"
                >
                  View
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
              </div>

              {/* Hover zoom indicator - hidden on touch since hover doesn't apply there anyway */}
              <div className="hidden sm:flex absolute inset-0 rounded-2xl items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal Content - capped height with internal scroll on small screens */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-gray-900 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div
                className={`p-4 sm:p-5 bg-gradient-to-r ${selectedCert.color} border-b border-white/10 flex items-center justify-between shrink-0`}
              >
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm sm:text-lg leading-snug">{selectedCert.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {selectedCert.issuer} · {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white shrink-0 ml-3 sm:ml-4"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Certificate Image - scrollable area, smaller fixed height on mobile */}
              <div className="relative w-full bg-gray-950 overflow-y-auto" style={{ minHeight: "260px" }}>
                <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px]">
                  <Image
                    src={selectedCert.image}
                    alt={`${selectedCert.title} Certificate`}
                    fill
                    className="object-contain p-3 sm:p-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-gray-600 pointer-events-none">
                  <p className="text-sm text-center px-6">
                    {/* Place your certificate image at:{" "} */}
                    {/* <code className="text-purple-400 text-xs block mt-1">{selectedCert.image}</code> */}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 border-t border-white/10 flex items-center justify-between bg-gray-900/50 shrink-0">
                <span className={`text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full ${selectedCert.badge}`}>
                  {selectedCert.credential}
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Close
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
