import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Code } from 'lucide-react';
import { profile } from '../data/portfolio';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'
      } border-t`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {profile.name.split(' ').map(word => word[0]).join('')}
            </div>
            <p
              className={`${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              } mb-4`}
            >
              {profile.title}
            </p>
            <p
              className={`${
                darkMode ? 'text-gray-500' : 'text-gray-500'
              } text-sm mb-4`}
            >
              {profile.tagline}
            </p>
            <div className="flex gap-4">
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              )}
              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              )}
              {profile.social.twitter && (
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
              )}
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-blue-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Timeline', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`${
                      darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } transition-colors hover:translate-x-1 inline-block`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className={`${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors flex items-center gap-2`}
                >
                  <Mail size={16} />
                  {profile.email}
                </a>
              </li>
              <li className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Code size={16} />
                {profile.location}
              </li>
              {profile.available && (
                <li className="flex items-center gap-2 text-green-500 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {profile.availableMessage}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t ${
            darkMode ? 'border-gray-800' : 'border-gray-200'
          } flex flex-col md:flex-row justify-between items-center gap-4`}
        >
          <p
            className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            } flex items-center gap-1 flex-wrap justify-center`}
          >
            © {currentYear} {profile.name}. Built with{' '}
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />{' '}
            using React + Vite + Tailwind
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              View Source
            </a>
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-50'
              } border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } shadow hover:shadow-lg transform hover:-translate-y-1`}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;