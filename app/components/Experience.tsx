"use client";
import { motion } from "framer-motion";

const highlights = [
  {
    text: "Developed backend APIs and Blazor Server UI using ASP.NET Core for an Access Request Management System.",
    tag: "ASP.NET Core",
  },
  {
    text: "Built responsive and interactive user interface components using Blazor to improve user experience.",
    tag: "Blazor",
  },
  {
    text: "Designed and maintained SQL Server tables and wrote optimized queries using SSMS.",
    tag: "SQL Server",
  },
  {
    text: "Implemented and consumed REST APIs to enable communication between application modules.",
    tag: "REST APIs",
  },
  {
    text: "Integrated JWT authentication to ensure secure access control within the application.",
    tag: "JWT Auth",
  },
  {
    text: "Debugged application issues and optimized backend logic to improve performance and stability.",
    tag: "Performance",
  },
  {
    text: "Created interactive dashboards and reports using Power BI for data visualization.",
    tag: "Power BI",
  },
  {
    text: "Used GitLab for version control and collaborated with the development team.",
    tag: "GitLab",
  },
  {
    text: "Worked in Agile sprints to deliver features based on business requirements.",
    tag: "Agile",
  },
  {
    text: "Implemented form validations and handled user input for smooth workflow.",
    tag: "Validation",
  },
];

export default function Experience() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-14 sm:py-18 md:py-24 border-t border-gray-800 relative overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-blue-500 blur-[70px] sm:blur-[100px] md:blur-[120px] opacity-10 top-20 left-10 sm:left-20 pointer-events-none" />
      <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-cyan-500 blur-[80px] sm:blur-[110px] md:blur-[130px] opacity-10 bottom-10 right-10 pointer-events-none" />

      {/* shifted left instead of mx-auto centering, with a max-width so it doesn't stretch too wide on large screens */}
      <div className="max-w-4xl md:ml-4 lg:ml-10 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-14"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400/70 uppercase mb-3">
            — Career Journey —
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="relative"
        >
          <div className="
            relative overflow-hidden
            bg-gray-900/60 backdrop-blur-xl
            border border-gray-700/60
            p-5 sm:p-7 md:p-10 rounded-2xl
            shadow-[0_0_40px_rgba(59,130,246,0.12)]
            hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]
            hover:border-cyan-500/30
            transition-all duration-500
          ">
            {/* top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

            {/* Header row: company + duration badge */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-base sm:text-lg shrink-0">
                    🏢
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    Sasken Technologies
                  </h3>
                </div>
                <p className="text-cyan-400 font-medium mt-1 ml-[44px] sm:ml-[52px] text-sm sm:text-base">
                  Junior .NET Developer (Full-time)
                </p>
              </div>

              <span className="
                shrink-0 self-start sm:self-auto
                text-xs font-semibold tracking-wide
                px-3 py-1.5 rounded-full
                bg-blue-500/10 border border-blue-500/30
                text-blue-300
                whitespace-nowrap
              ">
                Feb 2025 – Feb 2026
              </span>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm mt-3 ml-[44px] sm:ml-[52px]">
              Hybrid · Bengaluru, India
            </p>

            {/* divider */}
            <div className="h-px w-full bg-gradient-to-r from-gray-700/60 via-gray-700/20 to-transparent my-5 sm:my-6 md:my-7" />

            {/* Points */}
            <ul className="space-y-3 sm:space-y-4">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7 group-hover:text-gray-100 transition-colors">
                    {h.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Tech tag cloud at bottom */}
            <div className="mt-6 sm:mt-7 md:mt-8 pt-5 sm:pt-6 border-t border-gray-800 flex flex-wrap gap-2">
              {Array.from(new Set(highlights.map((h) => h.tag))).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
