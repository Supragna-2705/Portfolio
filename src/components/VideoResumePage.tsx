import React from 'react';

const VideoResumePage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 px-4">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">My Video Resume</h1>
      <p className="text-gray-600 mb-6 text-center">
        Watch my video resume to learn more about my skills, experience, and aspirations.
      </p>
      <div className="w-full aspect-video mb-6">
        <video
          className="w-full h-full rounded-lg border"
          controls
          poster="/video-resume-poster.jpg" // Optional: add a poster image in public/
        >
          <source src="/video-resume.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <a
        href="/"
        className="btn-primary mt-2"
      >
        Back to Home
      </a>
    </div>
  </div>
);

export default VideoResumePage; 