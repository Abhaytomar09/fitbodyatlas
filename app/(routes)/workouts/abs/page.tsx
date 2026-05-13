"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function AbsWorkoutsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-yellow-900 to-yellow-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/workouts" className="text-yellow-200 hover:text-white mb-4 inline-block">
              ← Back to Workouts
            </Link>
            <h1 className="text-4xl font-bold mb-4">Ab & Core Workouts</h1>
            <p className="text-xl text-yellow-100">
              Develop a strong, defined core
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-yellow-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Strengthening Routine</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Exercises (3x per week)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Planks</strong> - 3 sets × 45-60 seconds
                    </li>
                    <li>
                      <strong>Ab Wheel Rollout</strong> - 3 sets × 10-15 reps
                    </li>
                    <li>
                      <strong>Hanging Leg Raises</strong> - 3 sets × 12-15 reps
                    </li>
                    <li>
                      <strong>Cable Crunches</strong> - 3 sets × 12-15 reps
                    </li>
                    <li>
                      <strong>Decline Situps</strong> - 3 sets × 15-20 reps
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Abs are built in the kitchen. A proper diet with reduced
                    body fat is essential for visible abs. Combine this workout with good nutrition.
                  </p>
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
