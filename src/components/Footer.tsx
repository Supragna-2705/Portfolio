import React from 'react';
import { Heart, Download, Video, Linkedin, Github as GitHub, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Supragna Konakala</h3>
            <p className="text-gray-400 mb-4">
              Aspiring Software Developer with a passion for creating efficient and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/supragna-konakala-2a2247259" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Supragna-2705" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="mailto:supragnakonakala@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resume</h3>
            <div className="space-y-3">
              <a 
                href="/resume.pdf" 
                download 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
              <a 
                href="#video-resume" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Video size={16} />
                <span>View Video Resume</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Supragna Konakala &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};