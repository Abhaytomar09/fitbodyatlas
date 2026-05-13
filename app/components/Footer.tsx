"use client";

import Link from "next/link";
import { Mail, MapPin, Dumbbell, ArrowRight, Share2, MessageCircle, Globe } from "lucide-react";

const FOOTER_LINKS = {
  workouts: [
    { label: "Chest Workouts", href: "/workouts/chest" },
    { label: "Back Workouts", href: "/workouts/back" },
    { label: "Leg Workouts", href: "/workouts/legs" },
    { label: "Shoulder Workouts", href: "/workouts/shoulders" },
    { label: "All Workouts", href: "/workouts" },
  ],
  diet: [
    { label: "Veg Diet Plans", href: "/diet" },
    { label: "Non-Veg Diet Plans", href: "/diet" },
    { label: "Muscle Gain Diet", href: "/diet" },
    { label: "Weight Loss Diet", href: "/diet" },
    { label: "Nutrition Guide", href: "/nutrition" },
  ],
  tools: [
    { label: "TDEE Calculator", href: "/tools" },
    { label: "Calorie Calculator", href: "/tools" },
    { label: "Macro Calculator", href: "/tools" },
    { label: "BMI Calculator", href: "/tools" },
    { label: "1RM Calculator", href: "/tools" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Editorial Guidelines", href: "/editorial" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0F1E 0%, #060A14 100%)",
        borderTop: "1px solid rgba(255,107,53,0.12)",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.5), transparent)" }}
      />

      <div className="container mx-auto px-4 lg:px-6 pt-16 pb-10" style={{ maxWidth: "1280px" }}>
        {/* Newsletter strip */}
        <div
          className="rounded-2xl p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,53,0.12), rgba(0,212,170,0.08))",
            border: "1px solid rgba(255,107,53,0.2)",
          }}
        >
          <div>
            <h3
              className="text-2xl font-display font-bold text-white mb-1"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get Free Fitness Tips Every Week
            </h3>
            <p className="text-sm" style={{ color: "rgba(156,163,175,0.8)" }}>
              Join 10,000+ Indians on their fitness journey. No spam, ever.
            </p>
          </div>
          <form
            className="flex gap-3 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-64 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FF6B35, #FF8C5A)" }}
              >
                <Dumbbell size={18} className="text-white" />
              </div>
              <span className="font-display font-black text-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className="text-white">FitBody</span>
                <span style={{ color: "#FF6B35" }}>Atlas</span>
              </span>
            </Link>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "rgba(156,163,175,0.8)" }}>
              India&apos;s complete fitness knowledge platform. Expert-backed exercises, workouts, and diet plans since 2024.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Share2, label: "Instagram", href: "#" },
                { icon: Globe, label: "YouTube", href: "#" },
                { icon: MessageCircle, label: "Twitter", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`FitBodyAtlas on ${label}`}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,107,53,0.15)";
                    el.style.borderColor = "rgba(255,107,53,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon size={16} style={{ color: "rgba(156,163,175,0.8)" }} />
                </a>
              ))}
            </div>
            {/* Contact */}
            <div className="mt-5 space-y-2 text-xs" style={{ color: "rgba(107,114,128,0.9)" }}>
              <div className="flex items-center gap-2">
                <Mail size={13} style={{ color: "#FF6B35" }} />
                <span>info@fitbodyatlas.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} style={{ color: "#FF6B35" }} />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Workouts */}
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Workouts
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.workouts.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(107,114,128,0.9)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF6B35"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(107,114,128,0.9)"; }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diet */}
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Diet Plans
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.diet.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(107,114,128,0.9)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF6B35"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(107,114,128,0.9)"; }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Tools
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.tools.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(107,114,128,0.9)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF6B35"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(107,114,128,0.9)"; }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-sm tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(107,114,128,0.9)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF6B35"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(107,114,128,0.9)"; }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(107,114,128,0.7)" }}
        >
          <p>
            &copy; {new Date().getFullYear()} FitBodyAtlas. All rights reserved. India&apos;s #1 Fitness Knowledge Platform.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Disclaimer", href: "/disclaimer" },
              { label: "Editorial", href: "/editorial" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF6B35"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(107,114,128,0.7)"; }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
