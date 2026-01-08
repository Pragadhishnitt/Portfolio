import React from 'react';
import { Github, Linkedin, Mail, Instagram, Heart, ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="relative inline-block group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-background rounded-lg border border-white/10">
                  <span className="font-heading font-bold text-2xl text-primary">PR</span>
                </div>
              </div>
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
                    className="p-2 rounded-full bg-surface hover:bg-primary/10 text-primary transition-colors"
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
            <h3 className="font-bold mb-6 text-primary">Navigation</h3>
            <ul className="space-y-4">
              {['About', 'Timeline', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-muted hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-primary">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary-muted hover:text-primary transition-colors"
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
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-primary-muted flex items-center gap-1">
            © {currentYear} {profile.name}. Built with 🧠
          </p>

          <div className="flex items-center gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-muted hover:text-primary transition-colors"
            >
              View Source
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface hover:bg-primary/10 text-primary transition-colors text-sm font-medium"
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