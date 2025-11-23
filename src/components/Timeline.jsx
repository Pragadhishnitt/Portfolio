import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Users, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { experience } from '../data/portfolio';

const Timeline = ({ darkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'volunteer':
        return Users;
      default:
        return Briefcase;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'work':
        return 'blue';
      case 'education':
        return 'purple';
      case 'volunteer':
        return 'green';
      default:
        return 'blue';
    }
  };

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            An interactive timeline of my professional and academic experiences
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>

          {/* Timeline Items */}
          {experience.map((item, index) => {
            const Icon = getIcon(item.type);
            const color = getColor(item.type);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative mb-12 ${
                  inView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`flex items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  } pl-20 md:pl-0`}>
                    <div
                      className={`${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      } rounded-xl p-6 shadow-lg border ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                      } hover:shadow-xl transition-all transform hover:-translate-y-1`}
                    >
                      {/* Logo/Image */}
                      {item.logo && (
                        <div className={`mb-4 ${isLeft ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'}`}>
                          <div className={`w-16 h-16 rounded-lg bg-${color}-500/20 flex items-center justify-center`}>
                            <span className="text-2xl font-bold">{item.company[0]}</span>
                          </div>
                        </div>
                      )}

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                      <div className={`text-${color}-500 font-semibold mb-2`}>
                        {item.company}
                      </div>

                      {/* Meta Info */}
                      <div className={`flex flex-wrap gap-3 text-sm mb-4 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      } ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {item.startDate} - {item.current ? 'Present' : item.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                          <ul className={`space-y-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                            {item.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className={`flex items-start gap-2 text-sm ${
                                  darkMode ? 'text-gray-300' : 'text-gray-700'
                                } ${isLeft ? 'md:flex-row-reverse' : ''}`}
                              >
                                <span className={`text-${color}-500 mt-0.5`}>•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack */}
                      {item.tech && item.tech.length > 0 && (
                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                          {item.tech.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 rounded text-xs ${
                                darkMode
                                  ? `bg-${color}-900/30 text-${color}-400`
                                  : `bg-${color}-100 text-${color}-700`
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } border-4 ${
                    item.current 
                      ? `border-${color}-500 animate-pulse` 
                      : darkMode ? 'border-gray-700' : 'border-gray-300'
                  } flex items-center justify-center shadow-lg z-10`}>
                    <Icon className={`text-${color}-500`} size={24} />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;