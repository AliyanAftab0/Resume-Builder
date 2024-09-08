import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import DownloadResume from './components/DownloadResume';
import Footer from './components/Footer';

// Main page rendering all sections of the resume.
const Home: React.FC = () => {
  return (
    <div id='resume' className="bg-slate-900 min-h-screen">
      {/* Personal Information Section */}
      <PersonalInfo />
      {/* Education Section */}
      <Education />
      {/* Skills Section with toggle functionality */}
      <Skills />
      {/* Work Experience Section */}
      <WorkExperience />
      {/* Download Resume Section */}
      <div className="flex justify-center mt-6">
        <DownloadResume />
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
