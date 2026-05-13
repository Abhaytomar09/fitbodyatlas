import Link from "next/link";
import { ArrowRight, Dumbbell, Apple } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--bg-700)" }}
    >
      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #FF6B35, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00D4AA, transparent)" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center" style={{ maxWidth: "800px" }}>
        <h2
          className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight"
          style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
        >
          Ready to{" "}
          <span className="gradient-text-orange">Transform</span>{" "}
          Your Fitness?
        </h2>
        <p className="text-xl mb-10" style={{ color: "rgba(156,163,175,0.85)" }}>
          Get access to 1000+ exercises, personalized workout plans, and Indian diet guides — completely free, forever.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/workouts" className="btn-primary text-base px-8 py-4">
            <Dumbbell size={20} />
            Start Training Free
            <ArrowRight size={18} />
          </Link>
          <Link href="/diet" className="btn-secondary text-base px-8 py-4">
            <Apple size={20} />
            Get Diet Plan
          </Link>
        </div>

        {/* Trust mini bar */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm" style={{ color: "rgba(107,114,128,0.8)" }}>
          {["✅ No signup required", "✅ 100% Free", "✅ Expert Reviewed", "✅ India Focused"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
