import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ExercisesContent } from "./ExercisesContent";

export const metadata: Metadata = {
  title: "Exercise Database — 1000+ Exercises with Instructions | FitBodyAtlas",
  description:
    "Browse 1000+ exercises for chest, back, legs, shoulders, arms, and abs. Each exercise includes step-by-step instructions, muscle groups, difficulty level, and common mistakes to avoid.",
  keywords: [
    "exercise database India",
    "gym exercises list",
    "chest exercises",
    "back exercises India",
    "leg exercises guide",
    "shoulder exercises",
    "arm exercises India",
    "best exercises for muscle gain",
    "exercises for weight loss India",
    "how to do deadlift",
    "how to do squat correctly",
    "push ups variations",
  ],
  alternates: { canonical: "https://fitbodyatlas.com/exercises" },
  openGraph: {
    title: "Exercise Database — 1000+ Exercises | FitBodyAtlas",
    description:
      "Step-by-step exercise guides for every muscle group. Find the perfect exercise with filters by body part, equipment, and difficulty.",
    url: "https://fitbodyatlas.com/exercises",
  },
};

// JSON-LD: ItemList Schema for Exercise Database
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "FitBodyAtlas Exercise Database",
  description: "India's most comprehensive exercise database with 1000+ exercises",
  url: "https://fitbodyatlas.com/exercises",
  numberOfItems: 1000,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Dumbbell Bench Press",
      url: "https://fitbodyatlas.com/exercises/bench-press",
      description: "Primary chest exercise using dumbbells targeting the pectorals, triceps, and anterior deltoids.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Barbell Back Squat",
      url: "https://fitbodyatlas.com/exercises/squat",
      description: "King of leg exercises targeting quads, glutes, and hamstrings with a barbell.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Conventional Deadlift",
      url: "https://fitbodyatlas.com/exercises/deadlift",
      description: "Full body compound movement targeting the entire posterior chain.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Pull-ups",
      url: "https://fitbodyatlas.com/exercises/pull-ups",
      description: "Bodyweight exercise for building lat width and back strength.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Push-ups",
      url: "https://fitbodyatlas.com/exercises/pushups",
      description: "Classic bodyweight chest exercise with many progression variations.",
    },
  ],
};

export default function ExercisesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header />
      <main id="main-content">
        <ExercisesContent />
      </main>
      <Footer />
    </>
  );
}
