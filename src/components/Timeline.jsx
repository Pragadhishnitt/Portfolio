import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Users, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/portfolio';

const Timeline = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (type) => {
    switch (type) {
      case 'work': return Briefcase;
      case 'education': return GraduationCap;
      case 'volunteer': return Users;
      default: return Briefcase;
    }
  };

  return (
    <section id="timeline" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`mb-20 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Experience<span className="text-accent">.</span></h2>
          <p className="text-lg text-primary-muted max-w-2xl leading-relaxed">
            My professional journey and academic milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border ml-6 md:ml-12 space-y-16">
          {experience.map((item, index) => {
            const Icon = getIcon(item.type);

            return (
              <div
                key={item.id}
                className={`relative pl-12 md:pl-16 ${inView ? 'animate-slide-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-[-5px] top-0 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />

                <div className="glass p-8 rounded-2xl hover:bg-surface transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{item.role}</h3>
                      <div className="text-primary-muted font-medium">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-primary-muted gap-1">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-accent" />
                        {item.startDate} - {item.current ? 'Present' : item.endDate}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-accent" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-primary-muted mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs bg-surface text-primary-muted border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
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