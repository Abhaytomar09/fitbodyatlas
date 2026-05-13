"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-100">
              Last updated: May 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 prose prose-sm max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  At FitBodyAtlas, we are committed to protecting your privacy and ensuring
                  you have a positive experience on our website. This privacy policy explains
                  how we collect, use, and protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <ul className="text-gray-700 space-y-3 ml-4">
                  <li>• Personal information (name, email, age, weight, height)</li>
                  <li>• Usage data (pages visited, time spent)</li>
                  <li>• Device information (browser, OS, IP address)</li>
                  <li>• Cookies and tracking pixels</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
                <ul className="text-gray-700 space-y-3 ml-4">
                  <li>• Personalize your experience</li>
                  <li>• Send newsletters and updates</li>
                  <li>• Analyze website performance</li>
                  <li>• Improve our services</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement industry-standard security measures to protect your personal
                  information. This includes SSL encryption, secure servers, and regular
                  security audits.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use third-party services for analytics and marketing. These services
                  have their own privacy policies, which we encourage you to review.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <ul className="text-gray-700 space-y-3 ml-4">
                  <li>• Right to access your data</li>
                  <li>• Right to correct inaccurate data</li>
                  <li>• Right to delete your data</li>
                  <li>• Right to opt out of communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  For privacy concerns, contact us at: <strong>privacy@fitbodyatlas.com</strong>
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
