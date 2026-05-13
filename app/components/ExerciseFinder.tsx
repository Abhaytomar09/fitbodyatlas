"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Zap } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const POPULAR_SEARCHES = ["Bench Press", "Squat", "Deadlift", "Bicep Curl", "Push-ups", "Pull-ups", "Lateral Raise", "Plank"];

const MUSCLE_GROUPS = [
  { label: "All", value: "all", color: "#FF6B35" },
  { label: "Chest", value: "chest", color: "#EF4444" },
  { label: "Back", value: "back", color: "#3B82F6" },
  { label: "Legs", value: "legs", color: "#10B981" },
  { label: "Shoulders", value: "shoulders", color: "#F59E0B" },
  { label: "Arms", value: "arms", color: "#7C3AED" },
  { label: "Abs", value: "abs", color: "#06B6D4" },
];

export function ExerciseFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/exercises?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <section className="section-pad section-dark" aria-labelledby="finder-heading">
      <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-orange mb-4 inline-block"
          >
            <Search size={11} /> Exercise Finder
          </motion.span>
          <motion.h2
            id="finder-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Find Your{" "}
            <span className="gradient-text-orange">Perfect Exercise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: "rgba(156,163,175,0.85)" }}
          >
            Search 1000+ exercises with step-by-step instructions, muscle diagrams, and difficulty ratings.
          </motion.p>
        </div>

        {/* Search Box */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSearch}
          className="relative mb-6"
        >
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2"
            style={{ color: "rgba(107,114,128,0.8)" }}
          />
          <input
            type="search"
            placeholder="Search exercises... (bench press, squat, deadlift)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-13 pr-36 py-4 rounded-xl text-white text-base focus:outline-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              paddingLeft: "52px",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,107,53,0.5)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            aria-label="Search exercises"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2 px-5 text-sm"
          >
            Search
          </button>
        </motion.form>

        {/* Muscle Group Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="group"
          aria-label="Filter by muscle group"
        >
          {MUSCLE_GROUPS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: activeFilter === filter.value ? filter.color : "rgba(255,255,255,0.05)",
                color: activeFilter === filter.value ? "white" : "rgba(156,163,175,0.85)",
                border: `1px solid ${activeFilter === filter.value ? "transparent" : "rgba(255,255,255,0.08)"}`,
              }}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl p-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: "rgba(107,114,128,0.9)" }}>
            <Zap size={14} style={{ color: "#FF6B35" }} />
            Popular Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((ex, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSearchTerm(ex)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(209,213,219,0.9)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,107,53,0.4)";
                  el.style.color = "#FF6B35";
                  el.style.background = "rgba(255,107,53,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.color = "rgba(209,213,219,0.9)";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {ex}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <Link
            href="/exercises"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
            style={{ color: "#FF6B35" }}
          >
            Browse All 1000+ Exercises <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
