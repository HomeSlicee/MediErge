"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💪",
    title: "Men's Health",
    href: "/mens-health",
    color: "#0d4f5c",
    lightColor: "#e8f4f6",
    description:
      "Hormonal balance, energy, performance, erectile dysfunction, and hair loss — treated with a licensed doctor's guidance.",
    tags: ["Testosterone", "ED Treatment", "Hair Loss", "Weight Management"],
  },
  {
    icon: "🌸",
    title: "Women's Health",
    href: "/womens-health",
    color: "#7c3d6b",
    lightColor: "#f8eff6",
    description:
      "PCOS, hormonal imbalances, weight management, skin health — personalized care for every stage of life.",
    tags: ["PCOS", "Hormones", "Weight", "Skin & Hair"],
  },
  {
    icon: "✨",
    title: "Skincare",
    href: "/skincare",
    color: "#5c4a0d",
    lightColor: "#fdf7e8",
    description:
      "Prescription-strength skincare for acne, anti-aging, pigmentation, and personalized daily routines.",
    tags: ["Acne", "Anti-Aging", "Pigmentation", "Routines"],
  },
  {
    icon: "🌿",
    title: "Hair",
    href: "/hair",
    color: "#1a5c1a",
    lightColor: "#eef7ee",
    description:
      "Clinically proven treatments for hair loss, thinning, and scalp health — backed by dermatology.",
    tags: ["Hair Loss", "Regrowth", "Scalp Health", "DHT Blockers"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiceCards() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--gold)" }}
          >
            Our Services
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Care Designed for You
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Each treatment plan is crafted by a licensed Indian doctor — no
            guesswork, no generics.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardVariants}>
              <Link
                href={service.href}
                className="group block h-full rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: service.lightColor }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-serif text-xl font-bold mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: service.lightColor,
                        color: service.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="flex items-center gap-1 text-sm font-semibold"
                  style={{ color: service.color }}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
