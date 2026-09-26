import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, Clock, ShieldCheck, HeartHandshake, Zap, Target } from 'lucide-react';
import GrainCard from './GrainCard';

export default function About() {
  const expectations = [
    { text: 'Clear, honest communication from start to finish', icon: HeartHandshake },
    { text: 'Fast turnaround without cutting corners on quality', icon: Clock },
    { text: 'Clean, modern design tailored to your brand and goals', icon: Target },
    { text: 'Unlimited revisions until you are fully satisfied', icon: ShieldCheck },
    { text: 'A developer who treats your project like it is their own', icon: UserCheck },
  ];

  const stats = [
    { label: 'Quality Delivery', value: '100%', detail: 'Committed to excellence', color: 'purple' },
    { label: 'Turnaround Time', value: 'Fast', detail: 'No unnecessary delays', color: 'green' },
    { label: 'Client Support', value: '24/7', detail: 'Dedicated & Responsive', color: 'cyan' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Background ambient light */}
      <div className="glow-blob-purple top-1/2 left-0 -translate-y-1/2 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 text-[#7F5AF0] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Zap className="w-3.5 h-3.5" />
            Get To Know Me
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#F5F5F7]"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-[#7F5AF0] to-[#00E5FF] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-[#8A8A99] text-base leading-relaxed"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#12121A]/60 border border-white/10 backdrop-blur-md space-y-5">
              <p className="text-lg text-[#F5F5F7] font-medium leading-snug">
                Hi, I'm <span className="text-[#7F5AF0] font-semibold">Yash Tidke</span> — a freelance AI Website Developer passionate about building fast, functional, and visually striking websites for businesses and individuals.
              </p>

              <p>
                My approach is simple: understand what you actually need, then deliver a clean, working website without unnecessary delays or complicated back-and-forth. I focus on combining modern design with smart, efficient development, so every project I take on looks professional and performs flawlessly — whether it's a landing page, a business website, or a personal portfolio.
              </p>

              <p>
                I'm self-taught and constantly learning, which means I bring fresh energy, adaptability, and genuine care into every project. I don't just aim to finish a website — I aim to build something you're proud to share with the world.
              </p>

              <p className="text-[#F5F5F7] font-medium pt-2">
                I'm currently building my portfolio and taking on new projects — so if you're looking for someone who's dedicated, detail-oriented, and genuinely invested in getting your website right, let's connect.
              </p>
            </div>
          </motion.div>

          {/* Value Proposition & Promises Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#12121A] to-[#0A0A0F] border border-[#7F5AF0]/30 shadow-xl relative">
              <h3 className="font-heading text-xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#2CB67D]" />
                When you work with me, you can expect:
              </h3>

              <div className="space-y-4">
                {expectations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#7F5AF0]/40 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-[#7F5AF0]/10 text-[#7F5AF0] group-hover:bg-[#7F5AF0] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4 shrink-0" />
                      </div>
                      <span className="text-sm text-[#F5F5F7] font-medium leading-snug">
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats / Highlights Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GrainCard accentColor={stat.color} className="p-6 text-center">
                <div className="text-4xl font-heading font-bold text-gradient-purple-cyan mb-1">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-[#F5F5F7]">{stat.label}</div>
                <div className="text-xs text-[#8A8A99] mt-1">{stat.detail}</div>
              </GrainCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
