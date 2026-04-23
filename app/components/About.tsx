"use client";
import { motion } from "framer-motion";

export default function About() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="about"
      className="px-6 md:px-16 py-24 border-t border-gray-800 grid md:grid-cols-2 gap-10 items-center"
    >

      {/* LEFT SIDE */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <motion.h2
          variants={item}
          className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 text-gray-300 leading-7 text-lg"
        >
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
        </motion.p>

      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="relative hidden md:flex justify-center items-center"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* Glow (subtle breathing, no movement) */}
        <motion.div
  className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-[100px] rounded-full"
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  whileHover={{ scale: 1.05 }}
  animate={{ scale: [1, 1.02, 1] }}
  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  className="relative p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-gray-700/50 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
>

          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Highlights
          </h3>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-300 space-y-2 text-sm"
          >
            {[
              "✔ 1 Year Experience in .NET Development",
              "✔ Built Scalable Web Applications",
              "✔ Strong in API Development & Security",
              "✔ Experience with SQL & Power BI",
              "✔ Agile & Team Collaboration"
            ].map((itemText, i) => (
              <motion.li key={i} variants={item}>
                {itemText}
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>

      </motion.div>

    </section>
  );
}