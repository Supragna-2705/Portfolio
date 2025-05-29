import React, { useState } from 'react';
import { Brain, Zap, LayoutGrid, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  githubLink?: string; 
}

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "AI powered Virtual Neuro-therapist",
      description: "Developed a fully automated virtual neurotherapist that guides users through personalized therapeutic activities using AI-powered chatbot interactions.",
      tools: ["React.js", "Node.js", "MySQL", "Hugging Face Transformers/spaCy", "TensorFlow/PyTorch"],
      icon: <Brain className="w-10 h-10 text-purple-600" />,
      githubLink: "https://github.com/abhijithreddy05/neuronest", 
    },
    {
      title: "Responsive Energy Control Systems For Next-Gen Buildings",
      description: "Developed a Responsive Energy Control System (RECS) to optimize energy usage in buildings by dynamically adjusting consumption based on real-time environmental conditions.",
      tools: ["Machine Learning (Gradient Boosting)", "Mixed Integer Linear Programming"],
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      githubLink: "https://github.com/S7viks/MinorProject", 
    },
    {
      title: "Sudoku Solver",
      description: "Developed a Sudoku game in Python with a user-friendly interface for solving and generating puzzles.",
      tools: ["Python", "NumPy"],
      icon: <LayoutGrid className="w-10 h-10 text-blue-600" />,
      githubLink: undefined, 
    },
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <h2 className="section-title text-center mx-auto">Projects</h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`card group cursor-pointer transform transition-all duration-300 ${
              activeProject === index ? 'scale-105 shadow-xl border border-blue-200' : 'hover:scale-105'
            }`}
            onClick={() => setActiveProject(activeProject === index ? null : index)}
          >
            <div className="flex justify-between items-start mb-4">
              {project.icon}
              <span className="text-xs font-medium text-gray-500">{`0${index + 1}`}</span>
            </div>

            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {project.tools.map((tool, toolIndex) => (
                <span
                  key={toolIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.githubLink && (
              <div className="mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
