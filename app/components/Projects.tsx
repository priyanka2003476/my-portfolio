

// "use client";
// import { useState } from "react";

// export default function Projects() {

//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const projects = [
//     {
//       title: "Access Request Management Portal",
//       desc: [
//         "Designed and developed an enterprise-level web application to manage user access requests with a structured three-level approval workflow.",
//         "Implemented secure authentication and authorization using JWT, ensuring role-based access control across modules.",
//         "Developed RESTful APIs using ASP.NET Core to handle business logic and enable seamless communication between frontend and backend.",
//         "Built dynamic and responsive user interfaces using Blazor Server, improving usability and user experience.",
//         "Designed and optimized SQL Server database schemas, queries, and stored procedures for efficient data management.",
//         "Integrated Power BI dashboards to visualize application data and provide meaningful business insights.",
//         "Worked in an Agile environment, contributing to sprint planning, feature development, debugging, and performance optimization."
//       ],
//       tech: [
//         "C#", "ASP.NET Core", "Blazor Server",
//         "SQL Server", "Entity Framework",
//         "REST APIs", "JWT Authentication",
//         "GitLab", "Agile"
//       ]
//     },
//     {
//       title: "EEG Cognitive Assessment System",
//       desc: [
//         "Developed an academic project focused on analyzing EEG signals to study cognitive patterns in visually impaired individuals.",
//         "Processed and interpreted real-time brainwave data using analytical techniques to derive meaningful insights.",
//         "Designed system logic to identify cognitive responses and improve accessibility-driven solutions.",
//         "Collaborated on research-oriented development to support inclusive employment opportunities.",
//         "Applied problem-solving and data analysis skills to improve accuracy and reliability of results."
//       ],
//       tech: [
//         "Python", "Data Analysis",
//         "Signal Processing", "EEG Data",
//         "Research Methodology"
//       ]
//     }
//   ];

//   return (
//     <section id="projects" className="px-10 py-20 border-t border-gray-800">

//       <h2 className="text-4xl font-extrabold text-gray-200">
//         Projects
//       </h2>

//       <div className="mt-12 grid md:grid-cols-2 gap-8">

//         {projects.map((project, i) => (
//           <div
//             key={i}
//             onMouseEnter={() => setActiveIndex(i)}
//             onMouseLeave={() => setActiveIndex(null)}
//             className={`
//               rounded-xl p-6 backdrop-blur-lg transition duration-300
//               ${
//                 activeIndex === i
//                   ? "bg-gray-900 border border-gray-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
//                   : "bg-white/5 border border-gray-700/50"
//               }
//             `}
//           >

//             {/* Title */}
//             <h3 className="text-xl font-semibold text-gray-100">
//               {project.title}
//             </h3>

//             {/* Content */}
//             <div
//               className={`
//                 mt-4 overflow-hidden transition-all duration-500
//                 ${activeIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
//               `}
//             >

//               <ul className="text-gray-400 list-disc pl-5 space-y-2 mt-3">
//                 {project.desc.map((point, idx) => (
//                   <li key={idx}>{point}</li>
//                 ))}
//               </ul>

//               <div className="mt-5 flex flex-wrap gap-2">
//                 {project.tech.map((t, idx) => (
//                   <span
//                     key={idx}
//                     className="
//                       px-3 py-1 text-sm rounded-full 
//                       bg-gray-800 text-gray-300 
//                       border border-gray-600
//                     "
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//             </div>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }

"use client";
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
        "C#", "ASP.NET Core", "Blazor Server",
        "SQL Server", "Entity Framework",
        "REST APIs", "JWT Authentication",
        "GitLab", "Agile"
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
        "Python", "Data Analysis",
        "Signal Processing", "EEG Data",
        "Research Methodology"
      ]
    }
  ];

  return (
    <section id="projects" className="px-10 py-20 border-t border-gray-800">

      <h2 className="text-4xl font-extrabold text-gray-200">
        Projects
      </h2>

      <div className="mt-12 grid md:grid-cols-2 gap-8">

        {projects.map((project, i) => (
          <div
            key={i}

            // 🔥 FIX: support both hover + click
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}

            className={`
              rounded-xl p-6 backdrop-blur-lg transition duration-300 cursor-pointer
              ${
                activeIndex === i
                  ? "bg-gray-900 border border-gray-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  : "bg-white/5 border border-gray-700/50"
              }
            `}
          >

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-100">
              {project.title}
            </h3>

            {/* Content */}
            <div
              style={{ WebkitOverflowScrolling: "touch" }}
              className={`
                mt-4 transition-all duration-500
                ${
                  activeIndex === i
                    ? "max-h-[400px] md:max-h-[500px] overflow-y-auto opacity-100 pr-2"
                    : "max-h-0 overflow-hidden opacity-0"
                }
              `}
            >

              {/* Description */}
              <ul className="text-gray-400 list-disc pl-5 space-y-2 mt-3">
                {project.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1 text-sm rounded-full 
                      bg-gray-800 text-gray-300 
                      border border-gray-600
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}