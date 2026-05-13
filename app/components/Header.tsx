"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown, Dumbbell, Apple, Calculator, BookOpen, Flame, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Workouts",
    href: "/workouts",
    dropdown: [
      { label: "Chest Workouts", href: "/workouts/chest", icon: Dumbbell, color: "text-red-400" },
      { label: "Back Workouts", href: "/workouts/back", icon: Dumbbell, color: "text-blue-400" },
      { label: "Leg Workouts", href: "/workouts/legs", icon: Dumbbell, color: "text-green-400" },
      { label: "Shoulder Workouts", href: "/workouts/shoulders", icon: Dumbbell, color: "text-yellow-400" },
      { label: "Arm Workouts", href: "/workouts", icon: Dumbbell, color: "text-purple-400" },
      { label: "Core Workouts", href: "/workouts", icon: Dumbbell, color: "text-orange-400" },
    ],
  },
  {
    label: "Exercises",
    href: "/exercises",
    dropdown: null,
  },
  {
    label: "Diet Plans",
    href: "/diet",
    dropdown: [
      { label: "Veg Diet Plans", href: "/diet", icon: Apple, color: "text-green-400" },
      { label: "Non-Veg Diet Plans", href: "/diet", icon: Apple, color: "text-red-400" },
      { label: "Weight Loss Diet", href: "/diet", icon: Flame, color: "text-orange-400" },
      { label: "Muscle Gain Diet", href: "/diet", icon: Zap, color: "text-yellow-400" },
    ],
  },
  {
    label: "Nutrition",
    href: "/nutrition",
    dropdown: null,
  },
  {
    label: "Tools",
    href: "/tools",
    dropdown: null,
  },
  {
    label: "Blog",
    href: "/blog",
    dropdown: null,
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "header-scrolled" : "bg-transparent"
        }`}
        style={{
          background: scrolled
            ? "rgba(10, 15, 30, 0.97)"
            : "rgba(10, 15, 30, 0.6)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: `1px solid ${scrolled ? "rgba(255,107,53,0.2)" : "rgba(255,255,255,0.06)"}`,
        }}
      >
        <nav className="container mx-auto px-4 lg:px-6" style={{ maxWidth: "1280px" }}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="FitBodyAtlas Home">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #FF6B35, #FF8C5A)",
                  boxShadow: "0 0 15px rgba(255,107,53,0.4)",
                }}
              >
                <Dumbbell size={18} className="text-white" />
              </div>
              <span
                className="font-display font-800 text-xl hidden sm:inline"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}
              >
                <span className="text-white">FitBody</span>
                <span style={{ color: "#FF6B35" }}>Atlas</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{ color: "rgba(249,250,251,0.85)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#FF6B35";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,107,53,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(249,250,251,0.85)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className="opacity-60" />}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 rounded-xl shadow-2xl overflow-hidden"
                        style={{
                          background: "rgba(17, 24, 39, 0.98)",
                          border: "1px solid rgba(255,107,53,0.15)",
                          backdropFilter: "blur(20px)",
                        }}
                      >
                        {item.dropdown.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150"
                              style={{ color: "rgba(209,213,219,0.9)" }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(255,107,53,0.1)";
                                (e.currentTarget as HTMLElement).style.color = "#fff";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "transparent";
                                (e.currentTarget as HTMLElement).style.color = "rgba(209,213,219,0.9)";
                              }}
                            >
                              <Icon size={16} className={sub.color} />
                              {sub.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ color: "rgba(249,250,251,0.7)" }}
                aria-label="Search exercises"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,107,53,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "#FF6B35";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "rgba(249,250,251,0.7)";
                }}
              >
                <Search size={18} />
              </button>

              {/* CTA Button */}
              <Link
                href="/tools"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #FF6B35, #FF8C5A)",
                  color: "white",
                  boxShadow: "0 2px 10px rgba(255,107,53,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(255,107,53,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(255,107,53,0.35)";
                }}
              >
                <Calculator size={14} />
                TDEE Calculator
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{ color: "rgba(249,250,251,0.8)" }}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Search Bar (expandable) */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pb-4 overflow-hidden"
              >
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search exercises, workouts, diet plans..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,107,53,0.3)",
                    }}
                    autoFocus
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
              style={{
                background: "rgba(10,15,30,0.98)",
                borderTop: "1px solid rgba(255,107,53,0.1)",
              }}
            >
              <nav className="px-4 py-6 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    style={{ color: "rgba(209,213,219,0.9)" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/tools"
                    className="btn-primary w-full justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Calculator size={16} /> TDEE Calculator
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
