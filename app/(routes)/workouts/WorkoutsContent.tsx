"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dumbbell, ArrowRight, TrendingUp, Activity, Target } from "lucide-react";

const WORKOUT_CATEGORIES = [
  {
    id: "chest",
    title: "Chest Workouts",
    description: "Build a powerful, wide chest with these targeted exercises and programs.",
    icon: Dumbbell,
    color: "#FF6B35",
    gradient: "linear-gradient(135deg, #FF6B35, #FF4500)",
    workouts: [
      "Beginner Chest Workout",
      "Upper Chest Exercises",
      "Lower Chest Exercises",
      "Chest Workout at Home",
      "Chest Workout with Dumbbells",
    ],
  },
  {
    id: "back",
    title: "Back Workouts",
    description: "Develop a thick, wide back with compound pulls and isolation work.",
    icon: TrendingUp,
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    workouts: [
      "Lat Workouts",
      "Lower Back Exercises",
      "Pull Workouts",
      "Back Thickness Workout",
      "Deadlift Variations",
    ],
  },
  {
    id: "legs",
    title: "Leg Workouts",
    description: "Build powerful quads, hamstrings, and glutes with science-based programs.",
    icon: Activity,
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    workouts: [
      "Quad Exercises",
      "Hamstring Workouts",
      "Glute Exercises",
      "Calf Workouts",
      "Full Leg Workout",
    ],
  },
  {
    id: "shoulders",
    title: "Shoulder Workouts",
    description: "Develop 3D delts with targeted front, side, and rear delt exercises.",
    icon: Target,
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #5B21B6)",
    workouts: [
      "Lateral Raise Exercises",
      "Rear Delt Workout",
      "Overhead Press Guide",
      "Shoulder Width Workout",
      "Boulder Shoulders Program",
    ],
  },
  {
    id: "arms",
    title: "Arm Workouts",
    description: "Build sleeve-stretching arms with bicep and tricep focused workouts.",
    icon: Dumbbell,
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
    workouts: [
      "Bicep Curl Variations",
      "Tricep Pushdown Guide",
      "21s Bicep Workout",
      "Tricep Dip Progressions",
      "Forearm Exercises",
    ],
  },
  {
    id: "abs",
    title: "Core & Abs",
    description: "Build a strong core with targeted ab exercises and functional movements.",
    icon: Activity,
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #0891B2)",
    workouts: [
      "Plank Variations",
      "Hanging Leg Raises",
      "Cable Crunches",
      "Ab Wheel Rollout",
      "Core Strength Program",
    ],
  },
];

export function WorkoutsContent() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #1B2A4A 100%)" }}
      >
        <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="badge badge-orange mb-4 inline-block">
              <Dumbbell size={11} /> Workout Library
            </span>
            <h1
              className="text-4xl md:text-6xl font-display font-black text-white mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
            >
              Workout Plans &amp;{" "}
              <span className="gradient-text-orange">Guides</span>
            </h1>
            <p className="text-xl max-w-2xl" style={{ color: "rgba(156,163,175,0.85)" }}>
              Expert-designed workout plans for every body part — from beginner to advanced. All programs include sets, reps, and video cues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-pad section-dark">
        <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {WORKOUT_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div
                    className="p-6 rounded-2xl transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${cat.color}40`;
                      el.style.boxShadow = `0 10px 40px ${cat.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: cat.gradient }}
                      >
                        <Icon size={22} className="text-white" />
                      </div>
                      <div>
                        <Link href={`/workouts/${cat.id}`}>
                          <h2
                            className="text-xl font-display font-bold text-white hover:underline"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            {cat.title}
                          </h2>
                        </Link>
                        <p className="text-sm" style={{ color: "rgba(107,114,128,0.9)" }}>
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {cat.workouts.map((w, j) => (
                        <li key={j}>
                          <Link
                            href={`/workouts/${cat.id}`}
                            className="flex items-center gap-2 text-sm py-1.5 transition-colors"
                            style={{ color: "rgba(156,163,175,0.85)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = cat.color; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(156,163,175,0.85)"; }}
                          >
                            <ArrowRight size={14} style={{ color: cat.color }} />
                            {w}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/workouts/${cat.id}`}
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold"
                      style={{ color: cat.color }}
                    >
                      View All {cat.title} <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
