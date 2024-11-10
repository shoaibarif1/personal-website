import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Stack Overflow Clone",
      description: "A full-featured Q&A platform built with React.js and Node.js, featuring user authentication, voting system, and real-time updates",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      github: "https://github.com/shoaibarif1",
      live: true
    },
    {
      title: "LeetMetric",
      description: "Analytics dashboard for LeetCode progress tracking with dynamic visualizations and performance metrics",
      tech: ["JavaScript", "CSS", "GraphQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      demo: true,
      live: true
    },
    {
      title: "Next Read",
      description: "AI-powered reading platform with personalized content recommendations and interactive learning features",
      tech: ["Next.js", "React", "Tailwind CSS", "OpenAI"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      github: "https://github.com/shoaibarif1"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Code2 className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-center">My Work</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}