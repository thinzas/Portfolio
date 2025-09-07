'use client';

import { useState, useEffect } from 'react';
import { Code, Database, Cloud, Palette, Users, Settings, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SkillsData {
  [category: string]: string[];
}

export default function Skills() {
  const [skills, setSkills] = useState<SkillsData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/skills`);
        if (response.ok) {
          const data = await response.json();
          setSkills(data);
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
        // Fallback data if API is not available
        setSkills({
          "Programming Languages": ["Java", "C", "C++", "Python", "PHP", "JavaScript"],
          "Front-end Development": ["React", "Tailwind"],
          "Back-end Development": ["Django", "Node.js"],
          "Databases": ["MySQL", "MongoDB"],
          "Cloud Technologies": ["AWS"],
          "Other Tools & Technologies": ["Git", "Linux", "Figma", "Jira"],
          "Soft Skills": ["Problem-solving", "Analytical Thinking", "Collaboration", "Adaptability", "Communication"],
          "Software Practices": ["Agile", "SDLC"]
        });
      }
      setLoading(false);
    };

    fetchSkills();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return <Code className="text-blue-400" size={24} />;
      case 'front-end development':
        return <Palette className="text-purple-400" size={24} />;
      case 'back-end development':
        return <Settings className="text-green-400" size={24} />;
      case 'databases':
        return <Database className="text-orange-400" size={24} />;
      case 'cloud technologies':
        return <Cloud className="text-sky-400" size={24} />;
      case 'soft skills':
        return <Users className="text-pink-400" size={24} />;
      default:
        return <Lightbulb className="text-yellow-400" size={24} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return 'from-blue-500/20 to-blue-600/20 border-blue-400/30';
      case 'front-end development':
        return 'from-purple-500/20 to-purple-600/20 border-purple-400/30';
      case 'back-end development':
        return 'from-green-500/20 to-green-600/20 border-green-400/30';
      case 'databases':
        return 'from-orange-500/20 to-orange-600/20 border-orange-400/30';
      case 'cloud technologies':
        return 'from-sky-500/20 to-sky-600/20 border-sky-400/30';
      case 'soft skills':
        return 'from-pink-500/20 to-pink-600/20 border-pink-400/30';
      default:
        return 'from-yellow-500/20 to-yellow-600/20 border-yellow-400/30';
    }
  };

  const getSkillColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return 'bg-blue-400/30 text-blue-200 border-blue-400/40';
      case 'front-end development':
        return 'bg-purple-400/30 text-purple-200 border-purple-400/40';
      case 'back-end development':
        return 'bg-green-400/30 text-green-200 border-green-400/40';
      case 'databases':
        return 'bg-orange-400/30 text-orange-200 border-orange-400/40';
      case 'cloud technologies':
        return 'bg-sky-400/30 text-sky-200 border-sky-400/40';
      case 'soft skills':
        return 'bg-pink-400/30 text-pink-200 border-pink-400/40';
      default:
        return 'bg-yellow-400/30 text-yellow-200 border-yellow-400/40';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
          <p className="mt-4 text-blue-100">Loading skills...</p>
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
              My Skills
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and technologies 
              that I use to bring ideas to life
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className={`glass-card-enhanced bg-gradient-to-br ${getCategoryColor(category)} border rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                    {getCategoryIcon(category)}
                  </div>
                  <h2 className="text-xl font-bold text-white">{category}</h2>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 rounded-xl border font-medium text-sm ${getSkillColor(category)} hover:scale-105 transition-transform duration-200 backdrop-blur-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Overview */}
          <div className="mt-16 glass-card-enhanced rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Skills Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 glass bg-blue-500/20 border border-blue-400/30 rounded-xl">
                <div className="text-3xl font-bold text-blue-300 mb-2">
                  {skills["Programming Languages"]?.length || 0}
                </div>
                <p className="text-blue-100">Programming Languages</p>
              </div>
              <div className="p-4 glass bg-purple-500/20 border border-purple-400/30 rounded-xl">
                <div className="text-3xl font-bold text-purple-300 mb-2">
                  {(skills["Front-end Development"]?.length || 0) + (skills["Back-end Development"]?.length || 0)}
                </div>
                <p className="text-purple-100">Development Frameworks</p>
              </div>
              <div className="p-4 glass bg-green-500/20 border border-green-400/30 rounded-xl">
                <div className="text-3xl font-bold text-green-300 mb-2">
                  {(skills["Databases"]?.length || 0) + (skills["Cloud Technologies"]?.length || 0)}
                </div>
                <p className="text-green-100">Database & Cloud</p>
              </div>
              <div className="p-4 glass bg-pink-500/20 border border-pink-400/30 rounded-xl">
                <div className="text-3xl font-bold text-pink-300 mb-2">
                  {skills["Soft Skills"]?.length || 0}
                </div>
                <p className="text-pink-100">Soft Skills</p>
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-12 glass-card-enhanced bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-400/30 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Continuous Learning</h2>
              <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
                As a fast learner with a passion for technology, I'm constantly exploring new frameworks, 
                tools, and methodologies. I believe in staying current with industry trends and 
                continuously expanding my skill set to tackle new challenges and opportunities.
              </p>
            </div>
          </div>

          {/* Current Focus */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card-enhanced rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Lightbulb className="text-yellow-400 mr-2" size={20} />
                Currently Learning
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-100">Advanced React Patterns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-100">Docker & Containerization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-100">TypeScript Advanced Features</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card-enhanced rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Settings className="text-blue-400 mr-2" size={20} />
                Next Goals
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-orange-100">Microservices Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-100">DevOps & CI/CD</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-pink-100">Machine Learning Basics</span>
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
