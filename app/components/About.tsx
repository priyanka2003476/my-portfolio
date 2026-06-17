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
      className="
        px-6 md:px-20 py-28
        border-t border-white/10
        grid lg:grid-cols-[60%_40%]
        gap-16 items-center
      "
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
          className="
            text-5xl md:text-6xl
            font-black
            bg-gradient-to-r
            from-blue-400
            via-cyan-400
            to-indigo-400
            bg-clip-text
            text-transparent
          "
        >
          About Me
        </motion.h2>

        <motion.p
          variants={item}
          className="
            mt-8
            text-[var(--foreground)]
            opacity-80
            leading-10
            text-xl
            max-w-4xl
          "
        >
          I started my journey in software development with a strong passion for building
          real-world applications that solve meaningful problems. Over time, I developed
          a solid foundation in backend development using{" "}
          <span className="text-cyan-400 font-semibold">
            C# and ASP.NET Core
          </span>,
          along with frontend development using{" "}
          <span className="text-cyan-400 font-semibold">
            Blazor and modern web technologies
          </span>.

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

        {/* GLOW */}
        <motion.div
          className="
            absolute
            w-80 h-80
            bg-cyan-500
            opacity-30
            blur-[120px]
            rounded-full
          "
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* OPEN TO WORK BADGE */}
        <div
          className="
            absolute -top-10
            left-1/2 -translate-x-1/2
            px-5 py-2
            rounded-full
            bg-cyan-500/10
            border border-cyan-400/30
            backdrop-blur-lg
            text-cyan-300
            text-sm
            z-20
          "
        >
          🚀 Open To Opportunities
        </div>

        {/* CARD */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="
            relative
            p-10
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-cyan-400/20
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
          "
        >

<h3
  className="
    text-2xl
    font-bold
    text-[var(--foreground)]
    mb-6
  "
>
  Professional Highlights
</h3>

<motion.ul
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    text-[var(--foreground)]
    opacity-80
    space-y-4
    text-base
    mb-8
  "
>
  {[
    "✔ Junior Full Stack .NET Developer",
    "✔ ASP.NET Core & Blazor Development",
    "✔ REST API & JWT Authentication",
    "✔ SQL Server & Power BI Reporting",
    "✔ Agile Team Collaboration",
    "✔ Enterprise Application Development"
  ].map((itemText, i) => (
    <motion.li
      key={i}
      variants={item}
    >
      {itemText}
    </motion.li>
  ))}
</motion.ul>

{/* EDUCATION */}
<div className="mt-8 border-t border-cyan-400/20 pt-6">

  <h3 className="text-xl font-bold text-cyan-400 mb-5">
    🎓 Education
  </h3>

  <div className="space-y-5">

    <div>
      <h4 className="font-semibold text-[var(--foreground)]">
        Bachelor of Engineering - Information Science
      </h4>

      <p className="text-sm opacity-75">
        Bapuji Institute of Engineering and Technology
      </p>

      <p className="text-sm text-cyan-400">
        2021 - 2024 | CGPA: 8.0
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-[var(--foreground)]">
        Diploma - Computer Science & Engineering
      </h4>

      <p className="text-sm opacity-75">
        DRR Government Polytechnic College
      </p>

      <p className="text-sm text-cyan-400">
        2018 - 2021 | 77%
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-[var(--foreground)]">
        SSLC
      </h4>

      <p className="text-sm text-cyan-400">
        Completed 2018 | 81.12%
      </p>
    </div>

  </div>

</div>

        </motion.div>

      </motion.div>

    </section>
  );
}