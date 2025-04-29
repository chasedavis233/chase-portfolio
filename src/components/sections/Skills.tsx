import React, { useRef } from 'react';
import resumeData from '../../data/resumeData';
import ProgressBar from '../ui/ProgressBar';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.1 });

  // Group skills by category
  const skillsByCategory = resumeData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof resumeData.skills>);

  // Category titles formatted
  const categoryTitles: Record<string, string> = {
    os: 'Operating Systems',
    systems: 'Hardware & Systems',
    tools: 'Developer Tools',
    software: 'Software',
  };
  
  const categoryColors: Record<string, string> = {
    os: 'primary',
    systems: 'accent',
    tools: 'secondary',
    software: 'primary',
  };
  

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've gained expertise in various technologies and tools throughout my personal journey.
            Here's an overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {categoryTitles[category] || category}
              </h3>

              {skills.map((skill, skillIndex) => (
                <ProgressBar
                  key={skill.name}
                  label={skill.name}
                  percentage={skill.level}
                  color={categoryColors[category] || 'primary'}
                  className="mb-4"
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            What I Offer
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
  {
    title: 'Technical Problem Solving',
    description: 'Strong ability to troubleshoot hardware, software, and networking issues with hands-on experience in system repair and diagnostics.',
    color: 'secondary',
  },
  {
    title: 'Cross-Platform Experience',
    description: 'Fluent in Windows, macOS, and Linux environments with additional exposure to Kali Linux, Ubuntu, and virtual machine platforms.',
    color: 'primary',
  },
  {
    title: 'Customer & Team Communication',
    description: 'Experience working in team-based environments and customer-facing roles, emphasizing clear communication and patience.',
    color: 'primary',
  },
  {
    title: 'Adaptability & Growth',
    description: 'Quick learner with a willingness to improve; currently working toward CompTIA A+ and Security+ certifications while applying skills in real-world projects.',
    color: 'secondary',
  },

            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`p-6 rounded-lg border-2 border-${service.color}-500/30 bg-${service.color}-50/30 dark:bg-${service.color}-900/10 hover:shadow-lg transition-shadow duration-300`}
              >
                <h4 className={`text-lg font-semibold mb-3 text-${service.color}-700 dark:text-${service.color}-400`}>
                  {service.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;