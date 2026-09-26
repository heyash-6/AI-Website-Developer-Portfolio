import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NoiseGrain from './NoiseGrain';

/**
 * Reusable Glassmorphism Card component featuring animated noise grain texture on hover,
 * neon accent borders, and micro-interaction scale up.
 */
export default function GrainCard({
  children,
  className = '',
  accentColor = 'purple', // 'purple' | 'green' | 'cyan'
  onClick,
  glowOnHover = true,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getBorderGlow = () => {
    if (!glowOnHover || !isHovered) return 'border-white/10 shadow-none';
    switch (accentColor) {
      case 'green':
        return 'border-[#2CB67D]/60 shadow-[0_0_25px_rgba(44,182,125,0.25)]';
      case 'cyan':
        return 'border-[#00E5FF]/60 shadow-[0_0_25px_rgba(0,229,255,0.25)]';
      case 'purple':
      default:
        return 'border-[#7F5AF0]/60 shadow-[0_0_25px_rgba(127,90,240,0.3)]';
    }
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-[#12121A]/80 backdrop-blur-xl border transition-all duration-300 ${getBorderGlow()} ${className}`}
    >
      {/* Film grain noise texture */}
      <NoiseGrain opacity={0.18} isHovered={isHovered} />

      {/* Internal glow gradient highlight */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-40' : 'opacity-10'
        } ${
          accentColor === 'green'
            ? 'bg-[#2CB67D]'
            : accentColor === 'cyan'
            ? 'bg-[#00E5FF]'
            : 'bg-[#7F5AF0]'
        }`}
      />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
