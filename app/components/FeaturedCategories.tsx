"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dumbbell, Apple, BookOpen, Zap, Calculator,
  TrendingUp, Target, Flame, Heart, Activity
} from "lucide-react";

const CATEGORIES = [
  {
    id: 1,
    title: "Chest Workouts",
    subtitle: "Build a powerful chest",
    link: "/workouts/chest",
    icon: Dumbbell,
    tag: "Strength",
    count: "15 workouts",
    gradient: "linear-gradient(135deg, #FF6B35, #FF4500)",
    glow: "rgba(255,107,53,0.4)",
  },
  {
    id: 2,
    title: "Back Workouts",
    subtitle: "Build a wide, strong back",
    link: "/workouts/back",
    icon: TrendingUp,
    tag: "Strength",
    count: "12 workouts",
    gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    glow: "rgba(59,130,246,0.4)",
  },
  {
    id: 3,
    title: "Leg Workouts",
    subtitle: "Grow powerful legs",
    link: "/workouts/legs",
    icon: Activity,
    tag: "Strength",
    count: "18 workouts",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    glow: "rgba(16,185,129,0.4)",
  },
  {
    id: 4,
    title: "Veg Diet Plans",
    subtitle: "Plant-powered muscle fuel",
    link: "/diet",
    icon: Apple,
    tag: "Nutrition",
    count: "25 plans",
    gradient: "linear-gradient(135deg, #7C3AED, #5B21B6)",
    glow: "rgba(124,58,237,0.4)",
  },
  {
    id: 5,
    title: "Non-Veg Diets",
    subtitle: "High-protein meal plans",
    link: "/diet",
    icon: Flame,
    tag: "Nutrition",
    count: "20 plans",
    gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
    glow: "rgba(245,158,11,0.4)",
  },
  {
    id: 6,
    title: "Beginner Guides",
    subtitle: "Start your fitness journey",
    link: "/workout-plans",
    icon: BookOpen,
    tag: "Beginner",
    count: "10 guides",
    gradient: "linear-gradient(135deg, #06B6D4, #0891B2)",
    glow: "rgba(6,182,212,0.4)",
  },
  {
    id: 7,
    title: "Muscle Gain",
    subtitle: "Science-based bulk plans",
    link: "/diet",
    icon: Target,
    tag: "Bulk",
    count: "15 plans",
    gradient: "linear-gradient(135deg, #EF4444, #DC2626)",
    glow: "rgba(239,68,68,0.4)",
  },
  {
    id: 8,
    title: "Weight Loss",
    subtitle: "Sustainable fat loss plans",
    link: "/diet",
    icon: Heart,
    tag: "Cut",
    count: "12 plans",
    gradient: "linear-gradient(135deg, #EC4899, #DB2777)",
    glow: "rgba(236,72,153,0.4)",
  },
];

export function FeaturedCategories() {
  return (
    <section className="section-pad section-card" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-orange mb-4 inline-block"
          >
            <Zap size={11} /> Explore Categories
          </motion.span>
          <motion.h2
            id="categories-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Choose Your{" "}
            <span className="gradient-text-orange">Fitness Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: "rgba(156,163,175,0.9)" }}
          >
            From beginner workouts to advanced diet plans — everything you need to transform.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Link href={cat.link} className="block h-full" aria-label={cat.title}>
                  <div
                    className="relative h-full p-6 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-6px)";
                      el.style.boxShadow = `0 20px 60px ${cat.glow}`;
                      el.style.borderColor = `${cat.glow.replace("0.4", "0.5")}`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    {/* Gradient glow on hover (bg) */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                      style={{ background: cat.gradient }}
                    />

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: cat.gradient, boxShadow: `0 4px 15px ${cat.glow}` }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>

                    {/* Tag */}
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3"
                      style={{
                        background: `${cat.glow}`,
                        color: "rgba(255,255,255,0.9)",
                        border: `1px solid ${cat.glow}`,
                      }}
                    >
                      {cat.tag}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-lg font-display font-bold text-white mb-1 group-hover:gradient-text-orange transition-all"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {cat.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm mb-4" style={{ color: "rgba(156,163,175,0.75)" }}>
                      {cat.subtitle}
                    </p>

                    {/* Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold" style={{ color: "rgba(107,114,128,0.9)" }}>
                        {cat.count}
                      </span>
                      <span
                        className="text-xs font-semibold group-hover:translate-x-1 transition-transform"
                        style={{ color: "#FF6B35" }}
                      >
                        View All →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
