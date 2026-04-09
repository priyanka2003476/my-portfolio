"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="px-10 py-24 border-t border-gray-800 relative overflow-hidden">

      {/* Soft Blue Glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-[120px] opacity-10 top-20 left-20"></div>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-16">
        Experience
      </h2>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >

        <div className="
          bg-gray-900/80 backdrop-blur-xl
          border border-gray-700
          p-8 rounded-2xl
          shadow-[0_0_30px_rgba(59,130,246,0.2)]
          hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]
          transition
        ">

          {/* Company */}
          <h3 className="text-2xl font-semibold text-white">
            Sasken Technologies
          </h3>

          {/* Role */}
          <p className="text-blue-400 mt-1">
            Junior .NET Developer (Full-time)
          </p>

          {/* Details */}
          <p className="text-gray-400 mt-1">
            Hybrid • Feb 2025 – Feb 2026
          </p>

          {/* Points */}
          <ul className="mt-6 text-gray-300 space-y-3 leading-7">

            <li>✔ Developed backend APIs and Blazor Server UI using ASP.NET Core for an Access Request Management System.</li>

            <li>✔ Built responsive and interactive user interface components using Blazor to improve user experience.</li>

            <li>✔ Designed and maintained SQL Server tables and wrote optimized queries using SSMS.</li>

            <li>✔ Implemented and consumed REST APIs to enable communication between application modules.</li>

            <li>✔ Integrated JWT authentication to ensure secure access control within the application.</li>

            <li>✔ Debugged application issues and optimized backend logic to improve performance and stability.</li>

            <li>✔ Created interactive dashboards and reports using Power BI for data visualization.</li>

            <li>✔ Used GitLab for version control and collaborated with the development team.</li>

            <li>✔ Worked in Agile sprints to deliver features based on business requirements.</li>

            <li>✔ Implemented form validations and handled user input for smooth workflow.</li>

          </ul>

        </div>

      </motion.div>

    </section>
  );
}