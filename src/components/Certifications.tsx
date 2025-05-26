import React from 'react';
import { Award, Check } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
}

export const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Java Fundamentals and Foundations",
      issuer: "Oracle Academy"
    },
    {
      title: "Programming Languages (C, Java, Python)",
      issuer: "NPTEL"
    },
    {
      title: "Programming with Python",
      issuer: "SkillUp by Simplilearn"
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "Google"
    }
  ];

  const workshops = ["Data visualization using PowerBI (2-day workshop)"];
  
  const achievements = [
    "Secured 10.0 in 10th grade",
    "Achieved 982/1000 in Intermediate",
    "Achieved 4th place in a national level Hackathon-HACKFINITI"
  ];

  return (
    <section id="certifications" className="section bg-gray-50">
      <h2 className="section-title text-center mx-auto">Certifications & Achievements</h2>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card">
          <h3 className="text-xl font-bold mb-6 text-blue-700 flex items-center gap-2">
            <Award size={20} /> Certifications
          </h3>
          
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex gap-2">
                <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-bold mb-6 text-blue-700 flex items-center gap-2">
            <Award size={20} /> Workshops
          </h3>
          
          <ul className="space-y-4">
            {workshops.map((workshop, index) => (
              <li key={index} className="flex gap-2">
                <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{workshop}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold mb-6 text-blue-700 flex items-center gap-2">
            <Award size={20} /> Achievements
          </h3>
          
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex gap-2">
                <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{achievement}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
