import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
}

export const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: 'BTech CSE (Data Science)',
      institution: 'B V Raju Institute of Technology',
      period: '2022-2026',
      grade: 'CGPA: 8.99/10',
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya College',
      period: '2020-2022',
      grade: 'Score: 98.2/100',
    },
    {
      degree: 'SSC',
      institution: 'Unique High School',
      period: '2019-2020',
      grade: 'GPA: 10/10',
    }
  ];

  return (
    <section id="education" className="section bg-white">
      <h2 className="section-title text-center mx-auto">Education</h2>
      
      <div className="mt-12">
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-16">
            {educationItems.map((item, index) => (
              <div 
                key={index}
                className={`relative md:flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`card hover:border-blue-200 hover:border ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={20} className="text-blue-600" />
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                    </div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">{item.institution}</h4>
                    <div className="flex items-center gap-1 text-gray-600 mb-2">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-blue-600 font-medium">{item.grade}</p>
                    {item.details && (
                      <p className="text-gray-600 mt-2">{item.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};