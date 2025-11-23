import React from 'react';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';

const Skills = ({ darkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            My technical toolkit - constantly growing and evolving
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <div
              key={category}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-xl p-8 shadow-xl border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } hover:shadow-2xl transition-all ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                {category}
              </h3>
              <div className="space-y-5">
                {skillList.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-lg">{skill.name}</span>
                      </div>
                      <span
                        className={`text-sm font-semibold ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-3 rounded-full overflow-hidden ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          skill.level >= 80
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                            : skill.level >= 60
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
                            : 'bg-gradient-to-r from-yellow-500 to-orange-600'
                        }`}
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIndex * 100 + skillIndex * 50}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div
          className={`mt-12 text-center ${inView ? 'animate-slide-up delay-300' : 'opacity-0'}`}
        >
          <div className="inline-flex gap-6 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <span className="text-sm">Advanced (80%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-cyan-600"></div>
              <span className="text-sm">Intermediate (60-79%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-yellow-500 to-orange-600"></div>
              <span className="text-sm">Learning (&lt;60%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;