import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const education = [
    {
      degree: 'B.Tech – Computer Science and Engineering',
      institution: 'Indrashil University',
      grade: 'CGPA: 7.68',
      period: '2020 - 2024',
      level: 'Bachelor\'s Degree'
    },
    {
      degree: '12th Grade – Science',
      institution: 'SS Patel School of Science and Commerce',
      grade: '72.62%',
      period: '2018 - 2020',
      level: 'Higher Secondary'
    },
    {
      degree: '10th Grade',
      institution: 'Holy Child School',
      grade: '70%',
      period: '2017 - 2018',
      level: 'Secondary'
    }
  ];

  const getGradeColor = (grade: string) => {
    const numericGrade = parseFloat(grade.replace(/[^\d.]/g, ''));
    if (numericGrade >= 7.5 || numericGrade >= 75) return 'text-green-600';
    if (numericGrade >= 7.0 || numericGrade >= 70) return 'text-blue-600';
    return 'text-orange-600';
  };

  const getGradeDarkColor = (grade: string) => {
    const numericGrade = parseFloat(grade.replace(/[^\d.]/g, ''));
    if (numericGrade >= 7.5 || numericGrade >= 75) return 'text-green-400';
    if (numericGrade >= 7.0 || numericGrade >= 70) return 'text-blue-400';
    return 'text-orange-400';
  };

  return (
    <section
      id="education"
      aria-label="Education background of Shivam Jha frontend developer"
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
            Education
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My academic journey in computer science and the foundation that shaped my development skills.
          </p>

          {/* subtle SEO */}
          <p className="sr-only">
            Computer Science graduate, frontend developer education, BTech in Computer Science, programming background.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative flex items-start">

                {/* DOT */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  isDarkMode ? 'bg-gray-800 border-blue-500' : 'bg-white border-blue-600'
                }`}></div>

                {/* CONTENT */}
                <div className="ml-20 flex-1">
                  <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">

                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex-shrink-0">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isDarkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-800 border border-blue-200'
                            }`}>
                              {item.level}
                            </span>

                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {item.period}
                            </span>
                          </div>

                          <h3 className={`text-xl font-semibold mb-2 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.degree}
                          </h3>

                          <p className={`text-lg mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      {/* GRADE */}
                      <div className="mt-4 lg:mt-0 flex items-center space-x-2">
                        <Award className={`h-5 w-5 ${
                          isDarkMode ? getGradeDarkColor(item.grade) : getGradeColor(item.grade)
                        }`} />
                        <span className={`text-lg font-bold ${
                          isDarkMode ? getGradeDarkColor(item.grade) : getGradeColor(item.grade)
                        }`}>
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-50 text-blue-700'
          }`}>
            <GraduationCap className="h-5 w-5" />
            <span className="font-medium">
              Strong academic base with continuous focus on learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;