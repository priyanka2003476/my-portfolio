"use client";

import { motion } from "framer-motion";

export default function Contact() {

  const contacts = [
    {
      title: "Email",
      value: "priyankaachar003@gmail.com",
      link: "mailto:priyankaachar003@gmail.com",
      icon: "📧"
    },
    {
      title: "Phone",
      value: "+91 8861552099",
      link: "tel:+918861552099",
      icon: "📱"
    },
    {
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/priyanka-s-620734256/",
      icon: "💼"
    }
  ];

  return (
    <section
      id="contact"
      className="
        scroll-mt-28
        px-6 md:px-10
        py-24
        border-t border-gray-800
        relative overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
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
          Contact
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl leading-7">
          Feel free to reach out for opportunities,
          collaborations, or professional networking.
        </p>

      </motion.div>

      {/* CONTACT CARDS */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">

        {contacts.map((contact, i) => (

          <motion.a
            key={i}
            href={contact.link}
            target="_blank"

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}

            whileHover={{
              y: -8,
              boxShadow: "0px 0px 35px rgba(59,130,246,0.25)"
            }}

            className="
              relative overflow-hidden
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-2xl
              p-5
              transition duration-300
              group
            "
          >

            {/* CARD GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* ICON */}
            <div className="text-5xl relative z-10">
              {contact.icon}
            </div>

            {/* TITLE */}
            <h3 className="mt-6 text-2xl font-bold text-white relative z-10">
              {contact.title}
            </h3>

            {/* VALUE */}
            <p className="mt-3 text-gray-400 relative z-10 break-words">
              {contact.value}
            </p>

          </motion.a>

        ))}

      </div>

      {/* BOTTOM TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >

        <p className="text-gray-500 text-sm tracking-[3px] uppercase">
          Designed & Developed by Priyanka ✨
        </p>

      </motion.div>

    </section>
  );
}