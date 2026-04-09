// "use client";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <motion.section
//       id="about"
//       className="px-10 py-20 border-t border-gray-800"
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
//         About Me
//       </h2>

//       <p className="mt-6 text-gray-300 max-w-3xl leading-7">
//         I started my journey in software development with a strong interest in 
//         building real-world applications that solve meaningful problems. Over time, 
//         I developed a solid foundation in backend development using C# and ASP.NET Core,
//         along with frontend development using Blazor and modern web technologies.
//         <br /><br />
//         During my professional experience, I worked on designing and developing 
//         scalable systems, handling user authentication, managing databases, and 
//         improving application performance. I enjoy working in collaborative 
//         environments and contributing to team success through clean and efficient code.
//         <br /><br />
//         Apart from technical skills, I value continuous learning, adaptability, 
//         and effective communication, which help me grow as a developer and deliver 
//         high-quality solutions.
//       </p>
//     </motion.section>
//   );
// }



"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-6 md:px-16 py-24 border-t border-gray-800 grid md:grid-cols-2 gap-10 items-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* LEFT SIDE - TEXT */}
      <div>
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="mt-6 text-gray-300 leading-7 text-lg">
          I started my journey in software development with a strong passion for building
          real-world applications that solve meaningful problems. Over time, I developed
          a solid foundation in backend development using <span className="text-white font-medium">C# and ASP.NET Core</span>,
          along with frontend development using <span className="text-white font-medium">Blazor and modern web technologies</span>.
          <br /><br />
          During my professional experience, I worked on designing and developing scalable
          systems, implementing secure authentication, managing databases, and improving
          application performance. I enjoy working in collaborative environments and
          contributing through clean, efficient, and maintainable code.
          <br /><br />
          I strongly believe in continuous learning and adaptability, which helps me grow
          as a developer and deliver high-quality, reliable software solutions.
        </p>
      </div>

      {/* RIGHT SIDE - DESIGN / VISUAL */}
      <div className="relative hidden md:flex justify-center items-center">

        {/* Glow Circle */}
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-[100px] rounded-full"></div>

        {/* Card */}
        <div className="
          relative p-8 rounded-xl
          bg-white/5 backdrop-blur-lg
          border border-gray-700/50
          hover:border-blue-400
          hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
          transition duration-300
        ">
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Highlights
          </h3>

          <ul className="text-gray-300 space-y-2 text-sm">
            <li>✔ 1 Year Experience in .NET Development</li>
            <li>✔ Built Scalable Web Applications</li>
            <li>✔ Strong in API Development & Security</li>
            <li>✔ Experience with SQL & Power BI</li>
            <li>✔ Agile & Team Collaboration</li>
          </ul>
        </div>

      </div>

    </motion.section>
  );
}