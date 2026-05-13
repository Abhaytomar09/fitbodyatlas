import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { WorkoutsContent } from "./WorkoutsContent";

export const metadata: Metadata = {
  title: "Workout Plans & Guides — Chest, Back, Legs, Shoulders | FitBodyAtlas",
  description:
    "Expert workout plans for every body part — chest, back, legs, shoulders, arms, and core. Complete beginner to advanced guides with sets, reps, and exercise instructions for Indian gym-goers.",
  keywords: [
    "workout plans India",
    "chest workout India",
    "back workout plan",
    "leg workout guide",
    "beginner gym workout India",
    "workout for muscle gain",
    "push pull legs India",
    "body part workout guide",
  ],
  alternates: { canonical: "https://fitbodyatlas.com/workouts" },
  openGraph: {
    title: "Workout Plans — Chest, Back, Legs & More | FitBodyAtlas",
    description:
      "Expert workout guides for every body part. From beginner to advanced — complete programs with exercises, sets, and reps.",
    url: "https://fitbodyatlas.com/workouts",
  },
};

// JSON-LD: HowTo Schema for Workout Plans
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Start a Workout Routine for Beginners in India",
  description:
    "A step-by-step guide to starting a beginner workout routine in India, including gym setup, exercise selection, and diet basics.",
  step: [
    {
      "@type": "HowToStep",
      name: "Set Your Fitness Goal",
      text: "Decide whether you want to build muscle, lose fat, or improve general fitness. This determines your workout split and diet approach.",
    },
    {
      "@type": "HowToStep",
      name: "Choose a Workout Split",
      text: "Beginners should start with a Full Body 3-day split (Monday/Wednesday/Friday). Intermediate lifters can use Push/Pull/Legs (PPL) or Upper/Lower splits.",
    },
    {
      "@type": "HowToStep",
      name: "Learn the Core Exercises",
      text: "Master the 5 fundamental movements: Squat, Deadlift, Bench Press, Overhead Press, and Pull-ups/Rows. These build the most muscle efficiently.",
    },
    {
      "@type": "HowToStep",
      name: "Progress Overload Every Week",
      text: "Add 2.5kg to your lifts each week, or increase reps within your target range (8–12 reps). Progressive overload is the key to muscle growth.",
    },
    {
      "@type": "HowToStep",
      name: "Support with Proper Nutrition",
      text: "Eat in a caloric surplus with 1.6–2g protein per kg bodyweight for muscle gain. Use our TDEE Calculator to find your exact calorie target.",
    },
  ],
  totalTime: "PT45M",
  supply: [
    { "@type": "HowToSupply", name: "Gym membership or home gym equipment" },
    { "@type": "HowToSupply", name: "Workout tracking app or notebook" },
  ],
};

export default function WorkoutsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Header />
      <main id="main-content">
        <WorkoutsContent />
      </main>
      <Footer />
    </>
  );
}
