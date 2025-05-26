import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Video } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#hero" className="text-xl font-bold text-blue-600">
              Supragna Konakala
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-2">
              <a href="/resume.pdf" download className="download-btn bg-blue-100 text-blue-700 hover:bg-blue-200">
                <Download size={16} />
                <span>Resume</span>
              </a>
              <a href="#video-resume" className="download-btn bg-purple-100 text-purple-700 hover:bg-purple-200">
                <Video size={16} />
                <span>Video</span>
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex flex-col gap-2 p-3">
              <a href="/resume.pdf" download className="download-btn bg-blue-100 text-blue-700 hover:bg-blue-200">
                <Download size={16} />
                <span>Download Resume</span>
              </a>
              <a href="#video-resume" className="download-btn bg-purple-100 text-purple-700 hover:bg-purple-200">
                <Video size={16} />
                <span>Video Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};