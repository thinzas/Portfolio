'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Briefcase, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gradientColors: string;
  iconComponent: React.ReactNode;
  image: string;
  images?: string[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "MentorMe",
      description: "Academic Project Management System tailored for UCSC with task boards, meeting scheduling, and progress tracking.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      gradientColors: "from-blue-500 via-blue-600 to-cyan-500",
      iconComponent: <Code size={18} />,
      image: "/projects/mentorme/main.jpg",
      images: [
        "/projects/mentorme/dashboard.jpg",
        "/projects/mentorme/tasks.jpg",
        "/projects/mentorme/analytics.jpg"
      ]
    },
    {
      id: 2,
      title: "UniRoute",
      description: "University guidance system helping Sri Lankan students choose suitable higher education programs based on their profiles.",
      technologies: ["React", "Django", "Python"],
      gradientColors: "from-purple-500 via-purple-600 to-pink-500",
      iconComponent: <GraduationCap size={18} />,
      image: "/projects/uniroute/main.png",
      images: []
    },
    {
      id: 3,
      title: "Trendira",
      description: "MERN Stack E-Commerce Platform with shopping cart, payment integration using Stripe and Razorpay.",
      technologies: ["React", "Node.js", "MongoDB"],
      gradientColors: "from-green-500 via-emerald-600 to-teal-500",
      iconComponent: <Briefcase size={18} />,
      image: "/projects/trendira/main.png",
      images: [
        "/projects/trendira/products.png",
        "/projects/trendira/cart.png",
        "/projects/trendira/checkout.png"
      ]
    }
  ];

  const scrollToSection = () => {
    const element = document.getElementById('about-preview');
    element?.scrollIntoView({ behavior: 'smooth' });
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
      <section className="pt-16 min-h-screen flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-50 h-50 mx-auto rounded-full overflow-hidden mb-6 glass-card-enhanced p-2 float">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-600 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Thihansa Sanjunie"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 items-center justify-center hidden">
                    <span className="text-white text-4xl font-bold">TS</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
              Thihansa Sanjunie
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
              CS Undergraduate | Aspiring Software Engineer
            </p>
            
            <div className="glass-card-enhanced rounded-2xl p-8 max-w-4xl mx-auto mb-12">
              <p className="text-lg text-white leading-relaxed">
                I'm a computer science undergraduate with a strong interest in problem-solving and full-stack 
                development using technologies like React, Node.js and Django. As a fast learner, I enjoy exploring new 
                technologies and challenging myself to pick up new skills as I build.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 glow-blue font-semibold"
              >
                <Mail size={22} />
                <span>Get In Touch</span>
              </Link>
              
              <Link 
                href="/projects"
                className="btn-glass text-white px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 font-semibold"
              >
                <Briefcase size={22} />
                <span>View Projects</span>
              </Link>
            </div>
            
            <div className="flex justify-center space-x-8 mt-10">
              <a
                href="https://github.com/thinzas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110 p-3 glass rounded-full"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/thinza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110 p-3 glass rounded-full"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:thinzas921@gmail.com"
                className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110 p-3 glass rounded-full"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button
              onClick={scrollToSection}
              className="text-white hover:text-blue-300 transition-all duration-300 animate-bounce p-4 glass rounded-full transform hover:scale-110"
            >
              <ChevronDown size={36} />
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Passionate about creating innovative solutions and continuously learning new technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card-enhanced rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 glow-blue">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <p className="text-blue-100 leading-relaxed">
                Bachelor of Science in Computer Science<br />
                University of Colombo School of Computing<br />
                <span className="font-semibold text-cyan-300">CGPA: 3.44/4.00</span>
              </p>
            </div>
            
            <div className="glass-card-enhanced rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 glow-purple">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
              <p className="text-blue-100 leading-relaxed">
                React, Node.js, Django, Python<br />
                JavaScript, PHP, MySQL, MongoDB<br />
                <span className="font-semibold text-pink-300">Full-Stack Development</span>
              </p>
            </div>
            
            <div className="glass-card-enhanced rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 glow-pink">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
              <p className="text-blue-100 leading-relaxed">
                Multiple projects including<br />
                E-commerce platforms, Academic systems<br />
                <span className="font-semibold text-teal-300">Group & Solo Projects</span>
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/about"
              className="inline-flex items-center space-x-3 btn-glass text-white hover:text-blue-300 font-semibold transition-all duration-300 px-8 py-4 rounded-2xl transform hover:scale-105"
            >
              <span>Learn More About Me</span>
              <ChevronDown className="rotate-[-90deg]" size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/20 to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-blue-100">
              Some of my recent work and projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="glass-card-enhanced rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className={`h-48 bg-gradient-to-br ${project.gradientColors} relative overflow-hidden cursor-pointer`} onClick={() => {
                  setSelectedProject(project);
                  setSelectedImageIndex(-1); // Start with main image
                }}>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      {project.iconComponent}
                    </div>
                  </div>
                  {project.images && project.images.length > 0 && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      +{project.images.length} photos
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/30 text-blue-200 text-sm rounded-full border border-blue-400/30">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-flex items-center space-x-3 btn-glass text-white hover:text-blue-300 font-semibold transition-all duration-300 px-8 py-4 rounded-2xl transform hover:scale-105"
            >
              <span>View All Projects</span>
              <ChevronDown className="rotate-[-90deg]" size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white hover:text-red-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Main Image Display */}
            <div className="mb-4 bg-black/20 rounded-xl p-2">
              <img
                src={selectedImageIndex === -1 || !selectedProject.images || selectedProject.images.length === 0
                  ? selectedProject.image
                  : selectedProject.images[selectedImageIndex]
                }
                alt={`${selectedProject.title} - Image ${selectedImageIndex + 1}`}
                className="w-full h-64 md:h-96 object-contain rounded-xl"
                onError={(e) => {
                  console.error('Failed to load gallery image');
                  e.currentTarget.src = selectedProject.image;
                }}
              />
            </div>

            {/* Image Thumbnails */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mb-4">
                <div
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === -1 ? 'border-blue-400' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImageIndex(-1)}
                >
                  <img
                    src={selectedProject.image}
                    alt="Main"
                    className="w-full h-16 object-cover"
                  />
                </div>
                {selectedProject.images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? 'border-blue-400' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-16 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Project Description */}
            <div className="text-blue-100">
              <p className="mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
