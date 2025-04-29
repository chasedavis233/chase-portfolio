import React, { useRef } from 'react';
import resumeData from '../../data/resumeData';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        {/* === Education Section FIRST === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>

          <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {edu.period}
                  </span>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
            <p>{edu.institution}, {edu.location}</p>
            <p className="mt-2 whitespace-pre-line">
              {edu.description}
            </p>

                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === Work Experience Section SECOND === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey is just starting, but I have already gained valuable experience in various roles. Below are some of the key positions I've held, where I've honed my skills and contributed to impactful positions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {resumeData.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 md:mb-0"
            >
              <div className={`relative flex items-start md:items-center flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 z-10"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} w-full`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-xs font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                        <Briefcase size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <MapPin size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
