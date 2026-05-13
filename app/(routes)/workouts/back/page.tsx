"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function BackWorkoutsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/workouts" className="text-blue-200 hover:text-white mb-4 inline-block">
              ← Back to Workouts
            </Link>
            <h1 className="text-4xl font-bold mb-4">Back Workouts</h1>
            <p className="text-xl text-blue-100">
              Build a strong, wide, and muscular back
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lat Workouts</h2>
              <p className="text-gray-700 mb-6">
                Complete guide to developing wider lats using proven exercises and programming.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-800 text-white">
                      <th className="border p-3 text-left">Exercise</th>
                      <th className="border p-3 text-center">Sets</th>
                      <th className="border p-3 text-center">Reps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border">
                      <td className="border p-3 font-semibold">Pull-ups</td>
                      <td className="border p-3 text-center">4</td>
                      <td className="border p-3 text-center">8-12</td>
                    </tr>
                    <tr className="border bg-gray-50">
                      <td className="border p-3 font-semibold">Lat Pulldown</td>
                      <td className="border p-3 text-center">3</td>
                      <td className="border p-3 text-center">10-12</td>
                    </tr>
                    <tr className="border">
                      <td className="border p-3 font-semibold">Bent Over Rows</td>
                      <td className="border p-3 text-center">4</td>
                      <td className="border p-3 text-center">6-8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
