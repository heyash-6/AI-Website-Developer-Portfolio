import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Eye, Code, Layers, Github, Hammer, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import GrainCard from './GrainCard';

const initialProjects = [
  {
    id: 1,
    title: 'Apex Edge — Modern Corporate Web Presence',
    category: 'Business Site',
    isConcept: true,
    statusText: 'Concept — In Development',
    description:
      'Professional business website with dark glassmorphism layout, ultra-fast page load times, integrated service catalog, and contact flow.',
    fullDescription:
      'Engineered as a concept build for modern businesses looking for a high-end dark aesthetic. Apex Edge combines glassmorphic UI elements with high performance scores across desktop and mobile devices.',
    tags: ['🚧 Concept (In Progress)', 'Business Site', 'Lead Gen', 'Glassmorphism'],
    tech: ['React', 'Tailwind CSS', 'Lucide Icons', 'Vite'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/heyash-6',
    accent: 'cyan',
  },
  {
    id: 2,
    title: 'PulseHealth — AI Medical Web Dashboard',
    category: 'Web App',
    isConcept: true,
    statusText: 'Concept — In Development',
    description:
      'Clean, responsive healthcare telemetry dashboard displaying real-time analytics, patient metrics, and AI diagnostics interface.',
    fullDescription:
      'Engineered as a concept build showcasing a high-contrast dashboard UI designed for medical professionals. Focuses on data clarity, health metrics visualization, and rapid UI state updates.',
    tags: ['🚧 Concept (In Progress)', 'Web App', 'Healthcare', 'Dashboard'],
    tech: ['React', 'Tailwind CSS', 'Recharts', 'Lucide'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/heyash-6',
    accent: 'purple',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch projects dynamically from Supabase table 'projects'
  useEffect(() => {
    async function loadProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: true });

        if (!error && data && data.length > 0) {
          const mapped = data.map((item) => {
            const rawTags = Array.isArray(item.tags)
              ? item.tags
              : typeof item.tags === 'string'
              ? JSON.parse(item.tags)
              : ['Portfolio'];

            // Ensure Concept tag is included if not present
            const tagsWithConcept = rawTags.includes('🚧 Concept (In Progress)')
              ? rawTags
              : ['🚧 Concept (In Progress)', ...rawTags];

            return {
              id: item.id,
              title: item.title,
              category: item.category || 'Portfolio',
              isConcept: true,
              statusText: item.status_text || 'Concept — In Development',
              description: item.description,
              fullDescription: item.full_description || item.description,
              tags: tagsWithConcept,
              tech: Array.isArray(item.tech)
                ? item.tech
                : typeof item.tech === 'string'
                ? JSON.parse(item.tech)
                : ['React', 'Tailwind CSS'],
              image: item.image,
              githubUrl: item.github_url || 'https://github.com/heyash-6',
              accent: item.accent || 'purple',
            };
          });
          setProjects(mapped);
        }
      } catch (err) {
        console.warn('Supabase projects table fetch note:', err);
      }
    }

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative bg-[#0A0A0F]">
      {/* Background glow */}
      <div className="glow-blob-purple top-1/4 left-1/2 -translate-x-1/2 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio Showcase
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#F5F5F7]"
          >
            Featured Concept Builds
          </motion.h2>

          <p className="mt-4 text-[#8A8A99] text-base max-w-xl mx-auto">
            Upcoming portfolio projects currently in active development to showcase modern design and engineering capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GrainCard
                accentColor={project.accent}
                className="group h-full flex flex-col justify-between cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent opacity-80" />

                    {/* Concept Status Badge Overlay */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121A]/85 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[11px] font-semibold shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                        </span>
                        🚧 Concept — In Development
                      </span>
                    </div>

                    {/* Quick view hover button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7F5AF0] text-white text-xs font-semibold shadow-lg">
                        <Eye className="w-4 h-4" /> Preview Project Details
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md border ${
                            tag.includes('Concept')
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                              : 'bg-white/5 text-[#2CB67D] border-[#2CB67D]/20'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#F5F5F7] group-hover:text-[#00E5FF] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-[#8A8A99] text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 text-xs text-[#8A8A99]">
                  <span className="flex items-center gap-1">
                    <Code className="w-3.5 h-3.5 text-[#7F5AF0]" />
                    {project.tech.join(' • ')}
                  </span>
                  <span className="text-[#7F5AF0] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    View Details →
                  </span>
                </div>
              </GrainCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12121A] border border-[#7F5AF0]/40 p-6 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-[#7F5AF0] transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#12121A]/90 backdrop-blur-md border border-amber-500/50 text-amber-400 text-xs font-semibold shadow-lg">
                    <Hammer className="w-3.5 h-3.5" /> Concept Build — Currently In Development
                  </span>
                </div>
              </div>

              {/* Notice Box */}
              <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-300 block mb-0.5">Development Notice:</strong>
                  This is a personal concept project currently being engineered to demonstrate modern AI web development capabilities.
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      tag.includes('Concept')
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-[#7F5AF0]/20 text-[#00E5FF] border-[#7F5AF0]/40'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-bold text-[#F5F5F7] mb-4">
                {selectedProject.title}
              </h3>

              {/* Full Description */}
              <p className="text-[#8A8A99] text-sm leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Tech Stack Used */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F5F7] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#2CB67D]" /> Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 text-[#F5F5F7] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 px-6 rounded-full bg-[#7F5AF0] text-white font-semibold text-center text-sm shadow-lg shadow-[#7F5AF0]/30 hover:bg-[#6b46e5] transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Hire Me to Build a Similar Site
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-6 rounded-full bg-white/5 border border-white/10 text-[#F5F5F7] hover:border-[#2CB67D] font-semibold text-center text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" /> View GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
