"use client";

import { motion } from "framer-motion";

export default function Skills() {

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["C#", "Core Java", "SQL", "TypeScript"]
  },
  {
    title: "Frameworks & Technologies",
    items: [
      "ASP.NET Core",
      "Blazor Server",
      "Entity Framework"
    ]
  },
  {
    title: "Web & API Development",
    items: [
      "REST APIs",
      "Web APIs",
      "JWT Authentication"
    ]
  },
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Angular"
    ]
  },
  {
    title: "Database",
    items: ["SQL Server"]
  },
  {
    title: "Tools & Platforms",
    items: [
      "Visual Studio",
      "VS Code",
      "SSMS",
      "GitLab",
      "Postman",
      "Power BI"
    ]
  },
  {
    title: "AI Productivity Tools",
    items: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "GitHub Copilot",
      "Stitch"
    ]
  },
  {
    title: "Development Methodology",
    items: ["Agile"]
  }
];

  return (
    <section
      id="skills"
      className="
        scroll-mt-28
        px-5 sm:px-8 md:px-10
        py-14 sm:py-18 md:py-24
        border-t border-gray-800
        relative overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-500/10 blur-[70px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-cyan-500/10 blur-[70px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-start px-1 sm:px-0 relative z-10"
      >

        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-400/30 text-cyan-400 text-lg">
            ⚙
          </span>
          <h2
            className="
              text-2xl sm:text-3xl md:text-4xl
              font-extrabold
              bg-gradient-to-r
              from-blue-400
              via-cyan-400
              to-indigo-400
              bg-clip-text
              text-transparent
            "
          >
            Skills &amp; Technologies
          </h2>
        </div>

        {/* underline accent like reference */}
        <div className="mt-3 w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

        <p className="text-gray-400 mt-4 max-w-2xl text-sm sm:text-base">
          Technologies and tools I use to build scalable,
          secure, and modern web applications.
        </p>

      </motion.div>

      {/* SKILLS GRID - 1 col mobile, 2 col tablet, 3 col desktop like reference */}
      <div className="mt-10 sm:mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-1 sm:px-2 md:px-0 relative z-10">

        {skillGroups.map((group, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              boxShadow: "0px 0px 30px rgba(34,211,238,0.2)"
            }}
            className="
              relative
              bg-[#0b1120]/80
              backdrop-blur-xl
              p-5 sm:p-6
              rounded-2xl
              border border-blue-500/15
              hover:border-cyan-400/50
              transition duration-300
              overflow-hidden
            "
          >

            {/* CARD GLOW on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 hover:opacity-100 transition duration-500"></div>

            {/* TITLE with dot bullet, like reference */}
            <h3 className="flex items-center gap-2.5 text-base sm:text-lg font-semibold text-cyan-300 mb-4 sm:mb-5 relative z-10">
              <span className="w-2 h-2 rounded-sm bg-cyan-400 shrink-0" />
              {group.title}
            </h3>

            {/* ITEMS */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-10">

              {group.items.map((item, idx) => (

                <motion.span
                  key={idx}
                  whileHover={{
                    scale: 1.06,
                    y: -2
                  }}
                  className="
                    px-3 sm:px-3.5
                    py-1.5 sm:py-2
                    text-xs sm:text-sm
                    font-mono
                    rounded-lg
                    bg-blue-500/10
                    text-blue-200
                    border border-blue-400/20
                    hover:bg-blue-600
                    hover:text-white
                    hover:border-blue-400
                    transition duration-300
                    cursor-pointer
                  "
                >
                  {item}
                </motion.span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
