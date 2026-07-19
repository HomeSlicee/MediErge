"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Take the Health Assessment",
    description: "Answer a short, confidential questionnaire about your health concerns, goals, and medical history. Takes under 5 minutes — no doctor visit needed.",
  },
  {
    number: "02",
    icon: "👨‍⚕️",
    title: "Get Matched With a Doctor",
    description: "Based on your assessment, you're matched with a licensed Indian physician specialised in your concern — men's health, women's health, skincare, or hair.",
  },
  {
    number: "03",
    icon: "💬",
    title: "Online Consultation",
    description: "Your doctor reviews your responses and consults with you online — via chat or video — at a time that suits you. Completely private and judgement-free.",
  },
  {
    number: "04",
    icon: "💊",
    title: "Receive Your Prescription",
    description: "If treatment is appropriate, your doctor issues a prescription in accordance with MoHFW Telemedicine Guidelines 2020. Your medications are dispatched same day.",
  },
  {
    number: "05",
    icon: "📦",
    title: "Discreet Doorstep Delivery",
    description: "Your medications arrive in plain, unmarked packaging — no labels, no logos. Shipped across India within 2–4 business days.",
  },
  {
    number: "06",
    icon: "🔄",
    title: "Ongoing Follow-Up",
    description: "Your doctor checks in at 4 and 8 weeks to review your progress and adjust your plan. Continuous care, not a one-time prescription.",
  },
];

const faqs = [
  {
    q: "Is this legal in India?",
    a: "Yes. MediErge operates fully in accordance with the Ministry of Health & Family Welfare Telemedicine Practice Guidelines 2020. All prescriptions are issued by doctors registered with the Indian Medical Council (IMC).",
  },
  {
    q: "How long does the consultation take?",
    a: "The initial assessment takes under 5 minutes. Your doctor typically responds within 2–4 hours during working hours (Mon–Sat, 9am–7pm IST).",
  },
  {
    q: "Will my information be kept private?",
    a: "Absolutely. Your health data is encrypted, never shared with third parties, and used solely for your care. Medications are delivered in plain, unmarked packaging.",
  },
  {
    q: "What if I need to see a doctor in person?",
    a: "If your condition requires in-person care, your MediErge doctor will advise you accordingly. Telemedicine is not a substitute for emergency medical care.",
  },
  {
    q: "Can I get a refund if the treatment doesn't work?",
    a: "We offer a satisfaction review at your 8-week follow-up. If your treatment isn't working, your doctor will revise the plan or explore alternatives at no extra consultation fee.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--teal) 100%)" }}
        >
          <div className="absolute top-20 right-[-80px] w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "var(--gold)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "var(--gold-light)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" /> The Process
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                How <span style={{ color: "var(--gold-light)" }}>MediErge</span> Works
              </h1>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                From your first question to your treatment delivered — everything is designed to be simple, private, and clinically sound.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24" style={{ backgroundColor: "var(--cream)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-6 bg-white rounded-2xl p-6 hover:shadow-md transition-all"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl relative" style={{ backgroundColor: "var(--cream)" }}>
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "var(--teal)" }}>
                        {parseInt(step.number)}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2" style={{ color: "var(--navy)" }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: "var(--teal)", color: "white" }}
              >
                Start Your Assessment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>FAQs</p>
              <h2 className="font-serif text-4xl font-bold" style={{ color: "var(--navy)" }}>Common Questions</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "var(--cream)", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: "var(--navy)" }}>{faq.q}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{faq.a}</p>
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
