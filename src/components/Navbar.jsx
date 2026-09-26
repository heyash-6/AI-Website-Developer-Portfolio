import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import NoiseGrain from './NoiseGrain';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0A0A0F]/85 backdrop-blur-md border-b border-[#7F5AF0]/20 shadow-lg shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7F5AF0] to-[#00E5FF] p-[1px] shadow-[0_0_15px_rgba(127,90,240,0.5)]">
            <div className="w-full h-full bg-[#0A0A0F] rounded-[11px] flex items-center justify-center group-hover:bg-[#12121A] transition-colors">
              <Sparkles className="w-5 h-5 text-[#00E5FF] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-[#F5F5F7] tracking-wider group-hover:text-[#7F5AF0] transition-colors">
              YASH TIDKE
            </span>
            <span className="text-[10px] text-[#8A8A99] tracking-widest uppercase font-semibold">
              AI Web Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12121A]/60 backdrop-blur-lg px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-[#8A8A99] hover:text-[#F5F5F7] hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onMouseEnter={() => setActiveHover(true)}
            onMouseLeave={() => setActiveHover(false)}
            className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] text-white font-medium text-sm shadow-[0_0_20px_rgba(127,90,240,0.4)] hover:shadow-[0_0_30px_rgba(44,182,125,0.6)] transition-all duration-300 transform hover:scale-105"
          >
            <NoiseGrain opacity={0.25} isHovered={activeHover} />
            <span className="relative z-10">Hire Me</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg bg-[#12121A] text-[#F5F5F7] border border-white/10 hover:border-[#7F5AF0] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#7F5AF0]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#7F5AF0]/20 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#8A8A99] hover:text-[#7F5AF0] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#00E5FF] text-white font-semibold shadow-lg shadow-[#7F5AF0]/30"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
