"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function WorkoutPlansPage() {
  const plans = [
    {
      id: "ppl",
      title: "Push Pull Legs",
      description: "3-day split for beginners and intermediate",
      duration: "3 days/week",
    },
    {
      id: "upperlower",
      title: "Upper Lower Split",
      description: "4-day body-part split for strength",
      duration: "4 days/week",
    },
    {
      id: "fullbody",
      title: "Full Body Routine",
      description: "Complete workout in one session",
      duration: "3 days/week",
    },
    {
      id: "5day",
      title: "5-Day Body Split",
      description: "Advanced bodybuilding split",
      duration: "5 days/week",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Workout Programs</h1>
            <p className="text-xl text-indigo-100">
              Structured workout plans for every fitness level
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plans.map((plan) => (
                <Link key={plan.id} href={`/workout-plans/${plan.id}`}>
                  <div className="bg-white border-2 border-indigo-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-500 transition cursor-pointer h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <p className="text-indigo-600 font-semibold">{plan.duration}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
