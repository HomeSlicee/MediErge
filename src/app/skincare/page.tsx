"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const conditions = [
  {
    icon: "🌟",
    title: "Acne & Breakouts",
    description: "Prescription-strength tretinoin, antibiotics, and personalised routines — not just over-the-counter fixes.",
    tags: ["Tretinoin", "Antibiotics", "Daily Routine"],
  },
  {
    icon: "☀️",
    title: "Pigmentation & Dark Spots",
    description: "Melasma, post-acne marks, and sun damage treated with clinically proven depigmenting agents.",
    tags: ["Hydroquinone", "Kojic Acid", "SPF Protocol"],
  },
  {
    icon: "⏳",
    title: "Anti-Aging",
    description: "Retinoid-based regimens, peptides, and growth factor serums guided by a dermatology-trained doctor.",
    tags: ["Retinoids", "Peptides", "Collagen Support"],
  },
  {
    icon: "💧",
    title: "Dry & Sensitive Skin",
    description: "Barrier-repair protocols and prescription moisturisers for chronically dry or reactive skin.",
    tags: ["Barrier Repair", "Ceramides", "Eczema"],
  },
  {
    icon: "🔴",
    title: "Rosacea & Redness",
    description: "Prescription topicals and lifestyle guidance to reduce redness, flushing, and visible vessels.",
    tags: ["Metronidazole", "Azelaic Acid", "Triggers"],
  },
  {
    icon: "✨",
    title: "Overall Glow & Texture",
    description: "A personalised regimen — cleanser to SPF — designed to improve texture, tone, and radiance over time.",
    tags: ["Exfoliants", "Vitamin C", "Niacinamide"],
  },
];

const steps = [
  { step: "01", title: "Skin Assessment", desc: "Tell us about your skin type, concerns, and current routine." },
  { step: "02", title: "Doctor Review", desc: "A licensed dermatology-guided doctor creates your plan." },
  { step: "03", title: "Custom Regimen", desc: "Receive a prescription and step-by-step daily routine." },
  { step: "04", title: "Track Progress", desc: "Follow up every 8 weeks and adjust as your skin improves." },
];

export default function SkincarePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #3d2e05 0%, #5c4a0d 60%, #8a7020 100%)" }}
        >
          <div className="absolute top-20 right-[-80px] w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "var(--gold)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "var(--gold-light)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" /> Skincare
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Prescription Skincare, <span style={{ color: "var(--gold-light)" }}>Personalised</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
                Move beyond drugstore products. Get a clinician-designed regimen with prescription-strength ingredients tailored to your skin.
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              >
                Start Your Skin Assessment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-24" style={{ backgroundColor: "var(--cream)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Concerns We Address</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--navy)" }}>What We Treat</h2>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>Every regimen is built around your unique skin — not a generic formula.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditions.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: "#fdf7e8" }}>{c.icon}</div>
                  <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "#5c4a0d" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: "#fdf7e8", color: "#5c4a0d" }}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>The Process</p>
              <h2 className="font-serif text-4xl font-bold" style={{ color: "var(--navy)" }}>How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4" style={{ backgroundColor: "#5c4a0d", color: "white" }}>{s.step}</div>
                  <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
