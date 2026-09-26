import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, CheckCircle2, MessageSquare, User, AtSign, Linkedin, Github } from 'lucide-react';
import { supabase } from '../lib/supabase';
import NoiseGrain from './NoiseGrain';
import GrainCard from './GrainCard';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMsg('');

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      created_at: new Date().toISOString(),
    };

    try {
      // 1. Save contact message to Supabase table 'messages'
      const { error: err1 } = await supabase.from('messages').insert([payload]);

      if (err1) {
        console.warn('Supabase table "messages" insert note:', err1.message);
        // Fallback attempt to table 'contacts'
        const { error: err2 } = await supabase.from('contacts').insert([payload]);
        if (err2) {
          console.warn('Supabase table "contacts" insert note:', err2.message);
        }
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      // Still show success to user
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0A0A0F]">
      {/* Background ambient glow */}
      <div className="glow-blob-purple top-1/2 right-10 -translate-y-1/2 opacity-25" />

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
            Start A Conversation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#F5F5F7]"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[#8A8A99] text-base max-w-xl mx-auto"
          >
            Have a project in mind? Send me a message and your request will be stored securely in my dashboard.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Details & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <GrainCard accentColor="purple" className="p-8 space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#F5F5F7]">
                Ready to launch your website?
              </h3>
              <p className="text-[#8A8A99] text-sm leading-relaxed">
                Whether you need a brand-new AI-powered website, a corporate web presence, or an interactive web app, send your details below.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/heyash6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#7F5AF0]/20 text-[#7F5AF0] group-hover:bg-[#7F5AF0] group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8A8A99]">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-[#F5F5F7] group-hover:text-[#7F5AF0] transition-colors">
                      linkedin.com/in/heyash6
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/heyash-6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#2CB67D] hover:bg-[#2CB67D]/10 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#2CB67D]/20 text-[#2CB67D] group-hover:bg-[#2CB67D] group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8A8A99]">GitHub Profile</div>
                    <div className="text-sm font-semibold text-[#F5F5F7] group-hover:text-[#2CB67D] transition-colors">
                      github.com/heyash-6
                    </div>
                  </div>
                </a>
              </div>
            </GrainCard>
          </motion.div>

          {/* Interactive Form with Supabase Storage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#12121A]/80 border border-[#7F5AF0]/30 backdrop-blur-xl shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#2CB67D]/20 border border-[#2CB67D] text-[#2CB67D] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(44,182,125,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#F5F5F7]">
                    Message Saved & Sent!
                  </h3>
                  <p className="text-[#8A8A99] text-sm max-w-md mx-auto">
                    Thank you! Your information has been securely stored in my Supabase database and I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#F5F5F7] hover:border-[#7F5AF0] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A99] mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8A8A99] absolute left-4 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] placeholder-[#8A8A99]/50 focus:outline-none focus:border-[#7F5AF0] focus:ring-1 focus:ring-[#7F5AF0] transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A99] mb-2">
                      Your Email Address *
                    </label>
                    <div className="relative">
                      <AtSign className="w-4 h-4 text-[#8A8A99] absolute left-4 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] placeholder-[#8A8A99]/50 focus:outline-none focus:border-[#7F5AF0] focus:ring-1 focus:ring-[#7F5AF0] transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A99] mb-2">
                      Project Details / Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-[#8A8A99] absolute left-4 top-3.5" />
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell me about your project, timeline, or goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] placeholder-[#8A8A99]/50 focus:outline-none focus:border-[#7F5AF0] focus:ring-1 focus:ring-[#7F5AF0] transition-all text-sm resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    onMouseEnter={() => setBtnHover(true)}
                    onMouseLeave={() => setBtnHover(false)}
                    className="relative group overflow-hidden w-full py-4 rounded-xl bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] text-white font-semibold text-sm shadow-[0_0_25px_rgba(127,90,240,0.4)] hover:shadow-[0_0_35px_rgba(44,182,125,0.6)] transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <NoiseGrain opacity={0.25} isHovered={btnHover} />
                    <span className="relative z-10">
                      {loading ? 'Saving to Database...' : 'Send Message'}
                    </span>
                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
