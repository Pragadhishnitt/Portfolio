import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Target } from 'lucide-react';
import { profile } from '../data/portfolio';

const About = ({ darkMode }) => {
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
    <section
      id="about"
      ref={ref}
      className={`py-20 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Get to know who I am and what drives me
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div className={`${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              My Journey
            </h3>
            <div
              className={`${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } space-y-4 text-justify leading-relaxed`}
            >
              {profile.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              What I Bring
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    } border ${
                      darkMode ? 'border-gray-700' : 'border-gray-200'
                    } hover:shadow-lg transition-all transform hover:-translate-y-1`}
                  >
                    <Icon className="text-blue-500 mb-2" size={28} />
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Currently Learning */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="text-yellow-500" size={20} />
                Currently Exploring
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.currentlyLearning.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? 'bg-yellow-900/30 text-yellow-400'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Target className="text-purple-500" size={20} />
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? 'bg-purple-900/30 text-purple-400'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${
            inView ? 'animate-slide-up delay-200' : 'opacity-0'
          }`}
        >
          {Object.entries(profile.stats).map(([key, value], index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2`}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {value}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                } capitalize`}
              >
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