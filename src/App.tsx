import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Plans from './components/sections/Plans';
import Contact from './components/sections/Contact';
import ParticleBackground from './components/ui/ParticleBackground';

function App() {
  useEffect(() => {
    document.title = 'Chase Davis | Resume';
  }, []);
  
  const navLinks = [
    { text: 'Home', href: 'home' },
    { text: 'About', href: 'about' },
    { text: 'Skills', href: 'skills' },
    { text: 'Experience', href: 'experience' },
    { text: 'Projects', href: 'projects' },
    { text: 'Plans', href: 'plans' },
    { text: 'Contact', href: 'contact' },
  ];

  return (
    <ThemeProvider>
      <div className="relative">
        <ParticleBackground />
        
        <Header navLinks={navLinks} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Plans />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;