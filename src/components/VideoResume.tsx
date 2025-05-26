import React, { useState } from 'react';
import { X } from 'lucide-react';

interface VideoResumeProps {
  videoUrl?: string;
  poster?: string;
  onClose: () => void;
}

export const VideoResume: React.FC<VideoResumeProps> = ({ 
  videoUrl = "https://www.example.com/sample-video.mp4", 
  poster = "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  onClose 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
        >
          <X size={20} />
        </button>
        
        <div className="aspect-video relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <video 
            className="w-full h-full object-cover"
            controls
            poster={poster}
            onCanPlay={() => setIsLoading(false)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="p-4 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-900">Supragna Konakala - Video Resume</h3>
          <p className="text-gray-600 mt-1">
            A brief introduction to my skills, experience, and aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};