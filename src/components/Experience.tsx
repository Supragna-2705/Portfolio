import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-white">
      <h2 className="section-title text-center mx-auto">Internship Experience</h2>
      
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="card hover:border-blue-200 hover:border">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Briefcase size={24} className="text-blue-600" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900">Swecha Summer of AI Virtual Internship</h3>
              
              <div className="flex items-center gap-1 text-gray-600 mt-1 mb-4">
                <Calendar size={16} />
                <span>Virtual Internship</span>
              </div>
              
              <p className="text-gray-700 mb-4">
                During my AI virtual internship, I had the opportunity to develop and enhance my expertise in designing,
                developing and evaluating an Automatic Speech Recognition model.
              </p>
              
              <p className="text-gray-700">
                I also contributed to the collection of diverse Telugu audio and video samples, directly supporting the project's
                goals.
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-lg font-semibold mb-2 text-blue-700">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                
                  <li>Contributed to data collection for diverse language samples</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
