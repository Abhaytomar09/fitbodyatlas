"use client";

import { useState } from "react";
import { Mail, CheckCircle, ArrowRight, Gift, FileText, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BENEFITS = [
  { icon: FileText, text: "30-day beginner workout plan PDF", color: "#FF6B35" },
  { icon: Gift, text: "Indian muscle gain diet plan PDF", color: "#10B981" },
  { icon: BarChart3, text: "Exclusive workout tracking sheet", color: "#3B82F6" },
  { icon: CheckCircle, text: "Weekly expert fitness tips & updates", color: "#7C3AED" },
];

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setEmail(""); setSubmitted(false); }, 4000);
  };

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(0,212,170,0.05) 50%, rgba(59,130,246,0.08) 100%)",
        borderTop: "1px solid rgba(255,107,53,0.1)",
        borderBottom: "1px solid rgba(0,212,170,0.1)",
      }}
      aria-labelledby="newsletter-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #FF6B35, transparent)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00D4AA, transparent)" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10" style={{ maxWidth: "900px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <span className="badge badge-orange mb-6 inline-block">
            <Gift size={11} /> Free Resources
          </span>

          {/* Heading */}
          <h2
            id="newsletter-heading"
            className="text-4xl md:text-5xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Get{" "}
            <span className="gradient-text-orange">Free Fitness Resources</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(156,163,175,0.85)" }}>
            Join 50,000+ Indian fitness enthusiasts and get instant access to expert guides.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto text-left">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${benefit.color}20`, border: `1px solid ${benefit.color}40` }}
                  >
                    <Icon size={15} style={{ color: benefit.color }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "rgba(229,231,235,0.9)" }}>
                    {benefit.text}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            aria-label="Newsletter signup form"
          >
            <div className="flex-1 relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "rgba(107,114,128,0.8)" }}
              />
              <input
                id="email-capture"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,107,53,0.5)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get Free Access <ArrowRight size={16} />
            </button>
          </form>

          {/* Privacy note */}
          <p className="text-xs mt-4" style={{ color: "rgba(107,114,128,0.7)" }}>
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>

          {/* Success */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mt-6 flex items-center justify-center gap-2 font-semibold"
                style={{ color: "#10B981" }}
              >
                <CheckCircle size={20} />
                Resources sent! Check your inbox.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
