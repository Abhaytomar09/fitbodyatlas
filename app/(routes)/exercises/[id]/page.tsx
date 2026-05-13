"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useState } from "react";
import Link from "next/link";

export default function ExerciseDetailPage({ params }: { params: { id: string } }) {
  const exerciseId = params.id;

  // Sample data
  const exerciseData: Record<string, any> = {
    "bench-press": {
      name: "Dumbbell Bench Press",
      muscles: ["Chest", "Triceps", "Shoulders"],
      difficulty: "Beginner",
      equipment: ["Dumbbells", "Bench"],
      steps: [
        "Lie flat on a bench with a dumbbell in each hand at shoulder height",
        "Press the dumbbells upward until arms are fully extended",
        "Lower slowly back to shoulder height",
        "Repeat for desired reps",
      ],
      mistakes: [
        "Bouncing the weights",
        "Not maintaining control on descent",
        "Using too much weight too soon",
      ],
      variations: [
        "Incline Dumbbell Press",
        "Decline Dumbbell Press",
        "Close Grip Dumbbell Press",
      ],
      setsReps: "4 sets × 8-12 reps",
      rest: "90 seconds",
    },
    "barbell-squat": {
      name: "Barbell Back Squat",
      muscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
      difficulty: "Intermediate",
      equipment: ["Barbell", "Rack"],
      steps: [
        "Place barbell across shoulders with feet shoulder-width apart",
        "Keep chest up and back straight throughout",
        "Descend by bending hips and knees until parallel to ground",
        "Drive through heels to return to starting position",
      ],
      mistakes: [
        "Knees caving inward",
        "Excessive forward lean",
        "Not reaching parallel depth",
      ],
      variations: [
        "Front Squat",
        "Goblet Squat",
        "Bulgarian Split Squat",
        "Hack Squat",
      ],
      setsReps: "4 sets × 6-8 reps",
      rest: "2 minutes",
    },
  };

  const exercise = exerciseData[exerciseId] || exerciseData["bench-press"];

  const [activeTab, setActiveTab] = useState("instructions");

  return (
    <>
      <Header />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/exercises" className="text-blue-200 hover:text-white mb-4 inline-block">
              ← Back to Exercises
            </Link>
            <h1 className="text-5xl font-bold">{exercise.name}</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b-2 border-gray-200">
                  {["instructions", "mistakes", "variations", "faq"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-3 font-semibold capitalize transition ${
                        activeTab === tab
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Instructions Tab */}
                {activeTab === "instructions" && (
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Step-by-Step Instructions
                    </h2>
                    <ol className="space-y-4">
                      {exercise.steps.map((step: string, index: number) => (
                        <li key={index} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </span>
                          <p className="text-gray-700 pt-1">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Mistakes Tab */}
                {activeTab === "mistakes" && (
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Common Mistakes to Avoid
                    </h2>
                    <ul className="space-y-4">
                      {exercise.mistakes.map((mistake: string, index: number) => (
                        <li key={index} className="flex gap-4">
                          <span className="text-red-500 font-bold text-xl">✗</span>
                          <span className="text-gray-700">{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Variations Tab */}
                {activeTab === "variations" && (
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Exercise Variations
                    </h2>
                    <ul className="space-y-3">
                      {exercise.variations.map((variation: string, index: number) => (
                        <li key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 font-medium">{variation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQ Tab */}
                {activeTab === "faq" && (
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          How often should I do this exercise?
                        </h3>
                        <p className="text-gray-700">
                          Perform this exercise 1-2 times per week as part of your workout routine.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          What if I don't have the equipment?
                        </h3>
                        <p className="text-gray-700">
                          Check the variations section for alternatives using different equipment.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                {/* Info Card */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Exercise Info</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">DIFFICULTY</p>
                      <p className="text-gray-900 font-bold">{exercise.difficulty}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 font-semibold">MUSCLES WORKED</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exercise.muscles.map((muscle: string) => (
                          <span
                            key={muscle}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                          >
                            {muscle}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 font-semibold">EQUIPMENT</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exercise.equipment.map((item: string) => (
                          <span
                            key={item}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600 font-semibold">RECOMMENDED</p>
                      <p className="text-gray-900 font-bold">{exercise.setsReps}</p>
                      <p className="text-sm text-gray-600">Rest: {exercise.rest}</p>
                    </div>
                  </div>
                </div>

                {/* Related Exercises */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Exercises</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/exercises/bench-press" className="text-blue-600 hover:text-blue-700">
                        → Barbell Bench Press
                      </Link>
                    </li>
                    <li>
                      <Link href="/exercises/push-ups" className="text-blue-600 hover:text-blue-700">
                        → Push-ups
                      </Link>
                    </li>
                    <li>
                      <Link href="/exercises" className="text-blue-600 hover:text-blue-700">
                        → View More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
