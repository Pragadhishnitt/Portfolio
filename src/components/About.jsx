import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Target } from 'lucide-react';
import { profile } from '../data/portfolio';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and frameworks"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to building great products"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering measurable impact"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-20 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Me<span className="text-accent">.</span></h2>
          <p className="text-lg text-primary-muted max-w-2xl leading-relaxed">
            Get to know who I am and what drives me.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Bio */}
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-white">
              My Journey
            </h3>
            <div className="space-y-6 text-primary-muted text-lg leading-relaxed">
              {profile.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            {/* About Image */}
            {profile.aboutImage && (
              <div className="mb-10 relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                <img
                  src={profile.aboutImage}
                  alt="About Me"
                  className="relative w-full h-64 md:h-80 object-cover rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            )}

            <h3 className="text-2xl font-heading font-semibold mb-8 text-white">
              What I Bring
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <Icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={28} />
                    <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-sm text-primary-muted">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Currently Learning */}
            <div className="mt-12">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-white">
                <Zap className="text-yellow-500" size={20} />
                Currently Exploring
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.currentlyLearning.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 rounded-full text-sm bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${inView ? 'animate-slide-up' : 'opacity-0'
            }`}
          style={{ animationDelay: '300ms' }}
        >
          {Object.entries(profile.stats).map(([key, value], index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl text-center hover:bg-white/5 transition-colors"
            >
              <div className="text-4xl font-bold text-white mb-2 font-heading">
                {value}
              </div>
              <div className="text-sm text-primary-muted capitalize tracking-wide">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;