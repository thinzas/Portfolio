import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="bg-gradient-to-b from-purple-900 via-purple-950 to-black backdrop-blur-lg rounded-t-3xl border-t border-white/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-400/30">
                    <Mail size={16} className="text-blue-400" />
                  </div>
                  <a href="mailto:thinzas921@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    thinzas921@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-400/30">
                    <Phone size={16} className="text-green-400" />
                  </div>
                  <a href="tel:+94703901232" className="text-white hover:text-green-400 transition-colors">
                    +94 70 390 1232
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-white hover:text-purple-400 transition-all duration-300 hover:translate-x-2">
                  About Me
                </Link>
                <Link href="/projects" className="block text-white hover:text-purple-400 transition-all duration-300 hover:translate-x-2">
                  Projects
                </Link>
                <Link href="/skills" className="block text-white hover:text-purple-400 transition-all duration-300 hover:translate-x-2">
                  Skills
                </Link>
                <Link href="/contact" className="block text-white hover:text-purple-400 transition-all duration-300 hover:translate-x-2">
                  Contact
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Connect with Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/thinzas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 glow-blue"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/thinza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 glow-purple"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="mailto:thinzas921@gmail.com"
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 glow-pink"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">
              © {new Date().getFullYear()} Thihansa Sanjunie. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
