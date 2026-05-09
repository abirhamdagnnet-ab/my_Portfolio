import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
