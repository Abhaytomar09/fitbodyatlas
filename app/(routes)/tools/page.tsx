"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    {
      id: "bmr",
      title: "BMR Calculator",
      description: "Calculate your Basal Metabolic Rate",
    },
    {
      id: "calorie",
      title: "Calorie Calculator",
      description: "Daily calorie needs",
    },
    {
      id: "protein",
      title: "Protein Calculator",
      description: "Daily protein requirements",
    },
    {
      id: "bmi",
      title: "BMI Calculator",
      description: "Body Mass Index",
    },
    {
      id: "macro",
      title: "Macro Calculator",
      description: "Macronutrient breakdown",
    },
    {
      id: "1rm",
      title: "One Rep Max",
      description: "Estimate maximum lift",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Fitness Tools</h1>
            <p className="text-xl text-purple-100">
              Free interactive calculators to optimize your fitness journey
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Link key={tool.id} href={`/tools/${tool.id}`}>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-8 hover:shadow-lg hover:border-purple-500 transition cursor-pointer h-full">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4"></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <p className="text-purple-600 font-semibold">Open Tool →</p>
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
