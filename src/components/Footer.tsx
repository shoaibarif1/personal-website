import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 mb-4 md:mb-0">
          © 2024 Shoaib Arif. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a 
            href="https://github.com/shoaibarif1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/shoaib-arif"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:shoaibarif16@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}