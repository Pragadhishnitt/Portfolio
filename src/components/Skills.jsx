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
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 text-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Technical Arsenal<span className="text-accent">.</span></h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto leading-relaxed">
            My constantly evolving toolkit for building digital experiences.
          </p>
        </div>

        {/* Skills Grid - Simple Elegant Layout */}
        <div className={`glass rounded-3xl p-8 md:p-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative flex items-center gap-3 px-5 py-3 rounded-xl bg-surface hover:bg-primary/10 border border-border hover:border-accent/50 transition-all duration-300 ${skill.learning ? 'opacity-70' : ''
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                <span className="font-medium text-primary group-hover:text-accent transition-colors">{skill.name}</span>
                {skill.learning && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold bg-accent/20 text-accent rounded-full">
                    Learning
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add New Skill Note - for you */}
        <p className={`text-center text-sm text-primary-muted mt-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          
        </p>
      </div>
    </section>
  );
};

export default Skills;