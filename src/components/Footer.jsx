import React from 'react';
import { Linkedin, Github, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7F5AF0] to-[#00E5FF] p-[1px]">
                <div className="w-full h-full bg-[#0A0A0F] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#00E5FF]" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-[#F5F5F7] tracking-wider">
                YASH TIDKE
              </span>
            </a>
            <p className="text-xs text-[#8A8A99] max-w-sm">
              Building fast, modern, AI-powered websites engineered to grow businesses.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/heyash6"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-[#12121A] border border-white/10 text-[#8A8A99] hover:text-[#7F5AF0] hover:border-[#7F5AF0] transition-all transform hover:scale-110 shadow-md"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/heyash-6"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-[#12121A] border border-white/10 text-[#8A8A99] hover:text-[#2CB67D] hover:border-[#2CB67D] transition-all transform hover:scale-110 shadow-md"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8A99]">
          <div>© 2026 Yash Tidke. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A8A99] hover:text-[#7F5AF0] transition-colors"
          >
            Back to Top
            <div className="p-1.5 rounded-full bg-[#12121A] border border-white/10">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
