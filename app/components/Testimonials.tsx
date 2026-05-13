"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    city: "Mumbai",
    role: "Software Engineer",
    transformation: "Lost 15 kg in 4 months",
    transformationType: "fat-loss",
    comment: "The workout plans and Indian diet guides are absolutely perfect. I lost 15kg using the veg diet plan and TDEE calculator. Best fitness platform I've found!",
    rating: 5,
    avatar: "RK",
    avatarColor: "#FF6B35",
  },
  {
    id: 2,
    name: "Priya Singh",
    city: "Delhi",
    role: "College Student",
    transformation: "Gained 8 kg muscle",
    transformationType: "muscle-gain",
    comment: "Love the beginner-friendly workouts and the Indian vegetarian diet plans. Finally found guidance that actually works for Indian food. Highly recommended!",
    rating: 5,
    avatar: "PS",
    avatarColor: "#10B981",
  },
  {
    id: 3,
    name: "Amit Patel",
    city: "Bangalore",
    role: "Business Owner",
    transformation: "Complete transformation in 6 months",
    transformationType: "recomposition",
    comment: "The exercise database is comprehensive and the TDEE calculator helped me nail my calories. FitBodyAtlas is my go-to fitness resource now.",
    rating: 5,
    avatar: "AP",
    avatarColor: "#3B82F6",
  },
];

const TRANSFORM_COLOR: Record<string, string> = {
  "fat-loss": "#FF6B35",
  "muscle-gain": "#10B981",
  "recomposition": "#3B82F6",
};

export function Testimonials() {
  return (
    <section className="section-pad section-card" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-green mb-4 inline-block"
          >
            <TrendingUp size={11} /> Success Stories
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Real{" "}
            <span className="gradient-text-teal">Transformations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: "rgba(156,163,175,0.85)" }}
          >
            Thousands of Indians have transformed their fitness journey with FitBodyAtlas.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <blockquote
                className="h-full p-6 rounded-2xl flex flex-col transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.borderColor = `${t.avatarColor}40`;
                  el.style.boxShadow = `0 15px 40px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Quote icon */}
                <Quote size={28} className="mb-4 opacity-30" style={{ color: t.avatarColor }} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" style={{ color: "#F59E0B" }} />
                  ))}
                </div>

                {/* Comment */}
                <p className="flex-1 text-sm leading-relaxed mb-6 italic" style={{ color: "rgba(209,213,219,0.85)" }}>
                  &ldquo;{t.comment}&rdquo;
                </p>

                {/* Author */}
                <footer
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}88)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(107,114,128,0.9)" }}>
                      {t.role} • {t.city}
                    </p>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: TRANSFORM_COLOR[t.transformationType] || t.avatarColor }}
                    >
                      ✓ {t.transformation}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
