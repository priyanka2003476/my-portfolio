"use client";

export default function Skills() {

  const skillGroups = [
    {
      title: "Programming Languages",
      items: ["C#", "Core Java"]
    },
    {
      title: "Frameworks",
      items: ["ASP.NET Core", "Blazor Server", "Entity Framework"]
    },
    {
      title: "Web & API Development",
      items: ["REST APIs", "Web APIs", "JWT Authentication"]
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS"]
    },
    {
      title: "Database",
      items: ["SQL Server"]
    },
    {
      title: "Tools & Platforms",
      items: ["Visual Studio", "SSMS", "Power BI", "GitLab"]
    },
    {
      title: "Methodology",
      items: ["Agile"]
    }
  ];

  return (
    <section className="px-10 py-20 border-t border-gray-800">

      {/* Heading */}
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        Skills
      </h2>

      {/* Skills Container */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">

        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="bg-gray-900 p-5 rounded-xl border border-gray-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition"
          >

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-3">
              {group.title}
            </h3>

            {/* Items */}
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, idx) => (
                <span
                  key={idx}
                  className="
                    px-3 py-1 text-sm rounded-md
                    bg-gray-800 text-gray-300
                    border border-gray-600
                    hover:bg-blue-600 hover:text-white
                    transition duration-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}