"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function EditorialPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Editorial Guidelines</h1>
            <p className="text-xl text-blue-100">
              Our commitment to quality and accuracy
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Editorial Standards</h2>
                <p className="text-gray-700 leading-relaxed">
                  At FitBodyAtlas, we maintain the highest standards of accuracy, integrity,
                  and transparency. Our editorial team consists of certified fitness professionals,
                  registered dietitians, and subject matter experts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Creation Process</h2>
                <ol className="text-gray-700 space-y-3 ml-4">
                  <li>
                    <strong>1. Research:</strong> All content is based on peer-reviewed studies
                    and expert consensus
                  </li>
                  <li>
                    <strong>2. Writing:</strong> Content is written by certified professionals
                    with expertise in the subject
                  </li>
                  <li>
                    <strong>3. Review:</strong> All articles are reviewed by multiple experts
                    before publication
                  </li>
                  <li>
                    <strong>4. Fact-Checking:</strong> Claims are verified against scientific
                    evidence
                  </li>
                  <li>
                    <strong>5. Updates:</strong> Content is regularly updated to reflect new
                    research
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources We Trust</h2>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• PubMed and peer-reviewed journals</li>
                  <li>• National health organizations</li>
                  <li>• Certified fitness and nutrition bodies</li>
                  <li>• Medical research institutions</li>
                  <li>• Expert interviews and case studies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h2>
                <p className="text-gray-700 leading-relaxed">
                  We disclose our sources, potential conflicts of interest, and affiliate
                  relationships. If an article is sponsored or includes affiliate links, this
                  is clearly stated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Author Credentials</h2>
                <p className="text-gray-700 leading-relaxed">
                  All authors have relevant certifications and expertise. Author bios and
                  credentials are available on each article.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Corrections & Updates</h2>
                <p className="text-gray-700 leading-relaxed">
                  We welcome feedback and corrections. If you notice any errors or have
                  suggestions, please contact us at <strong>editorial@fitbodyatlas.com</strong>
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
