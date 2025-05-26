import React from 'react';
import { Trophy, Heart } from 'lucide-react';

export const Achievements: React.FC = () => {
  const interests = [
    "Exploring AI and machine learning advancements",
    "Developing innovative tech solutions",
    "Continuous learning and solving complex technical challenges"
  ];

  return (
    <section id="interests" className="section bg-white">
      <h2 className="section-title text-center mx-auto">Interests</h2>
      
      <div className="mt-12 max-w-3xl mx-auto card">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-6 text-blue-700 flex items-center gap-2">
              <Heart size={20} /> What I'm Passionate About
            </h3>
            
            <ul className="space-y-4">
              {interests.map((interest, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-gray-700">{interest}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-6 text-blue-700 flex items-center gap-2">
              <Trophy size={20} /> Video Resume
            </h3>
            
            <div id="video-resume" className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-gray-700 mb-4">Watch my video resume to learn more about my skills and experience.</p>
              <button className="btn-primary">Play Video Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};