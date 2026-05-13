"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Award, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About FitBodyAtlas</h1>
            <p className="text-xl text-blue-100">
              India's #1 Fitness Knowledge Platform
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Mission */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower every Indian to achieve their fitness goals through accurate,
                science-based fitness information. We provide 1000+ exercises, personalized
                workout plans, and nutrition guides specifically designed for Indian athletes
                and fitness enthusiasts.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <Award size={32} className="text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Evidence-Based</h3>
                <p className="text-sm text-gray-700">
                  All content backed by scientific research
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <Users size={32} className="text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Community Focused</h3>
                <p className="text-sm text-gray-700">
                  Built for Indian fitness enthusiasts
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                <Target size={32} className="text-yellow-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Results Driven</h3>
                <p className="text-sm text-gray-700">
                  Programs designed for real transformations
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <Heart size={32} className="text-red-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Health First</h3>
                <p className="text-sm text-gray-700">
                  Always prioritize health over aesthetics
                </p>
              </div>
            </div>

            {/* Founder Story */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Founder's Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                FitBodyAtlas was founded by a team of certified fitness coaches and nutritionists
                who struggled to find accurate, India-specific fitness information. We decided to
                create the ultimate resource that combines:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>✓ 1000+ detailed exercise guides</li>
                <li>✓ Personalized workout plans</li>
                <li>✓ Indian-focused diet plans</li>
                <li>✓ Interactive fitness tools</li>
                <li>✓ Science-backed nutrition advice</li>
              </ul>
            </div>

            {/* Credentials */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Certified Coaches
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• NASM Certified</li>
                    <li>• ACE Certified</li>
                    <li>• ISSA Certified</li>
                    <li>• 15+ years experience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Nutrition Experts
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Registered Dietitians</li>
                    <li>• Nutrition Science PhD</li>
                    <li>• Sports Nutrition Specialists</li>
                    <li>• 20+ years collective experience</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Community
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• 50,000+ active users</li>
                    <li>• 10,000+ transformations</li>
                    <li>• 98% satisfaction rate</li>
                    <li>• 24/7 support team</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
              <p className="mb-6">
                Have questions? Our team is ready to help you achieve your fitness goals.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
