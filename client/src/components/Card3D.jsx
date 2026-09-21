import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Card3D = ({ children, className = "", glare = true, maxTilt = 8, depth = 15 }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse relative to center of card (-1 to 1)
    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    setRotateX(-mouseY * maxTilt);
    setRotateY(mouseX * maxTilt);

    // Glare position (0% to 100%)
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.2 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  if (isMobile) {
    return (
      <div className={`relative rounded-2xl ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
        mass: 0.6,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`relative rounded-2xl transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic 3D Glare effect */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 65%)`,
            opacity: glarePos.opacity,
          }}
        />
      )}
      
      {/* Content wrapper with subtle 3D elevation */}
      <div
        style={{
          transform: `translateZ(${depth}px)`,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Card3D;
