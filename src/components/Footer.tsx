import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Jhashivam6347/',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://in.linkedin.com/in/shivam-jha-892989223',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:jhashivam3003@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${
      isDarkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <button
              onClick={scrollToTop}
              className={`text-2xl font-bold transition-colors duration-200 hover:text-blue-600 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Shivam Jha
            </button>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-200 transform hover:scale-110 ${
                    isDarkMode 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  } ${link.color}`}
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className={`w-full max-w-md h-px ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>

          {/* Copyright */}
          <div className="text-center">
            <p className={`text-sm flex items-center justify-center space-x-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>&copy; {new Date().getFullYear()} Shivam Jha. All rights reserved.</span>
            </p>
            <p className={`text-xs mt-2 flex items-center justify-center space-x-1 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              
              
              
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;