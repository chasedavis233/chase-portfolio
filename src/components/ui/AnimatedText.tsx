import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'words' | 'letters';
  staggerChildren?: number;
  wordClassName?: string;
  letterClassName?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  type = 'words',
  staggerChildren = 0.03,
  wordClassName = '',
  letterClassName = '',
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (type === 'letters') {
    return (
      <motion.div
        className={`overflow-hidden ${className}`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-1">
            {Array.from(word + ' ').map((letter, letterIndex) => (
  <motion.span
    key={letterIndex}
    className={`inline-block ${letterClassName}`}
    variants={child}
  >
    {letter === ' ' ? '\u00A0' : letter}
  </motion.span>
))}
            {index !== words.length - 1 && " "}
          </span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`inline-block ${wordClassName}`}
          variants={child}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;