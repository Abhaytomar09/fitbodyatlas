"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Filter, Dumbbell } from "lucide-react";
import { useState } from "react";

const EXERCISES = [
  { id: "bench-press", name: "Dumbbell Bench Press", category: "chest", difficulty: "beginner", muscleGroups: "Chest, Triceps, Shoulders" },
  { id: "squat", name: "Barbell Back Squat", category: "legs", difficulty: "intermediate", muscleGroups: "Quads, Glutes, Hamstrings" },
  { id: "deadlift", name: "Conventional Deadlift", category: "back", difficulty: "intermediate", muscleGroups: "Back, Glutes, Hamstrings" },
  { id: "pushups", name: "Push-ups", category: "chest", difficulty: "beginner", muscleGroups: "Chest, Triceps, Shoulders" },
  { id: "pull-ups", name: "Pull-ups", category: "back", difficulty: "intermediate", muscleGroups: "Lats, Back, Biceps" },
  { id: "lateral-raise", name: "Lateral Raise", category: "shoulders", difficulty: "beginner", muscleGroups: "Shoulders" },
  { id: "bicep-curl", name: "Dumbbell Bicep Curl", category: "arms", difficulty: "beginner", muscleGroups: "Biceps, Forearms" },
  { id: "tricep-pushdown", name: "Cable Tricep Pushdown", category: "arms", difficulty: "beginner", muscleGroups: "Triceps" },
  { id: "leg-press", name: "Leg Press Machine", category: "legs", difficulty: "beginner", muscleGroups: "Quads, Glutes" },
  { id: "plank", name: "Plank", category: "abs", difficulty: "beginner", muscleGroups: "Core, Abs, Lower Back" },
  { id: "overhead-press", name: "Barbell Overhead Press", category: "shoulders", difficulty: "intermediate", muscleGroups: "Shoulders, Triceps" },
  { id: "cable-row", name: "Seated Cable Row", category: "back", difficulty: "beginner", muscleGroups: "Lats, Rhomboids, Biceps" },
];

const CATEGORIES = ["all", "chest", "back", "legs", "shoulders", "arms", "abs"];

const DIFFICULTY_COLORS: Record<string, { bg: string; color: string }> = {
  beginner: { bg: "rgba(16,185,129,0.15)", color: "#10B981" },
  intermediate: { bg: "rgba(245,158,11,0.15)", color: "#F59E0B" },
  advanced: { bg: "rgba(239,68,68,0.15)", color: "#EF4444" },
};

export function ExercisesContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = EXERCISES.filter((ex) => {
    const matchCat = selectedCategory === "all" || ex.category === selectedCategory;
    const matchSearch = ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.muscleGroups.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #1B2A4A 100%)" }}
      >
        <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="badge badge-blue mb-4 inline-block">
              <Dumbbell size={11} /> Exercise Database
            </span>
            <h1
              className="text-4xl md:text-6xl font-display font-black text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
            >
              Exercise Database{" "}
              <span className="gradient-text-orange">1000+ Exercises</span>
            </h1>
            <p className="text-xl max-w-2xl" style={{ color: "rgba(156,163,175,0.85)" }}>
              Step-by-step exercise guides with instructions, muscle groups, and difficulty ratings — for every body part.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 section-card border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          {/* Search */}
          <div className="relative mb-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(107,114,128,0.8)" }} />
            <input
              type="search"
              placeholder="Search exercises by name or muscle group..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-white text-sm focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,107,53,0.4)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            />
          </div>
          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={16} style={{ color: "rgba(107,114,128,0.8)" }} />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all"
                style={{
                  background: selectedCategory === cat ? "rgba(255,107,53,0.9)" : "rgba(255,255,255,0.05)",
                  color: selectedCategory === cat ? "white" : "rgba(156,163,175,0.85)",
                  border: `1px solid ${selectedCategory === cat ? "transparent" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Grid */}
      <section className="section-pad section-dark">
        <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          {filtered.length === 0 ? (
            <p className="text-center py-20" style={{ color: "rgba(107,114,128,0.8)" }}>
              No exercises found. Try a different search or category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((ex, i) => {
                const diff = DIFFICULTY_COLORS[ex.difficulty] || DIFFICULTY_COLORS.beginner;
                return (
                  <motion.div
                    key={ex.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link href={`/exercises/${ex.id}`} className="block h-full">
                      <article
                        className="h-full rounded-2xl overflow-hidden transition-all duration-300 group"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.transform = "translateY(-4px)";
                          el.style.borderColor = "rgba(255,107,53,0.3)";
                          el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.transform = "translateY(0)";
                          el.style.borderColor = "rgba(255,255,255,0.07)";
                          el.style.boxShadow = "none";
                        }}
                      >
                        {/* Exercise thumbnail */}
                        <div
                          className="w-full h-36 flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #1B2A4A, #243B55)" }}
                        >
                          <Dumbbell size={36} style={{ color: "rgba(255,107,53,0.6)" }} />
                        </div>

                        <div className="p-4">
                          <h3
                            className="text-base font-bold text-white mb-1 group-hover:text-orange-400 transition-colors leading-snug"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            {ex.name}
                          </h3>
                          <p className="text-xs mb-3" style={{ color: "rgba(107,114,128,0.9)" }}>
                            {ex.muscleGroups}
                          </p>
                          <div className="flex items-center justify-between">
                            <span
                              className="px-2.5 py-1 rounded-full text-xs font-semibold capitalize"
                              style={{ background: diff.bg, color: diff.color }}
                            >
                              {ex.difficulty}
                            </span>
                            <ArrowRight size={16} style={{ color: "#FF6B35" }} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
