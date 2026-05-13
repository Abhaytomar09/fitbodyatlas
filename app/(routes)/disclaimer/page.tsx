"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Medical Disclaimer</h1>
            <p className="text-xl text-red-100">
              Important - Please Read Carefully
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">IMPORTANT DISCLAIMER</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                  <p className="text-red-700 font-semibold mb-3">
                    The information on FitBodyAtlas is for general informational purposes only.
                  </p>
                  <p className="text-red-600">
                    FitBodyAtlas is not a medical service and does not provide medical advice,
                    diagnosis, or treatment. Always consult with a qualified healthcare provider
                    before starting any new exercise program or diet plan.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. No Medical Advice</h2>
                <p className="text-gray-700 leading-relaxed">
                  The content on this website is not intended to be a substitute for professional
                  medical advice, diagnosis, or treatment. Do not disregard professional medical
                  advice or delay seeking medical treatment based on information from this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Individual Results May Vary</h2>
                <p className="text-gray-700 leading-relaxed">
                  Results and performance levels depend on many factors including age, weight,
                  genetics, lifestyle, and overall health. The testimonials and results shown are
                  not typical and may not be achievable by everyone.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Consult Before Starting</h2>
                <p className="text-gray-700 leading-relaxed">
                  Before starting any new exercise program or making significant dietary changes,
                  consult with a qualified healthcare provider, especially if you have:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4 mt-3">
                  <li>• Pre-existing medical conditions</li>
                  <li>• Take medications regularly</li>
                  <li>• Are pregnant or breastfeeding</li>
                  <li>• Have orthopedic concerns</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  FitBodyAtlas and its team shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from your use of or
                  reliance on the information provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Stop If You Experience Discomfort</h2>
                <p className="text-gray-700 leading-relaxed">
                  Immediately stop exercising and consult a healthcare provider if you experience:
                  chest pain, dizziness, shortness of breath, joint pain, or any other concerning symptoms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
