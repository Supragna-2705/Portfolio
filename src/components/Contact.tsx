import React from 'react';
import { Mail, Phone, MapPin, Eye } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <h2 className="section-title text-center mx-auto">Get In Touch</h2>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-lg">supragnakonakala@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-lg">+91 9963029541</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-lg">Hyderabad, India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Resume</h3>
            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="download-btn bg-blue-600 text-white hover:bg-blue-700">
                <Eye size={16} />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card flex flex-col items-center justify-center py-16 bg-gray-50 shadow-lg rounded-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Let's Collaborate</h3>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
              I'm excited to connect and explore how we can work together on innovative projects!
            </p>
            <a
              href="mailto:supragnakonakala@gmail.com"
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-gray-800 transition"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};