import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, FileText, ChevronDown, ExternalLink } from 'lucide-react';
import { profile } from '../data/portfolio';

const Hero = ({ darkMode }) => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = profile.tagline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Blink cursor after typing is done
        setInterval(() => setShowCursor(prev => !prev), 530);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // GitHub Stats
  const githubUsername = profile.social.github.split('github.com/')[1];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-blue-500' : 'bg-blue-300'}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
      </div>

      <div className="max-w-5xl text-center relative z-10 animate-fade-in">
        {/* Profile Image Placeholder */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
            <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center text-5xl font-bold`}>
              {profile.name.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          {profile.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl mb-4 font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-slide-up">
          {profile.title}
        </h2>

        {/* Typing Animation */}
        <p className="text-xl md:text-2xl mb-8 h-10 font-medium">
          <span>{typedText}</span>
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
        </p>

        {/* Short Bio */}
        <p
          className={`text-lg md:text-xl mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          } max-w-3xl mx-auto leading-relaxed animate-slide-up`}
        >
          {profile.shortBio}
        </p>

        {/* Availability Badge */}
        {profile.available && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-500 mb-10 animate-slide-up">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{profile.availableMessage}</span>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            View My Work
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-4 border-2 border-blue-600 hover:bg-blue-600 rounded-lg transition-all font-medium ${
              darkMode ? 'hover:text-white' : ''
            }`}
          >
            Get In Touch
          </button>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-purple-600 hover:bg-purple-600 hover:text-white rounded-lg transition-all font-medium inline-flex items-center gap-2"
            >
              <FileText size={20} />
              Resume
            </a>
          )}
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16 animate-slide-up">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          )}
          {profile.social.twitter && (
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-500 transition-all transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>

        {/* GitHub Stats (if username exists) */}
        {githubUsername && (
          <div className="mb-12 animate-slide-up">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${darkMode ? 'dark' : 'light'}&hide_border=true`}
              alt="GitHub Stats"
              className="mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} className="text-blue-500" />
      </button>
    </section>
  );
};

export default Hero;