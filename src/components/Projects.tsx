import React from 'react';
import { Briefcase, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const experiences = [
    {
      company: 'Variance Infotech',
      role: 'Frontend Developer',
      period: 'Jan 2025 – Present',
      location: 'India',
      description: 'Working as a frontend developer, building responsive web applications using React, JavaScript, and modern UI frameworks. Focused on performance, clean UI, and user experience.',
      technologies: [ 'HTML', 'CSS', 'JavaScript', 'React' , 'Bootstrap' , 'Tailwind'],
      status: 'current'
    },
    {
      company: 'Sky Productivity',
      role: 'Developer Intern',
      period: 'Jun 2024 – Aug 2024',
      location: 'Remote',
      description: 'Worked on backend development using .NET and C#, building APIs and understanding MVC architecture in real-world projects.',
      technologies: ['.NET', 'C#', 'API', 'MVC'],
      status: 'completed'
    },
    {
      company: 'Brainly Beam',
      role: 'Machine Learning Intern',
      period: 'May 2024 – Jun 2024',
      location: 'Remote',
      description: 'Built a document classification system using Python and machine learning techniques to process and categorize text data.',
      technologies: ['Machine Learning', 'Python', 'Classification'],
      status: 'completed'
    },
    {
      company: 'Adisolution',
      role: 'Web Developer Intern',
      period: 'May 2023 – Jun 2023',
      location: 'Remote',
      description: 'Developed a weather web application using HTML, CSS, JavaScript, PHP, and MySQL with real-time data handling.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      status: 'completed'
    }
  ];

  const projects = [
    {
      title: 'Document Classifier',
      type: 'Machine Learning Project',
      description: 'A machine learning project built with Python that classifies documents based on content. It helped me understand real-world use of NLP and data processing.',
      technologies: ['Python', 'Machine Learning', 'NLP']
    },
    {
      title: 'EduCheck System',
      type: 'Web Application',
      description: 'A web-based system designed for managing educational data. Built using core web technologies with a focus on usability and clean UI.',
      technologies: ['HTML', 'JavaScript', 'CSS' ,'Python']
    },
    {
      title: 'Weather Report',
      type: 'Frontend Web Application',
      description: 'A responsive weather app that shows real-time data using APIs. Built with JavaScript and designed to work smoothly across devices.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Café Management System',
      type: 'Desktop Application',
      description: 'A Java-based application to manage café operations including billing and inventory, connected with a MySQL database.',
      technologies: ['Java', 'MySQL']
    }
  ];

  return (
    <section
      id="projects"
      aria-label="Projects and work experience of Shivam Jha frontend developer"
      className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & Projects
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Some of the work I’ve done during internships and personal projects.
          </p>

          {/* subtle SEO */}
          <p className="sr-only">
            Frontend developer projects using React, JavaScript, web applications, and machine learning projects portfolio.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      experience.status === 'current' ? 'bg-green-600' : 'bg-blue-600'
                    }`}>
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {experience.role}
                      </h4>
                      <p className={`text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {experience.period}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <MapPin className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Highlighted Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h4>
                    <span className={`text-sm ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                      {project.type}
                    </span>
                  </div>
                </div>

                <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;