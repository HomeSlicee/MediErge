"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I'd been struggling with low energy and weight gain for over a year. After my consultation with MediErge, I finally had answers and a plan that worked. Three months later, I feel like myself again.",
    name: "Rahul M.",
    location: "Mumbai",
    service: "Men's Health",
    rating: 5,
  },
  {
    quote:
      "Managing PCOS has been a years-long struggle. MediErge gave me a doctor who actually listened and a treatment plan tailored to me — not a generic prescription. My cycles are finally regular.",
    name: "Priya S.",
    location: "Bengaluru",
    service: "Women's Health",
    rating: 5,
  },
  {
    quote:
      "I was embarrassed to talk about my skin issues in person. The online consultation was private, and the prescription they sent me cleared my acne in 8 weeks. Wish I'd found this sooner.",
    name: "Arjun K.",
    location: "Pune",
    service: "Skincare",
    rating: 5,
  },
  {
    quote:
      "Hair loss at 28 was devastating. MediErge connected me with a dermatologist who diagnosed my issue properly and put me on a regrowth plan. The results speak for themselves.",
    name: "Sneha R.",
    location: "Delhi",
    service: "Hair",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--gold)" }}
          >
            Patient Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Real People, Real Results
          </h2>
          <p className="text-lg text-blue-200 max-w-xl mx-auto">
            Thousands of patients across India have taken control of their health
            with MediErge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-7"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} style={{ color: "var(--gold)" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-blue-100 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.15)",
                    color: "var(--gold-light)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
