import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen theme-transition overflow-x-hidden" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-primary))' }}>
      {/* Background Gradients - themed */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-30"
          style={{ backgroundColor: 'rgba(var(--color-accent), 0.15)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-30"
          style={{ backgroundColor: 'rgba(var(--color-accent), 0.15)' }}
        />
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl theme-transition"
        style={{
          backgroundColor: 'rgba(var(--color-surface), 0.9)',
          border: '1px solid rgba(var(--color-border), 0.5)',
          backdropFilter: 'blur(12px)'
        }}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <Sun className="text-yellow-400 hover:rotate-90 transition-transform duration-500" size={24} />
        ) : (
          <Moon className="text-blue-500 hover:-rotate-12 transition-transform duration-500" size={24} />
        )}
      </button>

      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12 max-w-7xl">
          <Hero />
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <Blog />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;