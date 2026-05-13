"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock, CheckCircle, Bookmark, TrendingUp } from "lucide-react";

const ARTICLES = [
  {
    id: 1,
    slug: "high-protein-vegetarian-foods",
    title: "Best High Protein Vegetarian Foods for Muscle Gain in India",
    excerpt: "Complete guide to plant-based protein sources every Indian vegetarian needs for optimal muscle growth.",
    category: "Nutrition",
    categoryColor: "#10B981",
    categoryBg: "rgba(16,185,129,0.12)",
    author: "Fitness Expert",
    date: "May 2025",
    readTime: "7 min read",
    verified: true,
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    tag: "Popular",
  },
  {
    id: 2,
    slug: "push-pull-legs-routine",
    title: "Push Pull Legs Routine — Complete Beginner Guide 2025",
    excerpt: "3-day PPL workout split perfect for muscle building and strength gains — with an Indian diet add-on.",
    category: "Workout Plans",
    categoryColor: "#3B82F6",
    categoryBg: "rgba(59,130,246,0.12)",
    author: "Training Coach",
    date: "May 2025",
    readTime: "9 min read",
    verified: true,
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    tag: "Trending",
  },
  {
    id: 3,
    slug: "chest-workout-beginners-home",
    title: "Chest Workout for Beginners at Home — No Equipment Needed",
    excerpt: "Build a strong, wide chest using just bodyweight exercises — perfect for beginners in India.",
    category: "Workouts",
    categoryColor: "#FF6B35",
    categoryBg: "rgba(255,107,53,0.12)",
    author: "Fitness Expert",
    date: "May 2025",
    readTime: "6 min read",
    verified: false,
    gradient: "linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)",
    tag: "Beginner",
  },
  {
    id: 4,
    slug: "pre-workout-meals-india",
    title: "Best Pre-Workout Meals for Indians — Science-Backed Guide",
    excerpt: "Optimize your performance with the right Indian food combinations before every workout session.",
    category: "Nutrition",
    categoryColor: "#F59E0B",
    categoryBg: "rgba(245,158,11,0.12)",
    author: "Nutrition Expert",
    date: "May 2025",
    readTime: "8 min read",
    verified: true,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    tag: "Science",
  },
];

export function TrendingArticles() {
  return (
    <section className="section-pad section-dark" aria-labelledby="articles-heading">
      <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge badge-teal mb-4 inline-block"
            >
              <TrendingUp size={11} /> Expert Articles
            </motion.span>
            <motion.h2
              id="articles-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-black text-white"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
            >
              Trending{" "}
              <span className="gradient-text-teal">Fitness Guides</span>
            </motion.h2>
          </div>
          <Link
            href="/blog"
            className="btn-secondary shrink-0"
          >
            All Articles <ArrowRight size={16} />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`} className="block h-full">
                <article
                  className="h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
                    el.style.borderColor = "rgba(255,107,53,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  {/* Image strip */}
                  <div
                    className="relative w-full h-44 flex items-end p-4"
                    style={{ background: article.gradient }}
                  >
                    {/* Tag */}
                    <span
                      className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ background: "rgba(0,0,0,0.35)", color: "white", backdropFilter: "blur(4px)" }}
                    >
                      {article.tag}
                    </span>
                    {/* Bookmark */}
                    <button
                      className="absolute top-4 left-4 p-1.5 rounded-lg transition-colors"
                      style={{ background: "rgba(0,0,0,0.3)" }}
                      aria-label="Bookmark article"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Bookmark size={14} className="text-white" />
                    </button>
                    {/* Category on image */}
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "rgba(0,0,0,0.45)", color: "white", backdropFilter: "blur(4px)" }}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    {/* Title */}
                    <h3
                      className="text-base font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-orange-400 transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="text-sm mb-4 line-clamp-2 flex-1"
                      style={{ color: "rgba(156,163,175,0.8)" }}
                    >
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(107,114,128,0.9)" }}>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User size={12} /> {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {article.readTime}
                        </span>
                      </div>
                      {article.verified && (
                        <span className="flex items-center gap-1" style={{ color: "#10B981" }}>
                          <CheckCircle size={12} /> Verified
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
