import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Layout, Palette, Zap, RefreshCw, Sparkles, ArrowUpRight } from 'lucide-react';
import GrainCard from './GrainCard';

export default function Services() {
  const services = [
    {
      title: 'AI-Powered Website Development',
      description:
        'Leveraging cutting-edge AI development tools and modern frameworks to engineer custom, lightning-fast websites engineered for maximum performance and conversion.',
      icon: Bot,
      color: 'purple',
      badge: 'Core Specialty',
    },
    {
      title: 'Landing Pages & Business Sites',
      description:
        'High-converting landing pages and sleek corporate web presences designed specifically to communicate your value proposition and generate qualified leads.',
      icon: Layout,
      color: 'cyan',
      badge: 'High Impact',
    },
    {
      title: 'UI/UX Focused Design',
      description:
        'Futuristic dark mode aesthetics, clean geometric typography, interactive 3D elements, and smooth micro-interactions that leave a lasting impression.',
      icon: Palette,
      color: 'green',
      badge: 'Modern Aesthetic',
    },
    {
      title: 'Fast Turnaround Projects',
      description:
        'Streamlined execution without bloated bureaucracy or delays. Get your production-ready website built, tested, and published rapidly.',
      icon: Zap,
      color: 'purple',
      badge: 'Rapid Delivery',
    },
    {
      title: 'Ongoing Support & Revisions',
      description:
        'Unlimited revision support during build and proactive post-launch updates to keep your site updated, secure, and performing flawlessly.',
      icon: RefreshCw,
      color: 'green',
      badge: '100% Satisfaction',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#0A0A0F]/90">
      {/* Glow background accent */}
      <div className="glow-blob-cyan top-1/3 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2CB67D]/10 border border-[#2CB67D]/30 text-[#2CB67D] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#F5F5F7]"
          >
            What I Do
          </motion.h2>

          <p className="mt-4 text-[#8A8A99] text-base max-w-xl mx-auto">
            Comprehensive web development solutions tailored to launch your online presence with speed, style, and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <GrainCard accentColor={service.color} className="p-8 h-full flex flex-col justify-between group">
                  <div>
                    {/* Badge & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`p-3.5 rounded-2xl ${
                          service.color === 'green'
                            ? 'bg-[#2CB67D]/10 text-[#2CB67D]'
                            : service.color === 'cyan'
                            ? 'bg-[#00E5FF]/10 text-[#00E5FF]'
                            : 'bg-[#7F5AF0]/10 text-[#7F5AF0]'
                        } group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 text-[#8A8A99] border border-white/10">
                        {service.badge}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="font-heading text-xl font-bold text-[#F5F5F7] mb-3 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#8A8A99] text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Card footer CTA link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#7F5AF0] group-hover:text-[#00E5FF] transition-colors pt-2"
                  >
                    Discuss This Service
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </GrainCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
