'use client';

import Link from 'next/link';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Briefcase, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToSection = () => {
    const element = document.getElementById('about-preview');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-4xl font-bold">TS</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Thihansa Sanjunie
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              CS Undergraduate | Aspiring Software Engineer
            </p>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              I'm a computer science undergraduate with a strong interest in problem-solving and full-stack 
              development using technologies like React, Node.js and Django. As a fast learner, I enjoy exploring new 
              technologies and challenging myself to pick up new skills as I build.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </Link>
              
              <Link 
                href="/projects"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Briefcase size={20} />
                <span>View Projects</span>
              </Link>
            </div>
            
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/thinzas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/thinza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:thinzas921@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button
              onClick={scrollToSection}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating innovative solutions and continuously learning new technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">
                Bachelor of Science in Computer Science<br />
                University of Colombo School of Computing<br />
                <span className="font-semibold">CGPA: 3.44/4.00</span>
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skills</h3>
              <p className="text-gray-600">
                React, Node.js, Django, Python<br />
                JavaScript, PHP, MySQL, MongoDB<br />
                <span className="font-semibold">Full-Stack Development</span>
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600">
                Multiple projects including<br />
                E-commerce platforms, Academic systems<br />
                <span className="font-semibold">Group & Solo Projects</span>
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/about"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
            >
              <span>Learn More About Me</span>
              <ChevronDown className="rotate-[-90deg]" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Some of my recent work and projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MentorMe Project */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">MentorMe</h3>
                <p className="text-gray-600 mb-4">
                  Academic Project Management System tailored for UCSC with task boards, meeting scheduling, and progress tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded">PHP</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded">MySQL</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded">JavaScript</span>
                </div>
              </div>
            </div>
            
            {/* UniRoute Project */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">UniRoute</h3>
                <p className="text-gray-600 mb-4">
                  University guidance system helping Sri Lankan students choose suitable higher education programs based on their profiles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-sm rounded">React</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-sm rounded">Django</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-sm rounded">Python</span>
                </div>
              </div>
            </div>
            
            {/* Trendira Project */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trendira</h3>
                <p className="text-gray-600 mb-4">
                  MERN Stack E-Commerce Platform with shopping cart, payment integration using Stripe and Razorpay.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-sm rounded">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-sm rounded">Node.js</span>
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-sm rounded">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
            >
              <span>View All Projects</span>
              <ChevronDown className="rotate-[-90deg]" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
