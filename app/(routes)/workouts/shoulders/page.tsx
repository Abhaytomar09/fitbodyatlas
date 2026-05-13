"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function ShoulderWorkoutsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/workouts" className="text-purple-200 hover:text-white mb-4 inline-block">
              ← Back to Workouts
            </Link>
            <h1 className="text-4xl font-bold mb-4">Shoulder Workouts</h1>
            <p className="text-xl text-purple-100">
              Develop wider, stronger shoulders
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-purple-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Shoulder Building Routine</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Exercises</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Overhead Press - 4 sets × 6-8 reps</li>
                    <li>• Lateral Raises - 3 sets × 12-15 reps</li>
                    <li>• Rear Delt Flies - 3 sets × 12-15 reps</li>
                    <li>• Face Pulls - 3 sets × 15-20 reps</li>
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
