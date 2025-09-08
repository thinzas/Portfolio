'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again or contact me directly via email.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              I&apos;m always interested in new opportunities, collaborations, and conversations. 
              Let&apos;s connect and explore how we can work together!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card-enhanced rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-2xl flex items-center justify-center border border-blue-400/30">
                      <Mail className="text-blue-300" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <a href="mailto:thinzas921@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                        thinzas921@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/30 rounded-2xl flex items-center justify-center border border-green-400/30">
                      <Phone className="text-green-300" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <a href="tel:+94703901232" className="text-green-300 hover:text-green-200 transition-colors">
                        +94 70 390 1232
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/30 rounded-2xl flex items-center justify-center border border-purple-400/30">
                      <MapPin className="text-purple-300" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-purple-200">Colombo, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card-enhanced rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
                
                <div className="space-y-4">
                  <a
                    href="https://github.com/thinzas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <Github className="text-white" size={24} />
                    <div>
                      <h3 className="font-semibold text-white">GitHub</h3>
                      <p className="text-gray-300">github.com/thinzas</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/thinza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    <Linkedin className="text-blue-300" size={24} />
                    <div>
                      <h3 className="font-semibold text-white">LinkedIn</h3>
                      <p className="text-blue-200">linkedin.com/in/thinza</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card-enhanced bg-gradient-to-r from-green-500/30 to-green-600/30 border border-green-400/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Availability</h2>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-white">Available for internships and collaborations</span>
                </div>
                <p className="text-green-100">
                  I&apos;m actively seeking software engineering internship opportunities and 
                  am open to freelance projects and collaborations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card-enhanced rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
              
              {success ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your message. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors duration-300 text-white placeholder-gray-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors duration-300 text-white placeholder-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors duration-300 text-white placeholder-gray-300"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    ></textarea>
                  </div>
                  
                  <div className="text-sm text-blue-200/80 bg-blue-500/10 border border-blue-400/20 rounded-lg p-3">
                    <p className="flex items-center mb-1">
                      <Mail className="mr-2 flex-shrink-0" size={16} />
                      Your message will be sent directly to my email for faster response times.
                    </p>
                    <p className="text-xs text-blue-200/60">
                      I respect your privacy and will only use your email to respond to your message.
                    </p>
                  </div>
                  
                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                      <p className="text-red-200">{error}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, an internship opportunity, or just want to connect, 
                I&apos;d love to hear from you. Let&apos;s turn ideas into reality!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:thinzas921@gmail.com"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>
                <a
                  href="tel:+94703901232"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
