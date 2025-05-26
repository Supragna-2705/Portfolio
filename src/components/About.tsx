import React from 'react';
import { BookOpen, Code, Server, Brain, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Aspiring Software Developer with a strong foundation in Data Structures and Algorithms, Full-Stack Development,
          and AI integration. Passionate about building scalable and efficient solutions while continuously exploring the
          intersection of software engineering and machine learning. Dedicated to writing clean, optimized, and
          maintainable code, eager to apply skills in real-world projects.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="card flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
            <Code size={24} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Software Development</h3>
          <p className="text-gray-600">Proficient in Java, C, Python, and modern web technologies to create efficient applications.</p>
        </div>
        
        <div className="card flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
            <Server size={24} className="text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Data Management</h3>
          <p className="text-gray-600">Experience with SQL, data visualization tools, and database management systems.</p>
        </div>
        
        <div className="card flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
            <Brain size={24} className="text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
          <p className="text-gray-600">Exploring the intersection of software engineering and machine learning technologies.</p>
        </div>
        
        <div className="card flex flex-col items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
            <BookOpen size={24} className="text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
          <p className="text-gray-600">Dedicated to staying updated with the latest technologies and best practices.</p>
        </div>
      </div>
      
      <div className="mt-16 flex justify-center">
        <Link 
          to="/video-resume" 
          className="btn-secondary flex items-center gap-2"
        >
          <Video size={18} />
          Watch My Video Resume
        </Link>
      </div>
    </section>
  );
};