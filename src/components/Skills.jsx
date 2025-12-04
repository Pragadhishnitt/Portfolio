import React from 'react';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`mb-20 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Technical Arsenal<span className="text-accent">.</span></h2>
          <p className="text-lg text-primary-muted max-w-2xl leading-relaxed">
            My constantly evolving toolkit for building digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <div
              key={category}
              className={`glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-accent rounded-full" />
                {category}
              </h3>

              <div className="space-y-6">
                {skillList.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                        <span className="font-medium text-lg text-primary-muted group-hover:text-white transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm font-mono text-accent/80">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500 relative"
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          transitionDelay: `${catIndex * 100 + skillIndex * 50}ms`,
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div
          className={`mt-16 text-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '400ms' }}
        >
          <div className="inline-flex gap-8 px-8 py-4 rounded-full glass">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
              <span className="text-sm text-primary-muted">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500/80"></div>
              <span className="text-sm text-primary-muted">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <span className="text-sm text-primary-muted">Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;