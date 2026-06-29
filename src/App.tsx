import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Update theme in localStorage and document class
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ FIXED: Close menu logic (no instant closing bug)
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      // Ignore clicks on menu button
      if (target.closest('[data-menu-button]')) return;

      // Ignore clicks inside header
      if (target.closest('header')) return;

      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Hero isDarkMode={isDarkMode} />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-background-drift" />
          <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-background-drift delay-200" />
          <div className="absolute left-1/2 bottom-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl animate-background-drift delay-400" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.08),_transparent_30%)]" />
        </div>

        <div className="relative">
          <About isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
           <Achievements isDarkMode={isDarkMode} />
          <Education isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
          <ChatBot isDarkMode={isDarkMode} />
        </div>
      </main>
      {isLoading && <SplashScreen />}
    </div>
  );
}

export default App;