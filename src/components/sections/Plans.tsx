import React, { useRef, useState } from 'react';
import resumeData from '../../data/resumeData';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? resumeData.testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === resumeData.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="plans"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Plans
          </h2>
          <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Below are the certifications that I am actively working on completing in order to further my knowledge and skills in the field of software development. I am committed to continuous learning and professional growth, and these certifications are some of my first steps.
            <br />
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              {/* <div className="absolute -top-6 left-8 text-primary-500 dark:text-primary-400">
                <Quote size={48} className="opacity-50" />
              </div> */}

              <div className="mb-8 text-center">
                <img
                  src={resumeData.testimonials[activeIndex].avatar}
                  alt={resumeData.testimonials[activeIndex].name}
                  className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900 shadow-md mx-auto mb-4 object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {resumeData.testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {resumeData.testimonials[activeIndex].position}, {resumeData.testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              <blockquote className="text-center text-gray-700 dark:text-gray-300 text-lg italic mb-6">
                "{resumeData.testimonials[activeIndex].text}"
              </blockquote>

              <div className="flex justify-center mt-8 space-x-2">
                {resumeData.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex
                        ? 'bg-primary-500 dark:bg-primary-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to plan ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Previous plan"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
              <button
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="Next plan"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;