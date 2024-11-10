import React from 'react';
import { Code, Rocket, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-600">
              Passionate about creating user-centered web applications with seamless interfaces
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">
              Recent graduate in computer applications with strong foundation in web technologies
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Dedicated to learning new technologies and bringing innovative ideas to life
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <p className="text-gray-600 leading-relaxed">
          In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.
          </p>
        </div>
      </div>
    </section>
  );
}