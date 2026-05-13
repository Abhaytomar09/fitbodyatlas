"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function LegWorkoutsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/workouts" className="text-green-200 hover:text-white mb-4 inline-block">
              ← Back to Workouts
            </Link>
            <h1 className="text-4xl font-bold mb-4">Leg Workouts</h1>
            <p className="text-xl text-green-100">
              Build strong, muscular legs and glutes
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/workouts/legs" className="bg-green-50 border-2 border-green-200 p-6 rounded-xl hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quad Workouts</h3>
                <p className="text-gray-600">Build bigger, stronger quadriceps</p>
              </Link>
              <Link href="/workouts/legs" className="bg-emerald-50 border-2 border-emerald-200 p-6 rounded-xl hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hamstring Workouts</h3>
                <p className="text-gray-600">Develop posterior chain strength</p>
              </Link>
              <Link href="/workouts/legs" className="bg-teal-50 border-2 border-teal-200 p-6 rounded-xl hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Glute Workouts</h3>
                <p className="text-gray-600">Build powerful glutes and hip strength</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
