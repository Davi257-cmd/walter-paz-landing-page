'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const FuturisticHero = ({ title, subtitle, ctaText, onCtaClick }: {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick?: () => void
}) => {
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeout = setTimeout(() => setSubtitleVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Subtle animated background effects - minimal to not compete with video background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Very subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title - Sem animação */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
            {title}
          </h1>

          {/* Subtitle */}
          <motion.div 
            className="text-lg md:text-xl lg:text-2xl mb-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: subtitleVisible ? 1 : 0, 
              y: subtitleVisible ? 0 : 20 
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {subtitle}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: subtitleVisible ? 1 : 0, 
              y: subtitleVisible ? 0 : 20 
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              onClick={onCtaClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          className="animate-bounce"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-white">
            <path d="M11 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 12L11 17L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FuturisticHero;