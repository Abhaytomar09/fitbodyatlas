"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function ChestWorkoutsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/workouts" className="text-red-200 hover:text-white mb-4 inline-block">
              ← Back to Workouts
            </Link>
            <h1 className="text-4xl font-bold mb-4">Chest Workouts</h1>
            <p className="text-xl text-red-100">
              Complete guide to building a bigger, stronger chest
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Best Chest Workout for Beginners
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Building a strong chest is one of the most desired fitness goals. This comprehensive
                guide will teach you everything you need to know about chest workouts, from anatomy to
                programming and diet.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Chest Training</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Bigger, more muscular chest appearance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Improved pushing strength</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Better posture and shoulder health</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Increased metabolic rate</span>
                </li>
              </ul>
            </div>

            {/* Workout Plan */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beginner Chest Workout Plan</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="border p-3 text-left">Exercise</th>
                      <th className="border p-3 text-center">Sets</th>
                      <th className="border p-3 text-center">Reps</th>
                      <th className="border p-3 text-center">Rest</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border">
                      <td className="border p-3 font-semibold">Dumbbell Bench Press</td>
                      <td className="border p-3 text-center">3</td>
                      <td className="border p-3 text-center">8-12</td>
                      <td className="border p-3 text-center">90s</td>
                    </tr>
                    <tr className="border bg-gray-50">
                      <td className="border p-3 font-semibold">Incline Dumbbell Press</td>
                      <td className="border p-3 text-center">3</td>
                      <td className="border p-3 text-center">8-10</td>
                      <td className="border p-3 text-center">90s</td>
                    </tr>
                    <tr className="border">
                      <td className="border p-3 font-semibold">Dumbbell Flyes</td>
                      <td className="border p-3 text-center">3</td>
                      <td className="border p-3 text-center">12-15</td>
                      <td className="border p-3 text-center">60s</td>
                    </tr>
                    <tr className="border bg-gray-50">
                      <td className="border p-3 font-semibold">Push-ups</td>
                      <td className="border p-3 text-center">3</td>
                      <td className="border p-3 text-center">10-15</td>
                      <td className="border p-3 text-center">60s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mistakes */}
            <div className="bg-red-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span className="text-gray-700">Using too heavy weight and sacrificing form</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span className="text-gray-700">Not getting enough rest between sets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span className="text-gray-700">Neglecting the eccentric (lowering) portion</span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">How often should I train chest?</h4>
                  <p className="text-gray-700">
                    For beginners, 1-2 times per week is ideal. Advanced lifters can train chest 2-3
                    times per week with different angles and exercises.
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-bold text-gray-900 mb-2">What's the best exercise for chest?</h4>
                  <p className="text-gray-700">
                    The bench press is considered the king of chest exercises, but compound movements
                    like dumbbell presses and push-ups are also excellent.
                  </p>
                </div>
              </div>
            </div>

            {/* Related */}
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Workouts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/workouts/back" className="text-blue-600 hover:text-blue-700 font-semibold">
                  → Back Workouts
                </Link>
                <Link href="/workouts/shoulders" className="text-blue-600 hover:text-blue-700 font-semibold">
                  → Shoulder Workouts
                </Link>
                <Link href="/workouts/arms" className="text-blue-600 hover:text-blue-700 font-semibold">
                  → Arm Workouts
                </Link>
                <Link href="/workouts/abs" className="text-blue-600 hover:text-blue-700 font-semibold">
                  → Ab Workouts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
