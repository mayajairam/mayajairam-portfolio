import React from "react";

export const WorkExperienceSection = () => {
  const roles = [
    {
      title: "Research Intern",
      company: "Fiocruz Foundation",
      dates: "Jun 2023 – Aug 2023",
    },
    {
      title: "Teaching Assistant",
      company: "Princeton University",
      dates: "Feb 2023 – May 2024",
    },
    {
      title: "Data & Technology Officer",
      company: "fAlpha.ai",
      dates: "May 2024 – Sep 2024",
    },
    {
      title: "Software Engineer",
      company: "BILI",
      dates: "Dec 2024 – Present",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">
          Experience Timeline
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {roles.map((role, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-[#112240] border border-blue-500 p-4 rounded-lg shadow-md min-w-[200px] text-center hover:scale-105 transition-transform duration-300">
                <h3 className="text-blue-300 font-semibold">{role.title}</h3>
                <p className="text-sm">{role.company}</p>
                <p className="text-xs text-gray-400 mt-1">{role.dates}</p>
              </div>
              {index !== roles.length - 1 && (
                <div className="hidden lg:flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
