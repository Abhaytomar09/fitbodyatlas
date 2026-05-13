"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function DietDetailPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-900 to-emerald-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">High Protein Veg Muscle Gain Diet</h1>
            <p className="text-xl text-green-100">
              Complete 2800 kcal vegetarian plan for maximum muscle growth
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Macros */}
            <div className="grid grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 font-semibold">CALORIES</p>
                <p className="text-3xl font-bold text-red-600">2800</p>
                <p className="text-xs text-gray-600">per day</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 font-semibold">PROTEIN</p>
                <p className="text-3xl font-bold text-blue-600">180g</p>
                <p className="text-xs text-gray-600">(26% of calories)</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 font-semibold">CARBS</p>
                <p className="text-3xl font-bold text-yellow-600">280g</p>
                <p className="text-xs text-gray-600">(40% of calories)</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl text-center">
                <p className="text-sm text-gray-600 font-semibold">FAT</p>
                <p className="text-3xl font-bold text-green-600">70g</p>
                <p className="text-xs text-gray-600">(22% of calories)</p>
              </div>
            </div>

            {/* Daily Meal Schedule */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Daily Meal Schedule</h2>

            {/* Breakfast */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">Breakfast (7:00 AM)</h3>
                <span className="text-lg font-bold text-orange-600">600 kcal</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Foods:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 4 whole eggs</li>
                    <li>• 2 slices whole wheat bread</li>
                    <li>• 1 banana</li>
                    <li>• Greek yogurt (1 cup)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Macros:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Protein: 35g</li>
                    <li>• Carbs: 60g</li>
                    <li>• Fat: 20g</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mid-Morning Snack */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">Mid-Morning Snack (10:00 AM)</h3>
                <span className="text-lg font-bold text-green-600">350 kcal</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Foods:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Protein shake (1 scoop)</li>
                    <li>• 1 apple</li>
                    <li>• Almonds (30g)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Macros:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Protein: 30g</li>
                    <li>• Carbs: 35g</li>
                    <li>• Fat: 10g</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lunch */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">Lunch (1:00 PM)</h3>
                <span className="text-lg font-bold text-blue-600">800 kcal</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Foods:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Paneer (1 cup)</li>
                    <li>• Brown rice (2 cups)</li>
                    <li>• Mixed vegetables</li>
                    <li>• Olive oil (1 tbsp)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Macros:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Protein: 50g</li>
                    <li>• Carbs: 80g</li>
                    <li>• Fat: 25g</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pre-Workout */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">Pre-Workout (4:00 PM)</h3>
                <span className="text-lg font-bold text-yellow-600">300 kcal</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Foods:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Banana (1 large)</li>
                    <li>• White bread (1 slice)</li>
                    <li>• Peanut butter (1 tbsp)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Macros:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Protein: 10g</li>
                    <li>• Carbs: 50g</li>
                    <li>• Fat: 10g</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Post-Workout */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">Post-Workout (6:30 PM)</h3>
                <span className="text-lg font-bold text-purple-600">400 kcal</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Foods:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Whey protein shake</li>
                    <li>• Dextrose/Rice (30g)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Macros:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Protein: 40g</li>
                    <li>• Carbs: 50g</li>
                    <li>• Fat: 2g</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dinner */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">Dinner (8:00 PM)</h3>
                <span className="text-lg font-bold text-red-600">450 kcal</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900">Foods:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Soy chunks/Tofu (150g)</li>
                    <li>• Sweet potato (medium)</li>
                    <li>• Steamed broccoli</li>
                    <li>• Ghee (1 tsp)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Macros:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Protein: 35g</li>
                    <li>• Carbs: 50g</li>
                    <li>• Fat: 15g</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shopping List */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Shopping List</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Proteins</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Eggs (2-3 dozen)</li>
                    <li>• Paneer (2 kg)</li>
                    <li>• Tofu/Soy chunks (1 kg)</li>
                    <li>• Greek yogurt (2 kg)</li>
                    <li>• Whey protein</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Grains & Carbs</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Brown rice (2 kg)</li>
                    <li>• Whole wheat bread</li>
                    <li>• White bread</li>
                    <li>• Sweet potato</li>
                    <li>• Oats</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Fruits & Veggies</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Bananas</li>
                    <li>• Apples</li>
                    <li>• Broccoli</li>
                    <li>• Mixed veggies</li>
                    <li>• Onion & garlic</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Healthy Fats</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Almonds</li>
                    <li>• Peanut butter</li>
                    <li>• Olive oil</li>
                    <li>• Ghee</li>
                    <li>• Coconut oil</li>
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
