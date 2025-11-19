import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Enhanced CSS-based 3D animated background
export default function Background3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Large central orb with depth */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, rgba(220, 38, 38, 0.2) 30%, rgba(220, 38, 38, 0.05) 60%, transparent 100%)',
          filter: 'blur(140px)',
          transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          boxShadow: '0 0 200px rgba(220, 38, 38, 0.3)'
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Secondary orbs for depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 50%, transparent 70%)',
          filter: 'blur(120px)',
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
          x: [-30, 30, -30],
          y: [-15, 15, -15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.35) 0%, rgba(220, 38, 38, 0.08) 50%, transparent 70%)',
          filter: 'blur(100px)',
          transform: `translate(${-mousePosition.x * 0.6}px, ${-mousePosition.y * 0.6}px)`
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.15, 1],
          x: [25, -25, 25],
          y: [12, -12, 12]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating 3D geometric elements */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-40 h-40"
        style={{
          transform: `rotate(45deg) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
        animate={{
          rotate: [45, 135, 45],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 border-2 border-red-600/30 rounded-lg" 
             style={{ transform: 'translateZ(20px)' }} />
        <div className="absolute inset-2 border border-red-600/20 rounded-lg" 
             style={{ transform: 'translateZ(10px)' }} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-32 h-32"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.3, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-red-600/25" />
        <div className="absolute inset-4 rounded-full border border-red-600/15" />
      </motion.div>

      {/* Additional depth layers */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
        }}
        animate={{
          rotate: [0, -360],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border border-red-600/10 rounded-full" />
        <div className="absolute inset-8 border border-red-600/10 rounded-full" />
        <div className="absolute inset-16 border border-red-600/10 rounded-full" />
      </motion.div>

      {/* Animated grid pattern for tech feel */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
        }}
      />

      {/* Enhanced particle system with depth */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(220, 38, 38, 0.6), transparent)'
                : 'rgba(220, 38, 38, 0.3)',
              boxShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.8, 1.5, 0.8],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Scanline effect for futuristic feel */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(220, 38, 38, 0.03) 2px, rgba(220, 38, 38, 0.03) 4px)'
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}