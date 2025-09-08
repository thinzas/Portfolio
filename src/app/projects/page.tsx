'use client';

import { useState, useEffect } from 'react';
import { Github, Calendar, Users, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  type: string;
  githubUrl: string;
  image: string;
  images?: string[]; // Array of additional images
  status?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/projects`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data if API is not available
        setProjects([
          {
            id: 1,
            title: "MentorMe - Academic Project Management System",
            description: "Developed a group project management system tailored to the unique academic workflow at the University of Colombo School of Computing (UCSC). It offers features like task boards, meeting scheduling, progress tracking, feedback channels, and analytics — all tailored to academic needs.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            year: "2024",
            type: "Group Project",
            githubUrl: "https://github.com/kalpasuraweera/MentorMe",
            image: "/projects/mentorme/main.jpg",
            images: [
              "/projects/mentorme/dashboard.jpg",
              "/projects/mentorme/tasks.jpg",
              "/projects/mentorme/analytics.jpg"
            ]
          },
          {
            id: 2,
            title: "UniRoute - University Guide System",
            description: "Developing a system that guides Sri Lankan students towards suitable higher education programs and career pathways based on their academic subjects, Z-scores, and personal aspirations. It provides personalized guidance, program details, and decision support tools.",
            technologies: ["React JS", "Django", "Python", "MySQL"],
            year: "2025",
            type: "Group Project",
            githubUrl: "https://github.com/nalantishantha/UniRoute",
            image: "/projects/uniroute/main.png",
            images: [],
            status: "ongoing"
          },
          {
            id: 3,
            title: "Trendira - MERN Stack E-Commerce Platform",
            description: "Developed a web application that enables users to browse products, manage carts, and complete purchases in a dynamic shopping environment featuring support for both Stripe and Razorpay payment gateways for seamless transactions.",
            technologies: ["React JS", "MongoDB", "Express", "Node JS", "Stripe"],
            year: "2025",
            type: "Solo Project",
            githubUrl: "https://github.com/thinzas/Trendira",
            image: "/projects/trendira/main.png",
            images: [
              "/projects/trendira/products.png",
              "/projects/trendira/cart.png",
              "/projects/trendira/checkout.png"
            ]
          }
        ]);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const getProjectColor = (index: number) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-green-500 to-green-600',
      'from-red-500 to-red-600',
      'from-yellow-500 to-yellow-600',
      'from-pink-500 to-pink-600'
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
          <p className="mt-4 text-blue-100">Loading projects...</p>
        </div>
      </div>
    );
  }

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
              My Projects
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, 
              problem-solving, and innovative thinking
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="glass-card-enhanced rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                {/* Project Image/Header */}
                <div className="h-48 relative overflow-hidden cursor-pointer" onClick={() => {
                  setSelectedProject(project);
                  setSelectedImageIndex(-1); // Start with main image
                }}>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.error('Failed to load image:', project.image);
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoad={() => console.log('Image loaded successfully:', project.image)}
                    />
                  )}
                  {!project.image && (
                    <div className={`w-full h-full bg-gradient-to-br ${getProjectColor(index)}`}></div>
                  )}
                  {project.status === 'ongoing' && (
                    <div className="absolute top-4 right-4 bg-yellow-400/90 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      Ongoing
                    </div>
                  )}
                  {project.images && project.images.length > 0 && (
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      +{project.images.length} photos
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold text-center px-4 drop-shadow-lg">
                      {project.title.split(' - ')[0]}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-sm text-blue-200">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-blue-200">
                      {project.type === 'Group Project' ? <Users size={16} /> : <User size={16} />}
                      <span>{project.type}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-blue-100 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        console.log('GitHub URL clicked:', project.githubUrl);
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex-1 justify-center transform hover:scale-105"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </button>
                    {/* <button className="flex items-center space-x-2 btn-glass text-white px-4 py-2 rounded-xl transition-all duration-300 flex-1 justify-center transform hover:scale-105">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="mt-16 glass-card-enhanced rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="glass rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-300 mb-2">{projects.length}</div>
                <p className="text-blue-100">Total Projects</p>
              </div>
              <div className="glass rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-300 mb-2">
                  {projects.filter(p => p.type === 'Group Project').length}
                </div>
                <p className="text-blue-100">Group Projects</p>
              </div>
              <div className="glass rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-green-300 mb-2">
                  {projects.filter(p => p.type === 'Solo Project').length}
                </div>
                <p className="text-blue-100">Solo Projects</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="glass-card-enhanced rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Interested in Collaborating?</h2>
              <p className="text-blue-100 mb-6">
                I&apos;m always open to working on new and exciting projects. Let&apos;s create something amazing together!
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow-blue"
              >
                Get In Touch
              </a>
            </div>
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
