import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHubSection';
import { Highlights } from './components/Highlights';
import { Philosophy } from './components/Philosophy';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecruiterFloatingBar } from './components/RecruiterFloatingBar';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Section reveal animation observer
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Active Section observer setup for navigation bar
    const sections = document.querySelectorAll('section[id]');
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((sec) => navObserver.observe(sec));

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <GitHubSection />
        <Highlights />
        <Philosophy />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
      <RecruiterFloatingBar />
    </div>
  );
}

export default App;
