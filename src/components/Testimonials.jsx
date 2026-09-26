import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquarePlus, Send, CheckCircle2, Sparkles, User, Building, Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';
import GrainCard from './GrainCard';
import NoiseGrain from './NoiseGrain';

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  // Fetch reviews from Supabase table 'reviews'
  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoadingReviews(true);
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.warn('Supabase reviews fetch note:', error.message);
        } else if (data && data.length > 0) {
          setReviews(data);
        }
      } catch (err) {
        console.error('Error loading reviews:', err);
      } finally {
        setLoadingReviews(false);
      }
    }

    fetchReviews();
  }, []);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    setSubmitting(true);
    const newReview = {
      name: name.trim(),
      role: role.trim() || 'Visitor / Client',
      rating: rating,
      quote: quote.trim(),
      created_at: new Date().toISOString(),
    };

    try {
      // 1. Insert into Supabase table 'reviews'
      const { data, error } = await supabase.from('reviews').insert([newReview]).select();

      if (error) {
        console.warn('Supabase review insert warning (falling back to live local state):', error.message);
      }

      // 2. Add to live UI state immediately so review reflects on website!
      setReviews((prev) => [data && data[0] ? data[0] : newReview, ...prev]);
      setSubmitted(true);
      setName('');
      setRole('');
      setQuote('');
      setRating(5);
    } catch (err) {
      console.error('Error submitting review:', err);
      // Fallback local update
      setReviews((prev) => [newReview, ...prev]);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#0A0A0F]/90">
      {/* Background ambient glow */}
      <div className="glow-blob-cyan bottom-10 left-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 text-[#7F5AF0] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Community & Client Feedback
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#F5F5F7]"
          >
            Leave A Review
          </motion.h2>

          <p className="mt-4 text-[#8A8A99] text-base max-w-xl mx-auto">
            Share your feedback, project thoughts, or leave a review to reflect live on this portfolio wall.
          </p>

          {/* Action to Toggle Review Submission Form */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                setFormOpen(!formOpen);
                setSubmitted(false);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7F5AF0] hover:bg-[#6b46e5] text-white font-semibold text-sm shadow-[0_0_20px_rgba(127,90,240,0.4)] transition-all transform hover:scale-105"
            >
              <MessageSquarePlus className="w-4 h-4" />
              {formOpen ? 'Hide Review Form' : 'Write A Review / Feedback'}
            </button>
          </div>
        </div>

        {/* Interactive Review Form Drawer */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl mx-auto mb-16 overflow-hidden"
            >
              <div className="p-8 rounded-3xl bg-[#12121A] border border-[#7F5AF0]/40 shadow-2xl backdrop-blur-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#2CB67D]/20 border border-[#2CB67D] text-[#2CB67D] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(44,182,125,0.4)]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#F5F5F7]">
                      Review Added to Portfolio Wall!
                    </h3>
                    <p className="text-[#8A8A99] text-xs max-w-md mx-auto">
                      Thank you! Your feedback has been stored and is now reflected live on the website below.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-[#F5F5F7] hover:border-[#7F5AF0] transition-colors"
                    >
                      Submit Another Entry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-5">
                    <h3 className="font-heading text-lg font-bold text-[#F5F5F7] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00E5FF]" /> Add Your Review
                    </h3>

                    {/* Star Rating Picker */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A99] mb-2">
                        Your Rating
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 focus:outline-none transition-transform hover:scale-125"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                star <= (hoverRating || rating)
                                  ? 'fill-[#00E5FF] text-[#00E5FF]'
                                  : 'text-[#8A8A99]/40'
                              }`}
                            />
                          </button>
                        ))}
                        <span className="text-xs text-[#00E5FF] font-semibold ml-2">
                          {rating} / 5 Stars
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A99] mb-1.5">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#8A8A99] absolute left-3.5 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sarah Jenkins"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] text-xs focus:outline-none focus:border-[#7F5AF0] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Role / Business */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A99] mb-1.5">
                          Role / Business Name
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-[#8A8A99] absolute left-3.5 top-3" />
                          <input
                            type="text"
                            placeholder="e.g. Founder @ TechApp"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] text-xs focus:outline-none focus:border-[#7F5AF0] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A8A99] mb-1.5">
                        Your Review / Feedback *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Write your review or feedback about Yash's portfolio, design style, or work..."
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F5F5F7] text-xs focus:outline-none focus:border-[#7F5AF0] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      onMouseEnter={() => setBtnHover(true)}
                      onMouseLeave={() => setBtnHover(false)}
                      className="relative group overflow-hidden w-full py-3 rounded-xl bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] text-white font-semibold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <NoiseGrain opacity={0.2} isHovered={btnHover} />
                      <span className="relative z-10">
                        {submitting ? 'Publishing Review...' : 'Publish Review Live'}
                      </span>
                      <Send className="w-3.5 h-3.5 relative z-10" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Review Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.length === 0 && !loadingReviews ? (
            <div className="col-span-full text-center py-12 bg-[#12121A]/40 rounded-3xl border border-white/5">
              <Quote className="w-10 h-10 text-[#7F5AF0]/40 mx-auto mb-3" />
              <p className="text-[#8A8A99] text-sm">
                No reviews submitted yet. Be the first to leave a review above!
              </p>
            </div>
          ) : (
            reviews.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GrainCard accentColor="purple" className="p-7 h-full flex flex-col justify-between">
                  <div>
                    {/* Rating & Quote Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1 text-[#00E5FF]">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#00E5FF] text-[#00E5FF]" />
                        ))}
                      </div>
                      <Quote className="w-7 h-7 text-[#7F5AF0]/40" />
                    </div>

                    {/* Review Body */}
                    <p className="text-[#F5F5F7] text-xs leading-relaxed italic mb-6">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-heading font-bold text-xs text-[#F5F5F7] flex items-center gap-1.5">
                        {item.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2CB67D]" />
                      </div>
                      <div className="text-[11px] text-[#8A8A99]">{item.role || 'Visitor'}</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7F5AF0] to-[#00E5FF] flex items-center justify-center font-bold text-xs text-white">
                      {item.name ? item.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  </div>
                </GrainCard>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
