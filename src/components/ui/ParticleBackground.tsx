import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  type: 'dot' | 'square';
  rotation: number;
  rotationSpeed: number;
}

const ParticleBackground: React.FC = () => {
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const isDarkMode = theme === 'dark';

  // Initialize particles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const particleColors = isDarkMode 
      ? ['#4338ca', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe'] 
      : ['#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca'];

    const newParticles: Particle[] = [];
    const particleCount = Math.min(Math.floor(dimensions.width * dimensions.height / 15000), 80);

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        type: Math.random() > 0.7 ? 'square' : 'dot',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    setParticles(newParticles);
  }, [dimensions, isDarkMode]);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (particles.length === 0) return;

    let animationFrameId: number;
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (!ctx) return;

    const drawSquare = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeRect(-size / 2, -size / 2, size, size);
      ctx.restore();
    };

    const drawConnection = (p1: Particle, p2: Particle, distance: number) => {
      const maxDistance = 150;
      const opacity = Math.max(0, 1 - (distance / maxDistance));
      ctx.beginPath();
      ctx.strokeStyle = `${p1.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = opacity * 0.8;
      
      // Create a dashed line effect
      ctx.setLineDash([4, 4]);
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.setLineDash([]); // Reset line dash
    };

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      const updatedParticles = [...particles];
      
      // Draw and update particles
      for (let i = 0; i < updatedParticles.length; i++) {
        const p = updatedParticles[i];
        
        ctx.strokeStyle = p.color;
        ctx.fillStyle = p.color;
        
        if (p.type === 'square') {
          p.rotation += p.rotationSpeed;
          drawSquare(p.x, p.y, p.size * 2, p.rotation);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary check with smooth transition
        if (p.x < 0) {
          p.x = dimensions.width;
        } else if (p.x > dimensions.width) {
          p.x = 0;
        }
        
        if (p.y < 0) {
          p.y = dimensions.height;
        } else if (p.y > dimensions.height) {
          p.y = 0;
        }
        
        // Connect particles
        for (let j = i + 1; j < updatedParticles.length; j++) {
          const p2 = updatedParticles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            drawConnection(p, p2, distance);
          }
        }
      }
      
      setParticles(updatedParticles);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, dimensions]);

  return (
    <canvas
      id="particle-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      width={dimensions.width}
      height={dimensions.height}
    />
  );
};

export default ParticleBackground;