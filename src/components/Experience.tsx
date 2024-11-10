import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company: "NullClass",
      period: "May 2023 - Aug 2023",
      description: "Worked on real-time projects using React.js, Node.js, Express.js, MongoDB"
    },
    {
      title: "Subject Matter Expert",
      company: "Chegg India",
      period: "Nov 2023 - Present",
      description: [
        "Provide solutions to computer science queries, assisting students in understanding complex concepts",
        "Ensure clarity and accuracy in responses, maintaining high quality standards",
       
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">{exp.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}