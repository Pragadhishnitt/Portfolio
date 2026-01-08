import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote, Linkedin } from 'lucide-react';
import { testimonials, experience } from '../data/portfolio';

const Testimonials = () => {
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
      }, 6000);
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
    <section id="testimonials" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-20 text-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Endorsements<span className="text-accent">.</span></h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto leading-relaxed">
            {testimonials.length > 0
              ? "Words from those I've had the pleasure of working with."
              : "Companies and teams I've collaborated with."
            }
          </p>
        </div>

        {/* Testimonials Carousel (if testimonials exist) */}
        {testimonials.length > 0 ? (
          <div className={`relative max-w-4xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            <div className="glass rounded-3xl p-12 md:p-16 relative">
              {/* Quote Icon */}
              <Quote className="absolute top-8 left-8 text-accent opacity-20" size={64} />

              {/* Testimonial Content */}
              <div className="text-center relative z-10">
                <p className="text-xl md:text-2xl mb-10 font-light text-primary leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center gap-4">
                  {testimonials[currentIndex].image && (
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent/50"
                    />
                  )}
                  <div>
                    <div className="font-bold text-lg text-primary flex items-center justify-center gap-2">
                      {testimonials[currentIndex].name}
                      {testimonials[currentIndex].linkedin && (
                        <a
                          href={testimonials[currentIndex].linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-primary transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                    <div className="text-primary-muted text-sm">
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface hover:bg-primary/10 text-primary transition-colors backdrop-blur-sm"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface hover:bg-primary/10 text-primary transition-colors backdrop-blur-sm"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-10">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'bg-accent w-8'
                        : 'bg-primary/20 w-2 hover:bg-primary/40'
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
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            <div className="glass rounded-3xl p-12 border border-border">
              <h3 className="text-2xl font-bold text-center mb-12 text-primary">
                Proud to have worked with
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="group text-center transition-transform hover:scale-105"
                  >
                    <div className="text-5xl font-bold mb-3 text-primary/20 group-hover:text-accent transition-colors duration-300">
                      {company.company[0]}
                    </div>
                    <div className="font-semibold text-primary mb-1">{company.company}</div>
                    <div className="text-xs text-primary-muted uppercase tracking-wider">
                      {company.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Testimonial Placeholder */}
              <div className="mt-16 p-8 rounded-2xl border border-dashed border-border text-center bg-surface">
                <p className="text-primary-muted">
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