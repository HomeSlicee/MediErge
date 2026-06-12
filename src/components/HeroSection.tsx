"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: "🏥", label: "Licensed Indian Doctors" },
  { icon: "🔒", label: "100% Confidential" },
  { icon: "📦", label: "Discreet Delivery" },
  { icon: "⚡", label: "Same-Day Consultations" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, var(--navy) 0%, var(--teal) 60%, #1a8a9a 100%)",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold accent circle */}
      <div
        className="absolute top-20 right-[-100px] w-[500px] h-[500px] rounded-full opacity-10"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <div
        className="absolute bottom-[-50px] left-[-80px] w-[300px] h-[300px] rounded-full opacity-5"
        style={{ backgroundColor: "var(--gold)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
            style={{
              backgroundColor: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "var(--gold-light)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            India's Premium Telehealth Concierge
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Healthcare That Feels{" "}
            <span style={{ color: "var(--gold-light)" }}>Personal</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl"
          >
            Clinician-guided, personalized treatment plans for men's health,
            women's health, skincare, and hair — all from the privacy of your
            home.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:scale-105 active:scale-95"
              style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
            >
              Start Your Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.4)" }}
            >
              How It Works
            </Link>
          </motion.div>
        </div>

        {/* Trust Badge Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-medium text-white/80">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
