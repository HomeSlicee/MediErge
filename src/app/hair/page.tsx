"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const conditions = [
  {
    icon: "🌿",
    title: "Male Pattern Hair Loss",
    description: "DHT-blocking treatments proven to stop hairloss and stimulate regrowth — prescribed after a doctor review.",
    tags: ["Finasteride", "Minoxidil", "DHT Blocker"],
  },
  {
    icon: "🌸",
    title: "Female Hair Thinning",
    description: "Hormonal and nutritional causes of hair loss in women — diagnosed and treated with a tailored plan.",
    tags: ["Minoxidil (F)", "Hormones", "Iron & B12"],
  },
  {
    icon: "🔬",
    title: "Alopecia Areata",
    description: "Immune-mediated patchy hair loss treated with prescription topicals and lifestyle guidance.",
    tags: ["Corticosteroids", "Platelet Therapy", "Immune Support"],
  },
  {
    icon: "💧",
    title: "Scalp Health",
    description: "Dandruff, seborrheic dermatitis, and scalp psoriasis — treating the foundation for healthy hair.",
    tags: ["Antifungal", "Ketoconazole", "Scalp Serums"],
  },
  {
    icon: "⚡",
    title: "Post-Illness Hair Loss",
    description: "Telogen effluvium after illness, stress, or hormonal shifts — guided recovery with nutritional support.",
    tags: ["Telogen Effluvium", "Biotin", "Nutritional Panel"],
  },
  {
    icon: "✨",
    title: "Hair Regrowth Program",
    description: "A comprehensive 6-month protocol combining prescription, nutrition, and topical treatments.",
    tags: ["6-Month Plan", "Progress Tracking", "Combination Therapy"],
  },
];

const steps = [
  { step: "01", title: "Hair Assessment", desc: "Answer questions about your hair loss pattern, timeline, and history." },
  { step: "02", title: "Doctor Consultation", desc: "A licensed doctor reviews your case and recommends a treatment plan." },
  { step: "03", title: "Prescription Sent", desc: "Medications and topical treatments prescribed and dispatched." },
  { step: "04", title: "Track Regrowth", desc: "Monthly check-ins and plan adjustments as your hair responds." },
];

export default function HairPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d2e0d 0%, #1a5c1a 60%, #2a7a2a 100%)" }}
        >
          <div className="absolute top-20 right-[-80px] w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "var(--gold)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "var(--gold-light)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" /> Hair
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Stop Hair Loss. <span style={{ color: "var(--gold-light)" }}>Start Regrowing.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
                Clinically proven treatments for hair loss, thinning, and scalp health — backed by dermatology and prescribed by a licensed doctor.
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              >
                Start Your Hair Assessment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-24" style={{ backgroundColor: "var(--cream)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Conditions We Treat</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--navy)" }}>What We Help With</h2>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>Hair loss has many causes — we diagnose yours and treat it accordingly.</p>
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: "#eef7ee" }}>{c.icon}</div>
                  <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "#1a5c1a" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: "#eef7ee", color: "#1a5c1a" }}>{tag}</span>
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
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4" style={{ backgroundColor: "#1a5c1a", color: "white" }}>{s.step}</div>
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
