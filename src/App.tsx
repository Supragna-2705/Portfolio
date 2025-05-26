import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import VideoResumePage from './components/VideoResumePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Experience />
            <Certifications />
            <Achievements />
            <Contact />
          </Layout>
        } />
        <Route path="/video-resume" element={<VideoResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;