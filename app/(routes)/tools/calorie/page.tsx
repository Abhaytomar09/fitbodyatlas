"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useState } from "react";

export default function CalorieCalculatorPage() {
  const [formData, setFormData] = useState({
    age: 25,
    weight: 70,
    height: 175,
    gender: "male",
    activity: 1.5,
  });

  const [result, setResult] = useState<number | null>(null);

  const calculateCalories = () => {
    const { age, weight, height, gender, activity } = formData;

    // Harris-Benedict equation for BMR
    let bmr;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    const tdee = bmr * activity;
    setResult(Math.round(tdee));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-yellow-900 to-orange-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Calorie Calculator</h1>
            <p className="text-xl text-yellow-100">
              Calculate your daily calorie needs based on your activity level
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                TDEE Calculator
              </h2>

              <div className="space-y-6">
                {/* Age */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Age: {formData.age} years
                  </label>
                  <input
                    type="range"
                    min="15"
                    max="80"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: parseInt(e.target.value) })
                    }
                    className="w-full"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight: {formData.weight} kg
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="150"
                    value={formData.weight}
                    onChange={(e) =>
                      setFormData({ ...formData, weight: parseInt(e.target.value) })
                    }
                    className="w-full"
                  />
                </div>

                {/* Height */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Height: {formData.height} cm
                  </label>
                  <input
                    type="range"
                    min="130"
                    max="220"
                    value={formData.height}
                    onChange={(e) =>
                      setFormData({ ...formData, height: parseInt(e.target.value) })
                    }
                    className="w-full"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Activity Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Activity Level
                  </label>
                  <select
                    value={formData.activity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        activity: parseFloat(e.target.value),
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
                  >
                    <option value={1.2}>Sedentary (1.2x)</option>
                    <option value={1.375}>Light (1.375x)</option>
                    <option value={1.5}>Moderate (1.5x)</option>
                    <option value={1.725}>Very Active (1.725x)</option>
                    <option value={1.9}>Extremely Active (1.9x)</option>
                  </select>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateCalories}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-bold transition"
                >
                  Calculate
                </button>

                {/* Result */}
                {result && (
                  <div className="bg-white border-2 border-yellow-600 rounded-lg p-8 text-center mt-8">
                    <p className="text-gray-600 mb-2">Your Daily Calorie Needs</p>
                    <p className="text-5xl font-bold text-yellow-600">{result}</p>
                    <p className="text-gray-600 mt-4">kilocalories per day</p>

                    <div className="mt-8 pt-8 border-t">
                      <h3 className="font-bold text-gray-900 mb-4">Calorie Recommendations</h3>
                      <div className="space-y-2 text-left">
                        <p>
                          <span className="font-semibold">Muscle Gain:</span>{" "}
                          {Math.round(result + 300)} - {Math.round(result + 500)} kcal
                        </p>
                        <p>
                          <span className="font-semibold">Maintenance:</span> {result} kcal
                        </p>
                        <p>
                          <span className="font-semibold">Fat Loss:</span>{" "}
                          {Math.round(result - 300)} - {Math.round(result - 500)} kcal
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
