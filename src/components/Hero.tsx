import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-animate bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          className="max-w-4xl mx-auto text-center section-animate"
          style={{ animationDelay: '0.2s' }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">
            Shoaib Arif
          </h1>

          <div className="mb-8 animate-float">
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              Frontend Developer
            </h2>
            <p className="text-xl text-gray-600 mt-4">
            I like to craft solid and scalable frontend products with great user experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center group button-glow"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 group"
            >
              Get in Touch
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/shoaibarif1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/shoaib-arif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:shoaibarif16@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
        >
          <ArrowRight className="w-8 h-8 rotate-90" />
        </a>
      </div>
    </section>
  );
}
