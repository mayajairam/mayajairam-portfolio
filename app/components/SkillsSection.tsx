import React from 'react';

export const SkillsSection = () => {
  const categories = [
    {
      category: 'Languages & Frameworks',
      icon: '🧠',
      skills: ['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Flask'],
    },
    {
      category: 'Backend & Databases',
      icon: '⚙️',
      skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Prisma', 'REST APIs'],
    },
    {
      category: 'DevOps & Hosting',
      icon: '🚀',
      skills: ['Docker', 'Vercel', 'Render', 'AWS (EC2, S3)'],
    },
    {
      category: 'Tools & Practices',
      icon: '🛠️',
      skills: ['Git', 'Figma', 'Jira', 'CI/CD', 'Prompt Engineering'],
    },
    {
      category: 'Bonus Skills',
      icon: '✨',
      skills: ['Web Scraping', 'OpenAI API', 'Selenium', 'BeautifulSoup'],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 px-4 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map(({ category, icon, skills }) => (
            <div key={category} className="bg-[#21262D] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{icon}</span>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-[#2D333B] px-3 py-1 rounded-full text-sm text-gray-300 border border-[#30363D] hover:border-blue-500 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
