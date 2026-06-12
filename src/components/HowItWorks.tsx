"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Take the Assessment",
    description:
      "Answer a few questions about your health goals and concerns. Our smart intake form takes under 5 minutes and is completely confidential.",
  },
  {
    number: "02",
    icon: "👨‍⚕️",
    title: "Consult a Doctor",
    description:
      "A licensed Indian physician reviews your responses and connects with you for a personalized online consultation — at a time that suits you.",
  },
  {
    number: "03",
    icon: "💊",
    title: "Receive Your Plan",
    description:
      "Get a customized treatment plan with prescription medications (if needed) delivered discreetly to your door, with ongoing support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--gold)" }}
          >
            The Process
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Three Steps to Better Health
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            From your first question to your treatment plan — the entire journey is
            designed to be simple, private, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 opacity-20"
            style={{ backgroundColor: "var(--teal)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center px-6"
            >
              {/* Step number badge */}
              <div className="flex justify-center mb-6">
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg"
                  style={{ backgroundColor: "var(--cream)" }}
                >
                  {step.icon}
                  <div
                    className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "var(--teal)" }}
                  >
                    {step.number.slice(1)}
                  </div>
                </div>
              </div>

              <h3
                className="font-serif text-xl font-bold mb-3"
                style={{ color: "var(--navy)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "var(--teal)" }}
          >
            Start Your Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
