import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Java', level: 85, category: 'Programming Languages' },
    { name: 'Python', level: 80, category: 'Programming Languages' },
    { name: 'C', level: 75, category: 'Programming Languages' },
    { name: 'Data Structures & Algorithms', level: 85, category: 'Programming Languages' },
    { name: 'SQL', level: 80, category: 'Programming Languages' },
    { name: 'HTML', level: 85, category: 'Web Technologies' },
    { name: 'CSS', level: 80, category: 'Web Technologies' },
    { name: 'JavaScript', level: 75, category: 'Web Technologies' },
    { name: 'Git & GitHub', level: 85, category: 'Utilities' },
    { name: 'Power BI', level: 80, category: 'Data Visualization' },
    { name: 'VS Code', level: 90, category: 'Software' }
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="section bg-gray-50">
      <h2 className="section-title text-center mx-auto">Technical Skills</h2>
      
      <div className="mt-16 grid gap-10">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-blue-700">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full group-hover:bg-blue-500 transition-all duration-300 ease-in-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};