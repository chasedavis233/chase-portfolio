import React, { useRef } from 'react';
import resumeData from '../../data/resumeData';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Who am I?
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I am a senior Computer Science student with a passion for technology and hands-on experience across hardware and software. Whether I'm building custom PCs, exploring operating systems like Windows, macOS, and Linux, or diving into new development tools, I’m always driven by a desire to learn and solve real-world problems.
                </p>

                <p className="text-lg mt-6">
                  I thrive in environments where I can grow and apply my skills especially when it comes to helping others. I find it incredibly rewarding to restore workflows, resolve issues, and make a direct impact. My background includes team leadership, customer-facing roles, and collaborative project experience. I'm currently working toward certifications like CompTIA A+ and Security+ to expand my technical foundation.
                </p>

                <p className="text-lg mt-6">
                  Outside of tech, I'm all about balance. I enjoy snowboarding, basketball, and spending time outdoors just as much as I enjoy exploring code or optimizing systems. My long-term goals are still evolving, but right now, I'm focused on building industry experience and finding a role that challenges me to keep learning. I'm looking for a work environment that values growth, mentorship, and meaningful contribution.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Strengths
                </h3>

                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Excellent team collaboration and leadership in project-based environments</li>
                  <li>Strong problem-solving mindset, especially under pressure</li>
                  <li>Effective communicator in both technical and non-technical settings</li>
                  <li>Adaptable and quick to learn new technologies and workflows</li>
                  <li>Customer-focused with real-world support experience and professionalism</li>
                  <li>Consistent and dependable — always striving to deliver results</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
