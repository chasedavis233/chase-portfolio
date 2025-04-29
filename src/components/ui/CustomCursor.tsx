import React, { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

interface CustomCursorProps {
  className?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ className }) => {
  const { x, y } = useMousePosition();
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'button'>('default');
  
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || target.closest('a')) {
        setCursorType('link');
      } else if (
        target.tagName === 'BUTTON' || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]')
      ) {
        setCursorType('button');
      } else {
        setCursorType('default');
      }
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide the default cursor
  useEffect(() => {
    document.body.classList.add('no-cursor');
    
    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .no-cursor {
          cursor: none !important;
        }
      `}</style>
      <div
        className={`fixed pointer-events-none z-50 transition-transform will-change-transform ${className}`}
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`
          relative flex items-center justify-center
          ${cursorType === 'default' ? 'w-6 h-6' : 'w-12 h-12'}
          transition-all duration-200 ease-out
        `}>
          <div className={`
            absolute rounded-full
            ${cursorType === 'default' ? 'w-2 h-2 bg-primary-500' : ''}
            ${cursorType === 'link' ? 'w-6 h-6 bg-accent-500 mix-blend-difference' : ''}
            ${cursorType === 'button' ? 'w-4 h-4 bg-primary-400 mix-blend-difference' : ''}
            transition-all duration-200 ease-out
          `}></div>
          <div className={`
            absolute rounded-full border border-primary-400
            ${cursorType === 'default' ? 'w-6 h-6 opacity-70' : ''}
            ${cursorType === 'link' ? 'w-12 h-12 opacity-80' : ''}
            ${cursorType === 'button' ? 'w-10 h-10 opacity-90' : ''}
            transition-all duration-300 ease-out
          `}></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;