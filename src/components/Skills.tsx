import React from 'react';
import { Code2, Database, Server } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'jQuery', 'Bootstrap', 'Tailwind', 'SASS'],
      color: 'blue'
    },
    {
      title: 'Backend (Basics)',
      icon: Server,
      skills: ['Python','Node.js'],
      color: 'purple'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL' , 'MongoDB'],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-600',
          text: 'text-blue-600',
          border: 'border-blue-200',
          bgLight: isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
        };
      case 'purple':
        return {
          bg: 'bg-purple-600',
          text: 'text-purple-600',
          border: 'border-purple-200',
          bgLight: isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50'
        };
      case 'teal':
        return {
          bg: 'bg-teal-600',
          text: 'text-teal-600',
          border: 'border-teal-200',
          bgLight: isDarkMode ? 'bg-teal-900/20' : 'bg-teal-50'
        };
      default:
        return {
          bg: 'bg-gray-600',
          text: 'text-gray-600',
          border: 'border-gray-200',
          bgLight: isDarkMode ? 'bg-gray-900/20' : 'bg-gray-50'
        };
    }
  };

  return (
    <section
      id="skills"
      aria-label="Skills and technologies used by Shivam Jha frontend developer"
      className={`py-20 glass-panel ${
        isDarkMode ? 'bg-slate-950/65 border border-white/10' : 'bg-white/25 border border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I work with a range of tools and technologies to build responsive and reliable web applications.
          </p>

          {/* subtle SEO text (natural, not spammy) */}
          <p className="sr-only">
            Frontend Developer skills including React.js, JavaScript, Tailwind CSS, Node.js, and modern web development tools.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.title}
                className={`p-8 rounded-3xl glass-card transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                  isDarkMode ? 'border-white/10' : 'border-white/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-xl ${colors.bg} mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${
                        colors.bgLight
                      } ${colors.text} ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-16 text-center">
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I keep exploring new tools and improving my skills to stay updated with current web development practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;