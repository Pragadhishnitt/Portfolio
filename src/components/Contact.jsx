import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Phone, ArrowRight } from 'lucide-react';
import { profile } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Using Formspree (free service) - replace with your Formspree endpoint
      // Sign up at https://formspree.io/ and get your form endpoint
      const response = await fetch('https://formspree.io/f/mlgdqonv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please email me directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-20 text-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let's Connect<span className="text-accent">.</span></h2>
          <p className="text-lg text-primary-muted max-w-2xl mx-auto leading-relaxed">
            Have an idea or project in mind or want to discuss opportunities? <br></br>
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`space-y-10 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
              <p className="text-primary-muted text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-6 p-6 rounded-2xl glass hover:bg-surface transition-all group"
              >
                <div className="p-4 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-primary mb-1">Email</div>
                  <div className="text-primary-muted group-hover:text-accent transition-colors">
                    {profile.email}
                  </div>
                </div>
                <ArrowRight className="ml-auto text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
              </a>

              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-6 p-6 rounded-2xl glass hover:bg-surface transition-all group"
                >
                  <div className="p-4 bg-green-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1">Phone</div>
                    <div className="text-primary-muted group-hover:text-accent transition-colors">
                      {profile.phone}
                    </div>
                  </div>
                  <ArrowRight className="ml-auto text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                </a>
              )}

              <div className="flex items-center gap-6 p-6 rounded-2xl glass">
                <div className="p-4 bg-purple-500/10 rounded-xl">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-primary mb-1">Location</div>
                  <div className="text-primary-muted">
                    {profile.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            {profile.available && (
              <div className="p-6 rounded-2xl border border-green-500/20 bg-green-100 dark:bg-green-500/5">
                <div className="flex items-center gap-3 text-green-700 dark:text-green-400 font-semibold mb-2">
                  <div className="w-2.5 h-2.5 bg-green-600 dark:bg-green-500 rounded-full animate-pulse"></div>
                  Currently Available
                </div>
                <p className="text-sm text-green-700/80 dark:text-green-400/80">
                  {profile.availableMessage}
                </p>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-10 border border-border"
            >
              <h3 className="text-2xl font-bold mb-8 text-primary">Send a Message</h3>

              {status.message && (
                <div
                  className={`mb-8 p-4 rounded-xl flex items-start gap-3 ${status.type === 'success'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-primary-muted">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-surface border border-border text-primary placeholder-gray-300 dark:placeholder-primary/20 placeholder:font-light focus:outline-none focus:border-accent focus:bg-primary/5 transition-all"
                    placeholder="Pragadhish"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary-muted">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-surface border border-border text-primary placeholder-gray-300 dark:placeholder-primary/20 placeholder:font-light focus:outline-none focus:border-accent focus:bg-primary/5 transition-all"
                    placeholder="pragadhish@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-primary-muted">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-surface border border-border text-primary placeholder-gray-300 dark:placeholder-primary/20 placeholder:font-light focus:outline-none focus:border-accent focus:bg-primary/5 transition-all"
                    placeholder="Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary-muted">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-surface border border-border text-primary placeholder-gray-300 dark:placeholder-primary/20 placeholder:font-light focus:outline-none focus:border-accent focus:bg-primary/5 transition-all resize-none"
                    placeholder="Hi Pragadhish, I'd like to discuss a project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-primary text-background hover:bg-background hover:text-primary border border-transparent hover:border-primary rounded-xl transition-all font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;