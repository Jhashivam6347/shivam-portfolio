import React from 'react';
import { Award, Calendar, BookOpen } from 'lucide-react';

interface AchievementsProps {
  isDarkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ isDarkMode }) => {
  const achievements = [
    {
      title: 'Machine Learning Internship Training',
      period: 'Apr 2023 – Jun 2023',
      type: 'Internship',
      description: 'Worked on core machine learning concepts and gained hands-on experience with real-world use cases.'
    },
    {
      title: 'Machine Learning – Linear Regression',
      period: 'Jan 2023 – Feb 2023',
      type: 'Certification',
      description: 'Learned how linear regression works and implemented models to understand data patterns.'
    },
    {
      title: 'Data Structures and Algorithms',
      period: 'Jul 2022 – Oct 2022',
      type: 'Course',
      description: 'Covered important data structures and problem-solving techniques used in software development.'
    },
    {
      title: 'Foundational C# with Microsoft',
      period: 'Jul 2024',
      type: 'Certification',
      description: 'Completed a Microsoft-backed course covering the basics of C# and application development.'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Certification':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Course':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeDarkColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-900/30 text-blue-300 border-blue-700';
      case 'Certification':
        return 'bg-green-900/30 text-green-300 border-green-700';
      case 'Course':
        return 'bg-purple-900/30 text-purple-300 border-purple-700';
      default:
        return 'bg-gray-900/30 text-gray-300 border-gray-700';
    }
  };

  return (
    <section
      id="achievements"
      aria-label="Certifications and achievements of Shivam Jha frontend developer"
      className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications & Learning
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A few courses and certifications that helped me strengthen my development and problem-solving skills.
          </p>

          {/* subtle SEO (natural) */}
          <p className="sr-only">
            Frontend developer certifications, machine learning training, data structures and programming courses.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      isDarkMode ? getTypeDarkColor(achievement.type) : getTypeColor(achievement.type)
                    }`}>
                      {achievement.type}
                    </span>
                  </div>

                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.title}
                  </h3>

                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {achievement.period}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-50 text-blue-700'
          }`}>
            <BookOpen className="h-5 w-5" />
            <span className="font-medium">Still learning, still improving</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;