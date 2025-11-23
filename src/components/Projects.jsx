import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Play, Code, X, CheckCircle, Clock, Wrench } from 'lucide-react';
import { projects, categories } from '../data/portfolio';

const Projects = ({ darkMode }) => {
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
      production: {
        icon: CheckCircle,
        text: 'Production',
        color: 'green'
      },
      mvp: {
        icon: CheckCircle,
        text: 'MVP',
        color: 'blue'
      },
      building: {
        icon: Wrench,
        text: 'Building',
        color: 'yellow'
      }
    };
    return badges[status] || badges.production;
  };

  return (
    <section id="projects" ref={ref} className={`py-20 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Real-world projects solving real problems. Filter by technology to see what I've built.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap gap-3 justify-center mb-12 ${
            inView ? 'animate-slide-up delay-100' : 'opacity-0'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all font-medium ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const StatusBadge = getStatusBadge(project.status);
            const StatusIcon = StatusBadge.icon;

            return (
              <div
                key={project.id}
                className={`group ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image/Banner */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 bg-${StatusBadge.color}-500 text-white shadow-lg`}>
                    <StatusIcon size={14} />
                    {StatusBadge.text}
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-yellow-500 text-black shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Project Initial/Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-30">
                    {project.name.charAt(0)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <div className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                    darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} italic`}>
                    {project.tagline}
                  </p>

                  <p
                    className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    } mb-4 text-sm line-clamp-3`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 rounded text-xs ${
                          darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Metrics (if available) */}
                  {project.metrics && Object.keys(project.metrics).length > 0 && (
                    <div className={`mb-4 p-3 rounded-lg ${
                      darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                    }`}>
                      {Object.entries(project.metrics).map(([key, value]) => value && (
                        <div key={key} className="text-xs mb-1">
                          <span className="font-semibold">{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-1"
                    >
                      <Code size={16} />
                      Details
                    </button>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
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
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.name}</h3>
                    <p className={`text-lg italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {selectedProject.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 text-3xl p-2"
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* Detailed Description */}
                <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 prose max-w-none`}>
                  {selectedProject.detailedDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4">{para.trim()}</p>
                  ))}
                </div>

                {/* Features */}
                {selectedProject.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-gray-700">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-center font-medium flex items-center justify-center gap-2"
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
                      className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center font-medium flex items-center justify-center gap-2"
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
                      className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-center font-medium flex items-center justify-center gap-2"
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