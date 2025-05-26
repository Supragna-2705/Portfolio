import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Supragna Konakala
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 mt-2 mb-6">Aspiring Software Developer</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              BTech CSE (Data Science) student with strong foundations in Data Structures, Algorithms, 
              Full-Stack Development, and AI integration. Passionate about building efficient solutions 
              and exploring the intersection of software engineering and machine learning.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="btn-outline"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex gap-5">
              <a 
                href="https://www.linkedin.com/in/supragna-konakala-2a2247259" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Supragna-2705" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="mailto:supragnakonakala@gmail.com"
                className="text-gray-700 hover:text-red-600 transition-colors"
                aria-label="Email Me"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+919963029541"
                className="text-gray-700 hover:text-green-600 transition-colors"
                aria-label="Call Me"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="w-80 h-80 bg-blue-600 rounded-full absolute top-0 right-0 opacity-10 blur-3xl"></div>
            <div className="w-72 h-72 bg-teal-600 rounded-full absolute bottom-0 left-0 opacity-10 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-100 p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Supragna Konakala</h3>
              <p className="text-gray-600 text-center mb-6">BTech CSE (Data Science)</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-500" />
                  <span className="text-gray-700 text-sm">supragnakonakala@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-500" />
                  <span className="text-gray-700 text-sm">+91 9963029541</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-blue-500" />
                  <span className="text-gray-700 text-sm">supragna-konakala-2a2247259</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitHub size={16} className="text-blue-500" />
                  <span className="text-gray-700 text-sm">Supragna-2705</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};