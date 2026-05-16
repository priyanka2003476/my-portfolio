"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {

  const text = "Hi, I'm Priyanka ✨";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(typing);
    }, 80);

    return () => clearInterval(typing);
  }, []);

  const roles = [
    "Full Stack .NET Developer",
    ".NET Developer",
    "Problem Solver"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

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
    <section className="min-h-screen grid lg:grid-cols-[42%_58%] items-center gap-16 px-6 md:px-20 py-16 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020617] via-[#07152f] to-[#0f3b8f]" />

      {/* GLOW BACKGROUND */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-blue-500 blur-[150px] opacity-20 top-0 left-0"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[350px] h-[350px] bg-cyan-500 blur-[150px] opacity-20 bottom-0 right-0"
      />

      {/* LEFT SIDE */}
      <motion.div
        className="flex flex-col items-center justify-center relative"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >


        {/* MAIN GLOW */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-[340px] h-[340px] bg-blue-500 blur-[140px] opacity-20 rounded-full"
        />

        {/* IMAGE SECTION */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative flex items-center justify-center"
        >

          {/* OUTER RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-[310px] h-[310px] border border-blue-400/20 rounded-full"
          />

          {/* FLOATING DOT */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-[310px] h-[310px]"
          >
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
          </motion.div>

          {/* WELCOME MESSAGE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="
              absolute top-8 -right-10
              bg-white/10 backdrop-blur-xl
              border border-blue-400/20
              px-4 py-2 rounded-2xl
              text-sm text-blue-100
              shadow-[0_0_25px_rgba(59,130,246,0.2)]
              z-20
            "
          >
            👋 Welcome
          </motion.div>

          {/* GLOW BORDER */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-5px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 blur-md opacity-70"
          />

          {/* SPARKLES */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -left-8 top-12 text-cyan-300 text-2xl"
          >
            ✦
          </motion.div>

          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute right-2 bottom-8 text-yellow-300 text-xl"
          >
            ✨
          </motion.div>

          {/* IMAGE */}
          <Image
            src="/images/girl.png"
            alt="avatar"
            width={230}
            height={230}
            loading="eager"
            className="rounded-full border border-blue-500/20 relative z-10"
          />

        </motion.div>

        {/* NAME */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-10
            text-4xl md:text-5xl
            font-bold
            bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
            bg-clip-text text-transparent
            text-center
          "
        >
          {displayed}
          <span className="animate-pulse">|</span>
        </motion.h2>

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="
            mt-4
            text-gray-400
            text-sm
            tracking-[6px]
            uppercase
          "
        >
          Full Stack .NET Developer
        </motion.p>

      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="mt-10 lg:mt-0"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* MAIN HEADING */}
        <motion.h1
          variants={item}
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[50px]
            font-extrabold
            leading-[1.2]
            max-w-3xl
            text-white
          "
        >
          Crafting Modern & Secure
          <br />

          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Full Stack Applications
          </span>
        </motion.h1>

        {/* ROLE SWITCH */}
        <motion.p
          variants={item}
          className="
            text-xl md:text-2xl
            mt-6
            text-blue-400
            font-semibold
            h-8
          "
        >
          {roles[index]}
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          variants={item}
          className="
            mt-8
            text-gray-300
            leading-9
            max-w-2xl
            text-[16px]
          "
        >
          I am a passionate and detail-oriented Junior .NET Developer with nearly one year
          of experience in developing scalable and secure web applications using
          ASP.NET Core, Blazor, and SQL Server.

          <br /><br />

          I specialize in building RESTful APIs, implementing JWT authentication,
          optimizing database performance, and creating responsive user interfaces
          focused on usability and efficiency.

          <br /><br />

          I enjoy solving real-world problems, learning modern technologies,
          and continuously improving my technical skills to build impactful
          and reliable software solutions.
        </motion.p>

        {/* TECH TAGS */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap gap-4"
        >
          {[
            "ASP.NET Core",
            "Blazor",
            "SQL Server",
            "JWT",
            "REST APIs",
            "Power BI"
          ].map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{
                scale: 1.08,
                y: -3,
                boxShadow: "0px 0px 25px rgba(59,130,246,0.4)"
              }}
              className="
                px-5 py-2 text-sm rounded-full
                bg-white/5
                text-gray-300
                border border-blue-400/20
                backdrop-blur-lg
                hover:bg-blue-600
                hover:text-white
                transition duration-300
                cursor-pointer
              "
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* BUTTON */}
        <motion.div
          variants={item}
          className="mt-12"
        >

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Priyanka_Resume.pdf"
            download
            className="
              px-7 py-3 rounded-full
              bg-gradient-to-r
              from-blue-500 via-cyan-500 to-indigo-500
              text-white font-medium
              shadow-[0_0_30px_rgba(59,130,246,0.4)]
            "
          >
            Download Resume
          </motion.a>

        </motion.div>

        {/* MOVING TECH STACK */}
        <motion.div
          variants={item}
          className="mt-16 overflow-hidden whitespace-nowrap relative"
        >

          <div className="animate-marquee inline-block text-blue-300 text-sm md:text-lg font-medium">
            ASP.NET Core ✦ Blazor ✦ SQL Server ✦ JWT Authentication ✦ REST APIs ✦ Power BI ✦ GitLab ✦ C# ✦ ASP.NET Core ✦ Blazor ✦ SQL Server ✦ JWT Authentication ✦
          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}