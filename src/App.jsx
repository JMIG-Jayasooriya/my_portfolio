import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Achievements from './sections/Achievements';
import References from './sections/References';
import Contact from './sections/Contact';

function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Home onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Achievements />
        <References />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* CV / Resume Viewer Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

export default App;
