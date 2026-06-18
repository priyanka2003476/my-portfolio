"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Access Request Management Portal",
      desc: [
        "Designed and developed an enterprise-level web application to manage user access requests with a structured three-level approval workflow.",
        "Implemented secure authentication and authorization using JWT, ensuring role-based access control across modules.",
        "Developed RESTful APIs using ASP.NET Core to handle business logic and enable seamless communication between frontend and backend.",
        "Built dynamic and responsive user interfaces using Blazor Server, improving usability and user experience.",
        "Designed and optimized SQL Server database schemas, queries, and stored procedures for efficient data management.",
        "Integrated Power BI dashboards to visualize application data and provide meaningful business insights.",
        "Worked in an Agile environment, contributing to sprint planning, feature development, debugging, and performance optimization."
      ],
      tech: [
        "C#",
        "ASP.NET Core",
        "Blazor Server",
        "SQL Server",
        "Entity Framework",
        "REST APIs",
        "JWT Authentication",
        "GitLab",
        "Agile"
      ]
    },
    {
      title: "EEG Cognitive Assessment System",
      desc: [
        "Developed an academic project focused on analyzing EEG signals to study cognitive patterns in visually impaired individuals.",
        "Processed and interpreted real-time brainwave data using analytical techniques to derive meaningful insights.",
        "Designed system logic to identify cognitive responses and improve accessibility-driven solutions.",
        "Collaborated on research-oriented development to support inclusive employment opportunities.",
        "Applied problem-solving and data analysis skills to improve accuracy and reliability of results."
      ],
      tech: [
        "Python",
        "Data Analysis",
        "Signal Processing",
        "EEG Data",
        "Research Methodology"
      ]
    }
  ];

  return (
    <section
      id="projects"
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

      {/* HEADING - shifted slightly instead of edge-flush, consistent with other sections */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-start px-1 sm:px-0 md:ml-2 lg:ml-6 relative z-10"
      >

        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold
            bg-gradient-to-r
            from-blue-400
            via-cyan-400
            to-indigo-400
            bg-clip-text
            text-transparent
          "
        >
          Projects
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base">
          Some of the projects I built using modern technologies,
          secure backend systems, and responsive frontend development.
        </p>

      </motion.div>

      {/* PROJECT GRID */}
      <div className="mt-10 sm:mt-12 md:mt-16 grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 px-1 sm:px-2 md:px-0 md:ml-2 lg:ml-6 relative z-10">

        {projects.map((project, i) => (

          <motion.div
            key={i}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}

            whileHover={{
              y: -8,
              boxShadow: "0px 0px 35px rgba(59,130,246,0.2)"
            }}

            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}

            className={`
              relative overflow-hidden
              rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7
              backdrop-blur-xl
              border transition-all duration-500
              cursor-pointer
              ${
                activeIndex === i
                  ? "bg-blue-500/10 border-blue-400/30"
                  : "bg-white/5 border-white/10"
              }
            `}
          >

            {/* CARD GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 hover:opacity-100 transition duration-500"></div>

            {/* PROJECT NUMBER */}
            <div
              className="
                absolute top-4 right-4 sm:top-5 sm:right-5
                text-3xl sm:text-4xl md:text-5xl font-bold
                text-white/5
              "
            >
              0{i + 1}
            </div>

            {/* TITLE - extra right padding so it never collides with the number on narrow screens */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white relative z-10 pr-12 sm:pr-14">
              {project.title}
            </h3>

            {/* MINI TEXT */}
            <p className="text-blue-300 text-xs sm:text-sm mt-2 relative z-10">
              Tap to {activeIndex === i ? "collapse" : "explore"} project details
            </p>

            {/* CONTENT */}
            <div
              style={{ WebkitOverflowScrolling: "touch" }}
              className={`
                relative z-10
                transition-all duration-500
                ${
                  activeIndex === i
                    ? "max-h-[420px] sm:max-h-[460px] md:max-h-[500px] opacity-100 mt-5 sm:mt-6 overflow-y-auto pr-2"
                    : "max-h-0 opacity-0 overflow-hidden"
                }
              `}
            >

              {/* DESCRIPTION */}
              <ul className="text-gray-300 list-disc pl-4 sm:pl-5 space-y-2.5 sm:space-y-3 text-sm sm:text-base">

                {project.desc.map((point, idx) => (
                  <li
                    key={idx}
                    className="leading-6 sm:leading-7"
                  >
                    {point}
                  </li>
                ))}

              </ul>

              {/* TECH STACK */}
              <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">

                {project.tech.map((t, idx) => (

                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.08,
                      y: -2
                    }}
                    className="
                      px-3 sm:px-3.5 md:px-4
                      py-1.5 sm:py-2
                      text-xs sm:text-sm rounded-full
                      bg-gray-900/80
                      text-gray-300
                      border border-gray-700
                      hover:bg-blue-600
                      hover:text-white
                      hover:border-blue-400
                      transition duration-300
                    "
                  >
                    {t}
                  </motion.span>

                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
