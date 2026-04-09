// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Hero() {

//   // Typing effect for name
//   const text = "Hi, I'm Priyanka ✨";
//   const [displayed, setDisplayed] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const typing = setInterval(() => {
//       setDisplayed(text.slice(0, i));
//       i++;
//       if (i > text.length) clearInterval(typing);
//     }, 80);

//     return () => clearInterval(typing);
//   }, []);

//   // Roles typing loop
//   const roles = ["Full Stack Developer", ".NET Developer", "Problem Solver"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % roles.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-20 relative overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e3a8a]" />

//       {/* GLOW BACKGROUND */}
//       <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-[120px] opacity-30 top-10 left-10"></div>
//       <div className="absolute w-[300px] h-[300px] bg-cyan-500 blur-[120px] opacity-20 bottom-10 right-10"></div>

//       {/* LEFT SIDE */}
//       <motion.div
//         className="flex flex-col items-center justify-center relative"
//         initial={{ opacity: 0, x: -80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >

//         {/* Glow */}
//         <div className="absolute w-[350px] h-[350px] bg-blue-500 blur-[140px] opacity-30 rounded-full"></div>

//         {/* Floating Image */}
//         <motion.div
//           animate={{ y: [0, -15, 0] }}
//           transition={{ repeat: Infinity, duration: 3 }}
//           className="relative"
//         >

//           {/* Glowing Border */}
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 blur-md opacity-60 animate-pulse"></div>

//           <Image
//             src="/images/girl.png"
//             alt="avatar"
//             width={230}
//             height={230}
//             className="rounded-full border border-gray-700 relative z-10"
//           />
//         </motion.div>

//         {/* Typing Name */}
//         <h2 className="mt-8 text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-wide">
//           {displayed}
//           <span className="animate-pulse">|</span>
//         </h2>

//         {/* Role */}
//         <p className="mt-2 text-gray-400 text-sm tracking-widest uppercase">
//           Full Stack Developer
//         </p>

//       </motion.div>

//       {/* RIGHT SIDE */}
//       <motion.div
//         className="mt-10 md:mt-0"
//         initial={{ opacity: 0, x: 80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >

//         <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//           Building Scalable & Secure Applications 🚀
//         </h1>

//         <p className="text-xl mt-4 text-blue-400 font-semibold">
//           {roles[index]}
//         </p>

//         <p className="mt-6 text-gray-300 leading-7 max-w-xl">
//           I am a passionate and detail-oriented Junior .NET Developer with nearly one year 
//           of hands-on experience in building scalable and secure web applications using 
//           ASP.NET Core, Blazor, and SQL Server.
//           <br /><br />
//           I have experience in developing RESTful APIs, implementing secure authentication 
//           using JWT, optimizing database queries, and building responsive user interfaces. 
//           I enjoy solving real-world problems and continuously improving my technical skills 
//           to deliver efficient and reliable software solutions.
//         </p>

//       </motion.div>

//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {

  // Typing effect for name
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

  // Role switching
  const roles = ["Full Stack Developer", ".NET Developer", "Problem Solver"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen grid md:grid-cols-[40%_60%] items-center px-6 md:px-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e3a8a]" />

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-[120px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 blur-[120px] opacity-20 bottom-10 right-10"></div>

      {/* LEFT SIDE (IMAGE + NAME) */}
      <motion.div
        className="flex flex-col items-center justify-center relative"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        {/* Glow */}
        <div className="absolute w-[320px] h-[320px] bg-blue-500 blur-[140px] opacity-30 rounded-full"></div>

        {/* Floating Image */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="relative"
        >
          {/* Glowing Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 blur-md opacity-60 animate-pulse"></div>

          <Image
            src="/images/girl.png"
            alt="avatar"
            width={220}
            height={220}
            className="rounded-full border border-gray-700 relative z-10"
          />
        </motion.div>

        {/* Typing Name */}
        <h2 className="mt-8 text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-wide">
          {displayed}
          <span className="animate-pulse">|</span>
        </h2>

        {/* Role */}
        <p className="mt-2 text-gray-400 text-sm tracking-widest uppercase">
          Full Stack Developer
        </p>

      </motion.div>

      {/* RIGHT SIDE (CONTENT) */}
      <motion.div
        className="mt-10 md:mt-0 pl-4 md:pl-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Building Scalable & Secure Applications 🚀
        </h1>

        <p className="text-xl mt-4 text-blue-400 font-semibold">
          {roles[index]}
        </p>

        <p className="mt-6 text-gray-300 leading-7 max-w-xl">
          I am a passionate and detail-oriented Junior .NET Developer with nearly one year 
          of hands-on experience in building scalable and secure web applications using 
          ASP.NET Core, Blazor, and SQL Server.
          <br /><br />
          I have experience in developing RESTful APIs, implementing secure authentication 
          using JWT, optimizing database queries, and building responsive user interfaces. 
          I enjoy solving real-world problems and continuously improving my technical skills 
          to deliver efficient and reliable software solutions.
        </p>

      </motion.div>

    </section>
  );
}