import React from 'react';
import { FaUser, FaBrain, FaLock, FaRobot } from "react-icons/fa";

export const CoursesSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Relevant Coursework</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: 'Computer Science Fundamentals',
              courses: [
                'COS126: Computer Science: An Interdisciplinary Approach',
                'COS217: Introduction to Programming Systems',
                'COS226: Algorithms and Data Structures',
                'COS240: Reasoning About Computation',
                'COS316: Principles of Computer System Design',
                'COS333: Advanced Programming Techniques'
              ],
              icon: <FaBrain className="text-blue-500"/>,
            },
            {
              category: 'AI & Machine Learning',
              courses: [
                'COS324: Introduction to Machine Learning',
                'COS343: Algorithms for Computational Biology',
                'COS484: Natural Language Processing'
              ],
              icon: <FaRobot className="text-blue-500"/>,
            },
            {
              category: 'Security & Systems',
              courses: [
                'COS432: Information Security',
                'COS445: Economics and Computing'
              ],
              icon: <FaLock className="text-blue-500"/>,
            },
            {
              category: 'Human-Centered Computing',
              courses: [
                'COS436: Human-Computer Interaction'
              ],
              icon: <FaUser className="text-blue-500"/>,
            }
          ].map((section) => (
            <div
              key={section.category}
              className="bg-[#21262D] p-6 rounded-lg hover:bg-[#2D333B] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{section.icon}</span>
                <h3 className="text-xl font-bold">{section.category}</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {section.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};