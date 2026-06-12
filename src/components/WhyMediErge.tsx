"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "👨‍⚕️",
    title: "Licensed Indian Doctors",
    description:
      "Every consultation is with a qualified physician registered under the Indian Medical Council — not an algorithm.",
  },
  {
    icon: "🏠",
    title: "100% Online",
    description:
      "No waiting rooms, no travel. Consult, get diagnosed, and receive treatment from wherever you are.",
  },
  {
    icon: "📦",
    title: "Discreet Shipping",
    description:
      "Medications arrive in plain, unmarked packaging — your privacy is treated as a priority, not an afterthought.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "No hidden fees. You'll know exactly what you're paying before you start — consultation, plan, and delivery included.",
  },
  {
    icon: "🔄",
    title: "Ongoing Support",
    description:
      "Your care doesn't stop at the prescription. Check-ins, plan adjustments, and doctor access are always available.",
  },
  {
    icon: "🔐",
    title: "Complete Confidentiality",
    description:
      "Your health information is encrypted, secure, and never shared — full compliance with Indian data privacy norms.",
  },
];

export default function WhyMediErge() {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, var(--cream) 0%, white 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--gold)" }}
          >
            Why MediErge
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Built Around You
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            We designed MediErge for the things that matter most — trust,
            privacy, and care that actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: "var(--cream)" }}
              >
                {feature.icon}
              </div>
              <div>
                <h3
                  className="font-semibold text-base mb-1.5"
                  style={{ color: "var(--navy)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
