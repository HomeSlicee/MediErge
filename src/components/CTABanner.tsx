"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--teal) 0%, var(--navy) 100%)",
      }}
    >
      {/* Decorative */}
      <div
        className="absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: "var(--gold)" }}
      />
      <div
        className="absolute bottom-[-40px] left-[-40px] w-48 h-48 rounded-full opacity-5"
        style={{ backgroundColor: "var(--gold)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--gold-light)" }}
          >
            Ready to Start?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Your Health Journey Begins With One Step
          </h2>
          <p className="text-lg text-blue-200 mb-10">
            Take a 5-minute assessment and get matched with a licensed doctor
            who'll craft your personalized treatment plan.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-base transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            Start Your Consultation — It's Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-xs text-blue-300 mt-4">
            No commitment. Takes 5 minutes. 100% confidential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
