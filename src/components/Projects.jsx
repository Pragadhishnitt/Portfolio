import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Play, Code, X, CheckCircle, Wrench, ArrowUpRight } from 'lucide-react';
import { projects, categories } from '../data/portfolio';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status) => {
    const badges = {
      production: { icon: CheckCircle, text: 'Live', color: 'text-green-500 bg-green-500/10' },
      mvp: { icon: CheckCircle, text: 'MVP', color: 'text-blue-500 bg-blue-500/10' },
      building: { icon: Wrench, text: 'Building', color: 'text-yellow-500 bg-yellow-500/10' }
    };
    return badges[status] || badges.production;
  };

  return (
    <section id="projects" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Selected Work<span className="text-accent">.</span></h2>
            <p className="text-lg text-primary-muted max-w-xl">
              A collection of projects that showcase my passion for building.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-primary-muted hover:bg-white/10 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const StatusBadge = getStatusBadge(project.status);
            const StatusIcon = StatusBadge.icon;

            return (
              <div
                key={project.id}
                className={`group glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image/Banner */}
                <div className="relative h-56 overflow-hidden bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-md ${StatusBadge.color}`}>
                    <StatusIcon size={12} />
                    {StatusBadge.text}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white/5 group-hover:scale-110 transition-transform duration-700">
                    {project.name.charAt(0)}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs font-medium text-accent mb-2 uppercase tracking-wider">{project.category}</div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{project.name}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-primary-muted text-sm line-clamp-3 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-primary-muted border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-primary-muted border border-white/5">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-white">{selectedProject.name}</h3>
                    <p className="text-xl text-primary-muted font-light">
                      {selectedProject.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Detailed Description */}
                <div className="text-primary-muted mb-10 text-lg leading-relaxed space-y-4">
                  {selectedProject.detailedDescription.split('\n\n').map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  {selectedProject.features.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-white">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-primary-muted">
                            <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-sm bg-white/5 text-white border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors font-medium flex items-center gap-2 text-white"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                  {selectedProject.links.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-full transition-colors font-medium flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.links.video && (
                    <a
                      href={selectedProject.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-full transition-colors font-medium flex items-center gap-2"
                    >
                      <Play size={20} />
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;