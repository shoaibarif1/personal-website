import React from 'react';
import { Code2, Database, Terminal, Palette } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      skills: ['C', 'C++'],
    },
    {
      title: 'Front-end',
      icon: <Palette className="w-6 h-6 text-indigo-600" />,
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js'],
    },

    {
      title: 'Tools & Technologies',
      icon: <Terminal className="w-6 h-6 text-purple-600" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
