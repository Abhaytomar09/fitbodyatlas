"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Best Foods Before Workout - Science Backed",
      category: "Nutrition",
      date: "May 6, 2024",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Push Pull Legs Routine - Complete Guide",
      category: "Workout Plans",
      date: "May 5, 2024",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "High Protein Vegetarian Foods for Gym",
      category: "Diet",
      date: "May 4, 2024",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Chest Workout for Beginners at Home",
      category: "Workouts",
      date: "May 3, 2024",
      readTime: "7 min read",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-900 to-red-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Fitness Blog</h1>
            <p className="text-xl text-orange-100">
              Latest fitness tips, workout guides, and nutrition advice
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-orange-500 transition cursor-pointer h-full">
                    <div className="w-full h-40 bg-gradient-to-br from-orange-400 to-red-500"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500">{article.date}</p>
                    </div>
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
