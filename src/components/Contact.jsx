import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';

const Contact = ({ darkMode }) => {
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
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
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
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 leading-relaxed`}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels:
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className={`flex items-center gap-4 p-5 rounded-xl transition-all ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-white hover:bg-gray-50'
                } border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } shadow-lg hover:shadow-xl transform hover:-translate-y-1 group`}
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {profile.email}
                  </div>
                </div>
              </a>

              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className={`flex items-center gap-4 p-5 rounded-xl transition-all ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50'
                  } border ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  } shadow-lg hover:shadow-xl transform hover:-translate-y-1 group`}
                >
                  <div className="p-3 bg-green-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="text-green-500" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div
                      className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {profile.phone}
                    </div>
                  </div>
                </a>
              )}

              <div
                className={`flex items-center gap-4 p-5 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } shadow-lg`}
              >
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin className="text-purple-500" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {profile.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            {profile.available && (
              <div
                className={`p-5 rounded-xl border-2 ${
                  darkMode
                    ? 'bg-green-900/20 border-green-500/50'
                    : 'bg-green-50 border-green-500'
                }`}
              >
                <div className="flex items-center gap-2 text-green-500 font-semibold mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  Currently Available
                </div>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-green-400' : 'text-green-700'
                  }`}
                >
                  {profile.availableMessage}
                </p>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <form
              onSubmit={handleSubmit}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-xl p-8 shadow-xl border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {status.message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                    status.type === 'success'
                      ? darkMode
                        ? 'bg-green-900/30 text-green-400'
                        : 'bg-green-100 text-green-700'
                      : darkMode
                      ? 'bg-red-900/30 text-red-400'
                      : 'bg-red-100 text-red-700'
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

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block mb-2 font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Project inquiry / Collaboration / etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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

              <p className={`mt-4 text-xs text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                Or email me directly at <a href={`mailto:${profile.email}`} className="text-blue-500 hover:underline">{profile.email}</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;