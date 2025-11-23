import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote, Linkedin } from 'lucide-react';
import { testimonials, experience } from '../data/portfolio';

const Testimonials = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get company logos from experience
  const companies = experience.filter(exp => exp.type === 'work' || exp.type === 'volunteer');

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-20 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials & Experience</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {testimonials.length > 0 
              ? "What people say about working with me"
              : "Companies and teams I've worked with"
            }
          </p>
        </div>

        {/* Testimonials Carousel (if testimonials exist) */}
        {testimonials.length > 0 ? (
          <div className={`relative ${inView ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-xl p-12 shadow-2xl border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            } relative`}>
              {/* Quote Icon */}
              <Quote className="absolute top-8 left-8 text-blue-500 opacity-20" size={48} />

              {/* Testimonial Content */}
              <div className="text-center max-w-3xl mx-auto relative z-10">
                <p className={`text-xl md:text-2xl mb-8 italic ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } leading-relaxed`}>
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                  {testimonials[currentIndex].image && (
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div className="text-left">
                    <div className="font-bold text-lg flex items-center gap-2">
                      {testimonials[currentIndex].name}
                      {testimonials[currentIndex].linkedin && (
                        <a
                          href={testimonials[currentIndex].linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                    </div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              {testimonials.length > 1 && (
                <>
                  <button
                    onClick={prevTestimonial}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors`}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                      darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors`}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-blue-500 w-8'
                          : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Companies Worked With (placeholder when no testimonials) */
          <div className={`${inView ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            <div className={`${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-xl p-12 shadow-xl border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <h3 className="text-2xl font-bold text-center mb-8">
                Proud to have worked with
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg ${
                      darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                    } w-full text-center hover:scale-105 transition-transform`}
                  >
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {company.company[0]}
                    </div>
                    <div className="font-semibold">{company.company}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {company.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Testimonial Placeholder */}
              <div className={`mt-12 p-6 rounded-lg border-2 border-dashed ${
                darkMode ? 'border-gray-700' : 'border-gray-300'
              } text-center`}>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Testimonials coming soon! Building relationships and gathering feedback.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;