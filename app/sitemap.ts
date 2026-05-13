import type { MetadataRoute } from "next";

const BASE_URL = "https://fitbodyatlas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  return [
    // ── Homepage ──────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // ── Core Sections ─────────────────────────────────────────────
    {
      url: `${BASE_URL}/exercises`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/workouts`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/diet`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nutrition`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/workout-plans`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },

    // ── Workout Categories (High-value SEO pages) ─────────────────
    {
      url: `${BASE_URL}/workouts/chest`,
      lastModified: lastMonth,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/workouts/back`,
      lastModified: lastMonth,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/workouts/legs`,
      lastModified: lastMonth,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/workouts/shoulders`,
      lastModified: lastMonth,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/workouts/arms`,
      lastModified: lastMonth,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/workouts/core`,
      lastModified: lastMonth,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Blog Articles ─────────────────────────────────────────────
    {
      url: `${BASE_URL}/blog/high-protein-vegetarian-foods`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/push-pull-legs-routine`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/chest-workout-beginners-home`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/pre-workout-meals-india`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // ── Trust & Company Pages ─────────────────────────────────────
    {
      url: `${BASE_URL}/about`,
      lastModified: lastMonth,
      changeFrequency: "yearly",
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: lastMonth,
      changeFrequency: "yearly",
      priority: 0.55,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: lastMonth,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: lastMonth,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/editorial`,
      lastModified: lastMonth,
      changeFrequency: "yearly",
      priority: 0.45,
    },
  ];
}
