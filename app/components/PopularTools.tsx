"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Weight, Calculator, Gauge, Maximize2, Award, ArrowRight } from "lucide-react";

const TOOLS = [
  {
    id: 1,
    title: "TDEE Calculator",
    description: "Find your Total Daily Energy Expenditure — the #1 number for fat loss or muscle gain.",
    icon: Zap,
    gradient: "linear-gradient(135deg, #F59E0B, #FF6B35)",
    glow: "rgba(245,158,11,0.35)",
    link: "/tools",
    tag: "Most Popular",
  },
  {
    id: 2,
    title: "Protein Calculator",
    description: "Daily protein requirements personalized to your body weight and fitness goal.",
    icon: Weight,
    gradient: "linear-gradient(135deg, #EF4444, #EC4899)",
    glow: "rgba(239,68,68,0.3)",
    link: "/tools",
    tag: null,
  },
  {
    id: 3,
    title: "BMI Calculator",
    description: "Check your Body Mass Index and understand what it means for your health.",
    icon: Gauge,
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
    glow: "rgba(59,130,246,0.3)",
    link: "/tools",
    tag: null,
  },
  {
    id: 4,
    title: "Macro Calculator",
    description: "Get your perfect carbs, protein, and fat breakdown for your specific goal.",
    icon: Calculator,
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    glow: "rgba(16,185,129,0.3)",
    link: "/tools",
    tag: null,
  },
  {
    id: 5,
    title: "Workout Split Generator",
    description: "Generate a personalized workout split based on your schedule and experience.",
    icon: Maximize2,
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
    glow: "rgba(124,58,237,0.3)",
    link: "/tools",
    tag: "New",
  },
  {
    id: 6,
    title: "One Rep Max (1RM)",
    description: "Estimate your maximum lift for bench press, squat, deadlift, and more.",
    icon: Award,
    gradient: "linear-gradient(135deg, #6366F1, #3B82F6)",
    glow: "rgba(99,102,241,0.3)",
    link: "/tools",
    tag: null,
  },
];

export function PopularTools() {
  return (
    <section className="section-pad section-accent" aria-labelledby="tools-heading">
      <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-orange mb-4 inline-block"
          >
            <Calculator size={11} /> Free Tools
          </motion.span>
          <motion.h2
            id="tools-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Free Fitness{" "}
            <span className="gradient-text-orange">Calculators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: "rgba(156,163,175,0.85)" }}
          >
            Science-backed tools to optimize your workouts and nutrition — 100% free, no signup needed.
          </motion.p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href={tool.link} className="block h-full">
                  <div
                    className="relative h-full p-6 rounded-2xl flex flex-col transition-all duration-300 group"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-5px)";
                      el.style.boxShadow = `0 20px 50px ${tool.glow}`;
                      el.style.borderColor = tool.glow.replace("0.3", "0.4").replace("0.35", "0.4");
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    {/* Tag */}
                    {tool.tag && (
                      <span
                        className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: "rgba(255,107,53,0.15)",
                          color: "#FF6B35",
                          border: "1px solid rgba(255,107,53,0.25)",
                        }}
                      >
                        {tool.tag}
                      </span>
                    )}

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: tool.gradient, boxShadow: `0 6px 20px ${tool.glow}` }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-display font-bold text-white mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {tool.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm flex-1 mb-5" style={{ color: "rgba(156,163,175,0.8)" }}>
                      {tool.description}
                    </p>

                    {/* CTA */}
                    <span
                      className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
                      style={{ color: "#FF6B35" }}
                    >
                      Use Calculator <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/tools" className="btn-primary">
            <Calculator size={18} /> View All Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
