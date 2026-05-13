"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "What is TDEE and how do I calculate it?",
    a: "TDEE (Total Daily Energy Expenditure) is the total calories your body burns per day. It includes your Basal Metabolic Rate (BMR) plus activity calories. Use our free TDEE Calculator to get your personalized number based on age, weight, height, and activity level.",
  },
  {
    q: "What is the best workout plan for beginners in India?",
    a: "For beginners, a Full Body 3-day split (Monday/Wednesday/Friday) works best. Focus on compound movements: squats, deadlifts, bench press, and rows. Aim for 3 sets × 8–12 reps. Rest 48 hours between sessions. Check our Beginner Guides for complete programs.",
  },
  {
    q: "How much protein should I eat to build muscle?",
    a: "Aim for 1.6–2.2g of protein per kg of bodyweight per day. For a 70kg person, that's 112–154g protein daily. Great Indian sources: paneer (18g/100g), dal (9g/100g), chickpeas (15g/100g), chicken breast (31g/100g). Use our Macro Calculator for personalized targets.",
  },
  {
    q: "Is a vegetarian diet good for muscle gain?",
    a: "Absolutely! A well-planned vegetarian diet can fully support muscle gain. Top high-protein Indian veg foods include paneer, Greek yogurt, tofu, dal, chickpeas, and rajma. Many top Indian athletes are vegetarians. See our Veg Diet Plans for structured meal plans.",
  },
  {
    q: "How long does it take to see results from working out?",
    a: "You'll feel stronger in 2–3 weeks, notice visible changes in 4–8 weeks, and significant transformation in 3–6 months with consistent training and proper diet. Results depend on diet quality, sleep, and workout consistency. Track your progress with our tools.",
  },
  {
    q: "What are the best exercises for chest at home?",
    a: "Top home chest exercises: Standard push-ups, Wide-grip push-ups, Diamond push-ups (triceps + inner chest), Decline push-ups (upper chest), Pike push-ups, and Plyometric push-ups. Do 3–4 sets of 10–20 reps. Add a backpack for resistance. See our full Home Chest Workout guide.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section-pad section-accent"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-blue mb-4 inline-block"
          >
            <HelpCircle size={11} /> FAQ
          </motion.span>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Fitness{" "}
            <span className="gradient-text-orange">Questions Answered</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: "rgba(156,163,175,0.85)" }}
          >
            Quick, expert-backed answers to the most common fitness questions from Indians.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06 }}
            >
              <div
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: openIndex === i ? "rgba(255,107,53,0.06)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${openIndex === i ? "rgba(255,107,53,0.3)" : "rgba(255,255,255,0.07)"}`,
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <h3
                    className="text-base font-semibold"
                    style={{
                      color: openIndex === i ? "#FF6B35" : "rgba(229,231,235,0.9)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                    style={{ color: openIndex === i ? "#FF6B35" : "rgba(107,114,128,0.8)" }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="faq-answer px-6 pb-5 text-sm leading-relaxed"
                        style={{ color: "rgba(156,163,175,0.9)" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
