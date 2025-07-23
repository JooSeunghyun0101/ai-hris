'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide cursor on mobile devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main Cursor */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Glow Effect */}
        <div 
          className={`w-5 h-5 rounded-full transition-all duration-300 ${
            isHovering 
              ? 'bg-[#F55000] shadow-[0_0_20px_#F55000,0_0_40px_#F55000] opacity-60' 
              : 'bg-[#F55000] shadow-[0_0_8px_#F55000] opacity-40'
          }`}
        />
      </motion.div>
      
      {/* Outer Ring for Hover Effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
        }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="w-8 h-8 border-2 border-[#F55000] rounded-full" />
      </motion.div>
    </div>
  );
}