"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function NutritionPage() {
  const nutritionTopics = [
    {
      id: "pre-workout",
      title: "Pre-Workout Nutrition",
      description: "Best foods to eat before your workout",
    },
    {
      id: "post-workout",
      title: "Post-Workout Meals",
      description: "Recovery nutrition after training",
    },
    {
      id: "protein-foods",
      title: "High Protein Foods",
      description: "Complete list of protein sources",
    },
    {
      id: "supplements",
      title: "Best Supplements",
      description: "Guide to fitness supplements",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-900 to-teal-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Nutrition Guide</h1>
            <p className="text-xl text-green-100">
              Complete nutrition information for your fitness goals
            </p>
          </div>
        </section>

        {/* Topics */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nutritionTopics.map((topic) => (
                <Link key={topic.id} href={`/nutrition/${topic.id}`}>
                  <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition cursor-pointer h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600">{topic.description}</p>
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
