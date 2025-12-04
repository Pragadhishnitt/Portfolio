import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, ChevronDown, ArrowRight } from 'lucide-react';
import { profile } from '../data/portfolio';

const Hero = () => {
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
        setInterval(() => setShowCursor(prev => !prev), 530);
      }
    }, 50); // Faster typing
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

  const githubUsername = profile.social.github.split('github.com/')[1];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="max-w-4xl text-center relative z-10 animate-fade-in">

        {/* Profile Image */}
        {profile.profileImage && (
          <div className="mb-8 animate-slide-up">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 mx-auto object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight animate-slide-up">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl mb-6 font-light text-primary-muted animate-slide-up" style={{ animationDelay: '100ms' }}>
          {profile.title}
        </h2>

        {/* Typing Animation */}
        <div className="h-8 mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <p className="text-lg md:text-xl font-mono text-accent">
            <span>{typedText}</span>
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-lg md:text-xl mb-12 text-primary-muted max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '300ms' }}>
          {profile.shortBio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all flex items-center gap-2"
          >
            View Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-white/20 hover:bg-white/5 rounded-full font-medium transition-all"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 justify-center mb-16 animate-slide-up" style={{ animationDelay: '500ms' }}>
          {[
            { Icon: Github, href: profile.social.github, label: 'GitHub' },
            { Icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
            { Icon: Instagram, href: profile.social.instagram, label: 'Instagram' },
            { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email' }
          ].map(({ Icon, href, label }) => (
            href && (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-muted hover:text-white transition-colors transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            )
          ))}
        </div>


      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-muted hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;