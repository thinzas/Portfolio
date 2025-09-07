'use client';

import { GraduationCap, Award, Heart, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';

export default function About() {
  // Photo data - matches actual files in your folders
  const artPhotos = [
    { src: '/interests/arts/art1.png', alt: 'Art piece 1', title: 'My Drawing' },
    { src: '/interests/arts/art2.png', alt: 'Art piece 2', title: 'Sketch Work' },
    // Add more art photos here as needed
  ];

  const dancingPhotos = [
    { src: '/interests/dancing/dance1.JPG', alt: 'Dancing photo 1', title: 'Dance Performance' },
    { src: '/interests/dancing/dance2.jpg', alt: 'Dancing photo 2', title: 'Stage Show' },
    // Add more dancing photos here as needed
  ];

  const graphicDesignPhotos = [
    { src: '/interests/design/design1.jpg', alt: 'Graphic design 1', title: 'Logo Design' },
    { src: '/interests/design/design2.jpg', alt: 'Graphic design 2', title: 'Poster Design' },
    // Add graphic design work here
  ];

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
              About Me
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Passionate Computer Science student with a drive for innovation and continuous learning
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Text */}
            <div className="space-y-6">
              <div className="glass-card-enhanced rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                    <User className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Who I Am</h2>
                </div>
                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p>
                    I'm a computer science undergraduate with a strong interest in problem-solving and full-stack 
                    development using technologies like React, Node.js and Django. As a fast learner, I enjoy exploring new 
                    technologies and challenging myself to pick up new skills as I build.
                  </p>
                  <p>
                    I'm eager to take on a software engineering internship where I can sharpen my skills, gain real-world 
                    experience, and contribute with energy and fresh ideas. My goal is to become a well-rounded software 
                    engineer who can tackle complex problems and create meaningful solutions.
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="glass-card-enhanced rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-400 rounded-xl flex items-center justify-center mr-4">
                    <Heart className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Interests & Hobbies</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PhotoGallery
                    photos={artPhotos}
                    title="Drawing & Art"
                    emoji="🎨"
                  />
                  <PhotoGallery
                    photos={graphicDesignPhotos}
                    title="Graphic Design"
                    emoji="💻"
                  />
                  <PhotoGallery
                    photos={dancingPhotos}
                    title="Dancing"
                    emoji="💃"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Education & Experience */}
            <div className="space-y-6">
              {/* Education */}
              <div className="glass-card-enhanced rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Education</h2>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-400 pl-6">
                    <h3 className="text-lg font-semibold text-white">
                      Bachelor of Science - Computer Science
                    </h3>
                    <p className="text-cyan-300 font-medium">University of Colombo School of Computing</p>
                    <p className="text-blue-200">May 2023 - Present</p>
                    <p className="text-blue-100 mt-2">
                      <span className="font-semibold">CGPA:</span> 3.44/4.00
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-400 pl-6">
                    <h3 className="text-lg font-semibold text-white">
                      Southlands College, Galle
                    </h3>
                    <p className="text-emerald-300 font-medium">2007 - 2020</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-blue-100">
                        <span className="font-semibold">G.C.E. Advanced Level (2021):</span><br />
                        Combined Mathematics: A, Physics: A, Chemistry: B<br />
                        <span className="text-emerald-300 font-semibold">Z-score: 1.833</span>
                      </p>
                      <p className="text-blue-100">
                        <span className="font-semibold">G.C.E. Ordinary Level (2017):</span> 9 A's
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience & Certifications */}
              <div className="glass-card-enhanced rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mr-4">
                    <Award className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Experience & Certifications</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Volunteering */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Volunteering</h3>
                    <div className="border-l-4 border-pink-400 pl-6">
                      <h4 className="font-semibold text-white">Designer at Pahasara Media - UCSC</h4>
                      <p className="text-pink-300">2022 - 2024</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Certifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p className="text-blue-100">Complete Intro to React, v9 by Frontend Masters</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <p className="text-blue-100">Django Essentials - Build and Deploy Real World Apps by Udemy</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <p className="text-blue-100">Postman API Fundamentals Student Expert– Postman</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                        <p className="text-blue-100">Introduction to Cloud 101 by Amazon Web Services Training and Certification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                  </div>
      </section>

      <Footer />
    </div>
  );
}
