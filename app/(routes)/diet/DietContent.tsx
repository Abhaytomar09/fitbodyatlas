"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Apple, ArrowRight, CheckCircle, Flame } from "lucide-react";

const DIET_PLANS = [
  {
    id: "veg-muscle-gain",
    title: "Vegetarian Muscle Gain Diet",
    type: "veg",
    goal: "muscle-gain",
    calories: 2800,
    protein: "160g",
    description: "High protein vegetarian plan for muscle building using paneer, dal, and legumes.",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    glow: "rgba(16,185,129,0.3)",
    popular: true,
  },
  {
    id: "non-veg-muscle",
    title: "Non-Veg High Protein Diet",
    type: "non-veg",
    goal: "muscle-gain",
    calories: 2800,
    protein: "200g",
    description: "Chicken and egg-based muscle building diet optimized for Indian taste.",
    gradient: "linear-gradient(135deg, #FF6B35, #FF4500)",
    glow: "rgba(255,107,53,0.3)",
    popular: true,
  },
  {
    id: "veg-fat-loss",
    title: "Vegetarian Fat Loss Diet",
    type: "veg",
    goal: "fat-loss",
    calories: 1800,
    protein: "140g",
    description: "Low calorie, high protein vegetarian plan for sustainable fat loss.",
    gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    glow: "rgba(59,130,246,0.3)",
    popular: false,
  },
  {
    id: "non-veg-fat-loss",
    title: "Non-Veg Fat Loss Diet",
    type: "non-veg",
    goal: "fat-loss",
    calories: 1800,
    protein: "170g",
    description: "Lean protein-based fat loss plan with chicken, fish, and eggs.",
    gradient: "linear-gradient(135deg, #7C3AED, #5B21B6)",
    glow: "rgba(124,58,237,0.3)",
    popular: false,
  },
  {
    id: "indian-veg-gym",
    title: "Indian Vegetarian Gym Diet",
    type: "veg",
    goal: "muscle-gain",
    calories: 2600,
    protein: "150g",
    description: "Traditional Indian veg foods — roti, dal, paneer, milk — for gym performance.",
    gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
    glow: "rgba(245,158,11,0.3)",
    popular: false,
  },
  {
    id: "chicken-diet",
    title: "Chicken Bodybuilding Diet",
    type: "non-veg",
    goal: "muscle-gain",
    calories: 3000,
    protein: "220g",
    description: "Chicken-focused muscle building plan with brown rice, oats, and eggs.",
    gradient: "linear-gradient(135deg, #EF4444, #DC2626)",
    glow: "rgba(239,68,68,0.3)",
    popular: false,
  },
];

const GOAL_TIPS: Record<string, { title: string; tips: string[]; color: string }> = {
  "muscle-gain": {
    title: "For Muscle Gain",
    color: "#FF6B35",
    tips: [
      "Calorie surplus of 200–300 kcal above maintenance",
      "Protein: 1.6–2.2g per kg bodyweight",
      "Adequate carbs for energy and recovery",
      "5–6 smaller meals spread through the day",
    ],
  },
  "fat-loss": {
    title: "For Fat Loss",
    color: "#10B981",
    tips: [
      "Calorie deficit of 300–500 kcal below maintenance",
      "Very high protein to preserve muscle mass",
      "Moderate carbs, prioritize complex sources",
      "3–4 meals per day with controlled portions",
    ],
  },
};

export function DietContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #0F2A1E 100%)" }}
      >
        <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="badge badge-green mb-4 inline-block">
              <Apple size={11} /> Diet Plans
            </span>
            <h1
              className="text-4xl md:text-6xl font-display font-black text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
            >
              Indian Diet Plans{" "}
              <span style={{ color: "#10B981" }}>for Every Goal</span>
            </h1>
            <p className="text-xl max-w-2xl" style={{ color: "rgba(156,163,175,0.85)" }}>
              Expert veg &amp; non-veg diet plans using traditional Indian foods. Designed for muscle gain, fat loss, and overall health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diet Plans Grid */}
      <section className="section-pad section-dark">
        <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          <h2
            className="text-3xl font-display font-bold text-white mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Choose Your Diet Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIET_PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/diet/${plan.id}`} className="block h-full">
                  <article
                    className="relative h-full p-6 rounded-2xl transition-all duration-300 group"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-5px)";
                      el.style.borderColor = plan.glow.replace("0.3", "0.5");
                      el.style.boxShadow = `0 20px 50px ${plan.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {plan.popular && (
                      <span
                        className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold"
                        style={{ background: "rgba(255,107,53,0.15)", color: "#FF6B35", border: "1px solid rgba(255,107,53,0.3)" }}
                      >
                        Popular
                      </span>
                    )}

                    {/* Type + Goal badges */}
                    <div className="flex gap-2 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold capitalize"
                        style={{
                          background: plan.type === "veg" ? "rgba(16,185,129,0.15)" : "rgba(255,107,53,0.15)",
                          color: plan.type === "veg" ? "#10B981" : "#FF6B35",
                        }}
                      >
                        {plan.type === "veg" ? "🌿 Veg" : "🍗 Non-Veg"}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold capitalize"
                        style={{ background: "rgba(59,130,246,0.15)", color: "#3B82F6" }}
                      >
                        {plan.goal.replace("-", " ")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-display font-bold text-white mb-2 group-hover:text-orange-400 transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {plan.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "rgba(156,163,175,0.8)" }}>
                      {plan.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mb-4">
                      <div>
                        <p
                          className="text-2xl font-display font-black"
                          style={{ fontFamily: "'Outfit', sans-serif", color: "#FF6B35" }}
                        >
                          {plan.calories}
                        </p>
                        <p className="text-xs" style={{ color: "rgba(107,114,128,0.9)" }}>kcal/day</p>
                      </div>
                      <div>
                        <p
                          className="text-2xl font-display font-black"
                          style={{ fontFamily: "'Outfit', sans-serif", color: "#10B981" }}
                        >
                          {plan.protein}
                        </p>
                        <p className="text-xs" style={{ color: "rgba(107,114,128,0.9)" }}>protein/day</p>
                      </div>
                    </div>

                    <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#FF6B35" }}>
                      View Full Plan <ArrowRight size={14} />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Guide */}
      <section className="section-pad section-card">
        <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          <h2
            className="text-3xl font-display font-bold text-white mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Choose Your Diet Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(GOAL_TIPS).map((g) => (
              <div
                key={g.title}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${g.color}25`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Flame size={20} style={{ color: g.color }} />
                  <h3
                    className="text-lg font-display font-bold text-white"
                    style={{ fontFamily: "'Outfit', sans-serif", color: g.color }}
                  >
                    {g.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {g.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm" style={{ color: "rgba(156,163,175,0.85)" }}>
                      <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: g.color }} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
