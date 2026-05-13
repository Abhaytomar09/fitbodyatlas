"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function ArmsWorkoutsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/workouts" className="text-red-200 hover:text-white mb-4 inline-block">
              ← Back to Workouts
            </Link>
            <h1 className="text-4xl font-bold mb-4">Arms Workouts</h1>
            <p className="text-xl text-red-100">
              Build bigger biceps and triceps
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bicep Exercises</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Barbell Curls - 4×8-10</li>
                  <li>• Dumbbell Curls - 3×10-12</li>
                  <li>• Hammer Curls - 3×12-15</li>
                  <li>• Cable Curls - 3×12-15</li>
                </ul>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tricep Exercises</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Close Grip Press - 4×8-10</li>
                  <li>• Tricep Dips - 3×8-12</li>
                  <li>• Rope Pushdown - 3×12-15</li>
                  <li>• Skull Crushers - 3×10-12</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
