import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, ChevronRight, Zap } from 'lucide-react';
import Hero3D from './Hero3D';
import NoiseGrain from './NoiseGrain';

export default function Hero() {
  const [btn1Hover, setBtn1Hover] = useState(false);
  const [btn2Hover, setBtn2Hover] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* 3D R3F Background Canvas */}
      <Hero3D />

      {/* Ambient background glow blobs */}
      <div className="glow-blob-purple top-1/4 -left-20" />
      <div className="glow-blob-cyan bottom-10 -right-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121A]/80 border border-[#2CB67D]/40 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(44,182,125,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2CB67D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2CB67D]"></span>
          </span>
          <span className="text-xs font-semibold text-[#F5F5F7] tracking-wider uppercase">
            Available for New Freelance Projects
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] max-w-4xl mx-auto leading-[1.15]"
        >
          I will build a{' '}
          <span className="text-gradient-purple-cyan underline decoration-[#7F5AF0]/40 underline-offset-8">
            fast AI-powered website
          </span>{' '}
          for your business.
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[#8A8A99] max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Modern, fast, and built with the latest AI-powered development tools. Delivered clean, functional, and tailored to turn visitors into clients.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary CTA - View My Work */}
          <a
            href="#projects"
            onMouseEnter={() => setBtn1Hover(true)}
            onMouseLeave={() => setBtn1Hover(false)}
            className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#7F5AF0] text-white font-semibold text-base shadow-[0_0_30px_rgba(127,90,240,0.5)] hover:shadow-[0_0_40px_rgba(127,90,240,0.8)] transition-all duration-300 transform hover:scale-105"
          >
            <NoiseGrain opacity={0.25} isHovered={btn1Hover} />
            <Sparkles className="w-5 h-5 relative z-10 text-[#00E5FF]" />
            <span className="relative z-10">View My Work</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA - Contact Me */}
          <a
            href="#contact"
            onMouseEnter={() => setBtn2Hover(true)}
            onMouseLeave={() => setBtn2Hover(false)}
            className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#12121A]/80 border border-[#7F5AF0]/40 text-[#F5F5F7] font-semibold text-base hover:border-[#2CB67D]/80 hover:text-white backdrop-blur-md transition-all duration-300 transform hover:scale-105"
          >
            <NoiseGrain opacity={0.25} isHovered={btn2Hover} />
            <Zap className="w-5 h-5 relative z-10 text-[#2CB67D]" />
            <span className="relative z-10">Contact Me</span>
          </a>
        </motion.div>

        {/* Feature Badges / Proof points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div className="p-3 rounded-xl bg-[#12121A]/40 border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-xs text-[#8A8A99]">
            <span className="w-2 h-2 rounded-full bg-[#7F5AF0]" />
            Fast Turnaround Time
          </div>
          <div className="p-3 rounded-xl bg-[#12121A]/40 border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-xs text-[#8A8A99]">
            <span className="w-2 h-2 rounded-full bg-[#2CB67D]" />
            AI-Enhanced Workflow
          </div>
          <div className="col-span-2 md:col-span-1 p-3 rounded-xl bg-[#12121A]/40 border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-xs text-[#8A8A99]">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
            100% Satisfaction Guarantee
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            className="p-3 rounded-full bg-[#12121A]/60 border border-white/10 text-[#8A8A99] hover:text-[#7F5AF0] hover:border-[#7F5AF0]/40 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
