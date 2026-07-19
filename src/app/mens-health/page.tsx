"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const conditions = [
  {
    icon: "⚡",
    title: "Erectile Dysfunction",
    description: "Clinically proven treatments to restore confidence and performance — prescribed discreetly online.",
    tags: ["Sildenafil", "Tadalafil", "Lifestyle Plan"],
  },
  {
    icon: "💪",
    title: "Testosterone & Hormones",
    description: "Fatigue, low libido, mood swings? Get a hormonal panel and a doctor-guided plan to feel like yourself again.",
    tags: ["TRT", "Hormone Panel", "Energy & Mood"],
  },
  {
    icon: "🌿",
    title: "Hair Loss (Male)",
    description: "Stop hairloss at the root with DHT-blocking treatments and clinically proven regrowth protocols.",
    tags: ["Finasteride", "Minoxidil", "Scalp Health"],
  },
  {
    icon: "⚖️",
    title: "Weight Management",
    description: "Doctor-designed plans combining nutrition, activity, and medication where appropriate.",
    tags: ["Metabolic Panel", "GLP-1", "Nutrition Plan"],
  },
  {
    icon: "😴",
    title: "Sleep & Stress",
    description: "Chronic stress and poor sleep affect everything. Get a personalised plan that addresses the root cause.",
    tags: ["Sleep Health", "Cortisol", "Mental Wellness"],
  },
  {
    icon: "🩺",
    title: "Preventive Health",
    description: "Annual screenings, blood work review, and proactive guidance from a doctor who knows your history.",
    tags: ["Blood Work", "Screenings", "Health Score"],
  },
];

const steps = [
  { step: "01", title: "Take the Assessment", desc: "Answer a short health questionnaire — takes under 5 minutes." },
  { step: "02", title: "Meet Your Doctor", desc: "A licensed Indian doctor reviews your case and consults with you online." },
  { step: "03", title: "Get Your Plan", desc: "Receive a personalised prescription and treatment plan." },
  { step: "04", title: "Delivered Discreetly", desc: "Medications shipped to your door in plain, unmarked packaging." },
];

export default function MensHealthPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--teal) 100%)" }}
        >
          <div className="absolute top-20 right-[-80px] w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "var(--gold)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "var(--gold-light)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" /> Men's Health
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Take Control of <span style={{ color: "var(--gold-light)" }}>Your Health</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-10">
                Private, doctor-guided treatment for the conditions men rarely talk about — handled with discretion and clinical precision.
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              >
                Start Your Consultation
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
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>Every condition is treated with a personalised plan — not a one-size-fits-all prescription.</p>
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: "#e8f4f6" }}>{c.icon}</div>
                  <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: "#e8f4f6", color: "var(--teal)" }}>{tag}</span>
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
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4" style={{ backgroundColor: "var(--teal)", color: "white" }}>{s.step}</div>
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
