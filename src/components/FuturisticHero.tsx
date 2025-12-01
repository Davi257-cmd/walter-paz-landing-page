import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import React from 'react';

export const FuturisticHero = ({ title, subtitle, ctaText, onCtaClick }: {
  title: string | React.ReactNode
  subtitle: string
  ctaText: string
  onCtaClick?: () => void
}) => {
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setSubtitleVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  // Mouse tracking desabilitado para melhor performance
  // useEffect(() => {
  //   let rafId: number
  //   let lastX = 0
  //   let lastY = 0

  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (rafId) cancelAnimationFrame(rafId)
      
  //     rafId = requestAnimationFrame(() => {
  //       const newX = (e.clientX / window.innerWidth - 0.5) * 20
  //       const newY = (e.clientY / window.innerHeight - 0.5) * 20
      
  //       if (Math.abs(newX - lastX) > 0.5 || Math.abs(newY - lastY) > 0.5) {
  //         setMousePosition({ x: newX, y: newY })
  //         lastX = newX
  //         lastY = newY
  //       }
  //     })
  //   };

  //   window.addEventListener('mousemove', handleMouseMove, { passive: true });
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     if (rafId) cancelAnimationFrame(rafId)
  //   }
  // }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Grid pattern estático - sem animação para melhor performance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title - Completamente estático, sem animação */}
          <h1 className="font-extrabold mb-6 text-white" style={{ animation: 'none', transition: 'none', fontSize: '27px' }}>
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
            style={{ willChange: subtitleVisible ? 'auto' : 'transform, opacity' }}
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
            style={{ willChange: subtitleVisible ? 'auto' : 'transform, opacity' }}
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