import React from 'react';
import { Github, Linkedin, Mail, Instagram, Heart, ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-heading font-bold mb-6 text-white">
              PR
            </div>
            <p className="text-primary-muted mb-8 max-w-sm leading-relaxed">
              {profile.tagline}
            </p>
            <div className="flex gap-4">
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
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-4">
              {['About', 'Timeline', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-muted hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary-muted hover:text-white transition-colors"
                >
                  {profile.email}
                </a>
              </li>
              <li className="text-primary-muted">
                {profile.location}
              </li>
              {profile.available && (
                <li className="flex items-center gap-2 text-green-400 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {profile.availableMessage}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-primary-muted flex items-center gap-1">
            © {currentYear} {profile.name}. Built with <Heart size={14} className="text-red-500 fill-red-500" />
          </p>

          <div className="flex items-center gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-muted hover:text-white transition-colors"
            >
              View Source
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors text-sm font-medium"
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;