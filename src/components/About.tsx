import React from 'react';
import { User, Target, Code } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      aria-label="About Shivam Jha Frontend Developer"
      className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Shivam Jha – Frontend Developer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* WHO I AM */}
            <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Who I Am
                </h3>
              </div>

              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I am Shivam Jha, a passionate Frontend Developer from India with expertise in HTML, CSS, JavaScript, and React.js. 
                I build modern, responsive, and SEO-friendly web applications that deliver high performance and great user experience. 
                I also have working knowledge of Angular, backend technologies like Java, Python, and databases such as MySQL.
              </p>
            </div>

            {/* OBJECTIVE */}
            <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  My Objective
                </h3>
              </div>

              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My goal is to work as a Frontend or Full Stack Developer where I can apply my skills in React.js, 
                JavaScript, and web development to build scalable and innovative digital solutions while continuously learning and growing.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
            isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-teal-600 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                What I Do
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`text-center p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Projects
                </div>
              </div>

              <div className={`text-center p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="text-2xl font-bold text-purple-600 mb-1">4+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Internships
                </div>
              </div>
            </div>
            
            <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I specialize in frontend development using React.js and modern JavaScript frameworks. 
              I create fast, responsive, and user-friendly web applications optimized for performance and SEO. 
              I also work on full-stack development, making me capable of handling end-to-end project development.
            </p>

            {/* HIDDEN SEO BOOST */}
            <p className="sr-only">
              Hire Frontend Developer India, React Developer Portfolio, JavaScript Developer India, 
              Freelance Web Developer India, Full Stack Developer Portfolio Shivam Jha
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;