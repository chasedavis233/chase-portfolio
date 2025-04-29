import React, { useRef, useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  percentage, 
  color = 'primary',
  className = ''
}) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(progressRef, { threshold: 0.1 });
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isVisible) {
      const duration = 1500; // 1.5 seconds
      const interval = 20; // Update every 20ms
      const steps = duration / interval;
      const increment = percentage / steps;
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < percentage) {
          setDisplayPercentage(Math.floor(current));
          timeoutId = setTimeout(updateCounter, interval);
        } else {
          setDisplayPercentage(percentage);
        }
      };
      
      updateCounter();
    } else {
      setDisplayPercentage(0);
    }
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible, percentage]);

  const colorStyles = {
    primary: {
      bar: 'bg-gradient-to-r from-primary-500 to-primary-700',
      text: 'text-primary-600 dark:text-primary-400',
    },
    secondary: {
      bar: 'bg-gradient-to-r from-secondary-500 to-secondary-700',
      text: 'text-secondary-600 dark:text-secondary-400',
    },
    accent: {
      bar: 'bg-gradient-to-r from-accent-500 to-accent-700',
      text: 'text-accent-600 dark:text-accent-400',
    },
  }[color as 'primary' | 'secondary' | 'accent'] || {
    bar: 'bg-gradient-to-r from-primary-500 to-primary-700',
    text: 'text-primary-600 dark:text-primary-400',
  };

  return (
    <div ref={progressRef} className={`w-full mb-6 ${className}`}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</span>
        <span className={`text-sm font-semibold ${colorStyles.text}`}>{displayPercentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        {isVisible && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ 
              duration: 1.5, 
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className={`h-full rounded-full ${colorStyles.bar} relative`}
          >
            <div className="absolute inset-0 bg-shimmer bg-200% animate-shimmer opacity-50"></div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;