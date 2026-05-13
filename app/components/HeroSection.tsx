"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dumbbell, Apple, Calculator, BookOpen, ArrowRight,
  Shield, Star, TrendingUp, Users, Zap, CheckCircle
} from "lucide-react";
import { useEffect, useState } from "react";

function CountUp({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span>{count.toLocaleString("en-IN")}{suffix}</span>;
}

const STATS = [
  { value: 1000, suffix: "+", label: "Exercises", icon: Dumbbell, color: "#FF6B35" },
  { value: 50, suffix: "+", label: "Diet Plans", icon: Apple, color: "#10B981" },
  { value: 6, suffix: "", label: "Calculators", icon: Calculator, color: "#3B82F6" },
  { value: 100, suffix: "K+", label: "Users Helped", icon: Users, color: "#7C3AED" },
];

const FEATURES = [
  { icon: Dumbbell, label: "Body-part specific workouts", color: "text-orange-400" },
  { icon: Apple, label: "Veg & Non-veg Indian diet plans", color: "text-green-400" },
  { icon: Calculator, label: "TDEE & Macro calculators", color: "text-blue-400" },
  { icon: BookOpen, label: "Beginner fitness guides", color: "text-purple-400" },
];

const TRUST_BADGES = [
  { icon: Shield, label: "Expert Reviewed" },
  { icon: Star, label: "Science Backed" },
  { icon: CheckCircle, label: "India Focused" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-pattern"
      style={{ background: "var(--gradient-hero)" }}
      aria-label="FitBodyAtlas Hero"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.3), transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,170,0.25), transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-24 pb-16" style={{ maxWidth: "1280px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Trust badge row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {TRUST_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={badge.label}
                    className="badge badge-orange flex items-center gap-1.5"
                  >
                    <Icon size={12} />
                    {badge.label}
                  </span>
                );
              })}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-[1.1]"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
            >
              Build Muscle,{" "}
              <br />
              Lose Fat &{" "}
              <br />
              <span className="gradient-text-orange">Train Smarter</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{ color: "rgba(209,213,219,0.85)" }}
            >
              India&apos;s complete fitness platform — 1000+ exercises, body-part workouts,
              veg &amp; non-veg diet plans, and interactive fitness calculators.
            </motion.p>

            {/* Feature list */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-3 mb-10"
              aria-label="Key features"
            >
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li key={feature.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <Icon size={16} className={feature.color} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "rgba(229,231,235,0.9)" }}>
                      {feature.label}
                    </span>
                  </li>
                );
              })}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/workouts" className="btn-primary">
                <Dumbbell size={18} />
                Start Workouts
                <ArrowRight size={16} />
              </Link>
              <Link href="/exercises" className="btn-secondary">
                <Zap size={18} />
                Explore Exercises
              </Link>
            </motion.div>
          </div>

          {/* Right: Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main stats card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="text-center mb-8">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    color: "#10B981",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Live Platform Stats
                </div>
                <p className="text-3xl font-display font-black gradient-text-orange" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  India&apos;s #1 Fitness Hub
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {STATS.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="stat-card"
                    >
                      <Icon size={24} className="mx-auto mb-2" style={{ color: stat.color }} />
                      <div
                        className="text-2xl font-display font-black"
                        style={{ fontFamily: "'Outfit', sans-serif", color: stat.color }}
                      >
                        <CountUp target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs mt-1" style={{ color: "rgba(156,163,175,0.8)" }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                {[
                  { label: "Exercise Coverage", value: 92, color: "#FF6B35" },
                  { label: "Diet Plan Variety", value: 88, color: "#10B981" },
                  { label: "User Satisfaction", value: 97, color: "#3B82F6" },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs mb-1.5" style={{ color: "rgba(156,163,175,0.8)" }}>
                      <span>{bar.label}</span>
                      <span style={{ color: bar.color }}>{bar.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${bar.value}%` }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${bar.color}, ${bar.color}88)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 glass-card px-4 py-3 rounded-xl hidden md:flex items-center gap-2"
            >
              <TrendingUp size={18} className="text-green-400" />
              <div>
                <p className="text-xs font-bold text-white">Growing Daily</p>
                <p className="text-xs" style={{ color: "rgba(156,163,175,0.8)" }}>+500 users/week</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(156,163,175,0.5)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(255,107,53,0.6), transparent)" }} />
      </motion.div>
    </section>
  );
}
