import React from 'react';
import { ChevronDown, Mail, Phone, Download } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-[50px] sm:pt-0 relative  bg-[url('/Mobile_Banner_image.jpg')] sm:bg-[url('/Banner_image.webp')] bg-cover  sm:bg-left-center"
      aria-label="Shivam Jha Frontend Developer Portfolio"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">

          {/* MAIN KEYWORD HEADING */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-white'
          }`}>
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Shivam Jha
            </span>
          </h1>

          {/* HIGH-RANK KEYWORDS */}
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Frontend Developer | React JS Developer | JavaScript Developer | Web Developer India
          </h2>

          {/* SEO DESCRIPTION */}
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-white'
          }`}>
            I am Shivam Jha, a Frontend Developer based in India specializing in React.js, JavaScript, and modern web development. 
            I build fast, scalable, and SEO-friendly web applications for startups and businesses.
          </p>

          {/* HIDDEN SEO BOOST */}
          <p className="sr-only">
            Shivam Jha Frontend Developer India, React Developer Portfolio, Hire Web Developer India, 
            Freelance Frontend Developer, JavaScript Expert Developer Portfolio
          </p>

          {/* CONTACT */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center space-x-6">
              <a
                href="mailto:jhashivam3003@gmail.com"
                aria-label="Email Shivam Jha Frontend Developer"
                className={`flex items-center space-x-2 ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-white hover:text-blue-600'
                } transition-colors duration-200`}
              >
                <Mail className="h-5 w-5" />
                <span>jhashivam3003@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="tel:+916355278751"
                aria-label="Call Shivam Jha Frontend Developer"
                className={`flex items-center space-x-2 ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-200`}
              >
                <Phone className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-white'}`} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-white'}>
                  +91 6355278751
                </span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/Shivam-Resume.pdf"
              download="Shivam_Jha_Resume.pdf"
              aria-label="Download Shivam Jha Frontend Developer Resume"
              className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={scrollToNext}
              aria-label="Learn more about Shivam Jha"
              className={`flex items-center space-x-2 border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-white hover:bg-transparent'
              }`}
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
        } transition-colors duration-200`}
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;