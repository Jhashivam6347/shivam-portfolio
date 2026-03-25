import React from 'react';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import resume from '/Shivam-Resume.pdf';
interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, isMenuOpen, toggleMenu }) => {
  const navItems = ['About', 'Skills', 'Achievements', 'Projects', 'Education'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); // Close mobile menu after clicking
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
    } backdrop-blur-md border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'}`}>
              Shivam Jha
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a
  href={resume}
  download
  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 w-fit"
>
  <Download className="h-4 w-4" />
  <span>Resume</span>
</a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="/Shivam-Resume.pdf"
                download="Shivam_Jha_Resume.pdf"
                
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 w-fit"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;