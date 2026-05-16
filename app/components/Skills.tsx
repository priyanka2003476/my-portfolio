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
      "SQL Server Management Studio (SSMS)",
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
        px-6 md:px-10
        py-24
        border-t border-gray-800
        relative overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-start"
      >

        <h2
          className="
            text-4xl md:text-5xl
            font-extrabold
            bg-gradient-to-r
            from-blue-400
            via-cyan-400
            to-indigo-400
            bg-clip-text
            text-transparent
          "
        >
          Skills
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Technologies and tools I use to build scalable,
          secure, and modern web applications.
        </p>

      </motion.div>

      {/* SKILLS GRID */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">

        {skillGroups.map((group, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              boxShadow: "0px 0px 30px rgba(59,130,246,0.25)"
            }}
            className="
              relative
              bg-white/5
              backdrop-blur-xl
              p-6
              rounded-2xl
              border border-white/10
              transition duration-300
              overflow-hidden
            "
          >

            {/* CARD GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 hover:opacity-100 transition duration-500"></div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-white mb-5 relative z-10">
              {group.title}
            </h3>

            {/* ITEMS */}
            <div className="flex flex-wrap gap-3 relative z-10">

              {group.items.map((item, idx) => (

                <motion.span
                  key={idx}
                  whileHover={{
                    scale: 1.08,
                    y: -3
                  }}
                  className="
                    px-4 py-2
                    text-sm
                    rounded-full
                    bg-gray-900/80
                    text-gray-300
                    border border-gray-700
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