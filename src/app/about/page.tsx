"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const values = [
  { icon: "🔒", title: "Privacy First", description: "Every consultation is confidential. Your data is encrypted and never shared. Medications arrive in plain, unmarked packaging." },
  { icon: "🩺", title: "Clinically Sound", description: "Every treatment plan is issued by a licensed Indian physician. We follow MoHFW Telemedicine Practice Guidelines 2020." },
  { icon: "🎯", title: "Truly Personalised", description: "No cookie-cutter prescriptions. Your doctor designs a plan around your unique history, goals, and lifestyle." },
  { icon: "💬", title: "Always Available", description: "Reach your care team Mon–Sat, 9am–7pm IST. Follow-up consultations and plan adjustments are included." },
];

const doctors = [
  { name: "Dr. Ananya Sharma", specialty: "Internal Medicine & Men's Health", qualification: "MBBS, MD — AIIMS Delhi", experience: "12 years", initials: "AS", color: "#0d4f5c" },
  { name: "Dr. Meera Pillai", specialty: "Gynaecology & Women's Health", qualification: "MBBS, MS (OBG) — CMC Vellore", experience: "15 years", initials: "MP", color: "#7c3d6b" },
  { name: "Dr. Rohan Desai", specialty: "Dermatology & Hair Restoration", qualification: "MBBS, MD (Dermatology) — MAMC", experience: "10 years", initials: "RD", color: "#5c4a0d" },
  { name: "Dr. Kavitha Nair", specialty: "Endocrinology & Hormonal Health", qualification: "MBBS, DM (Endocrinology) — PGIMER", experience: "18 years", initials: "KN", color: "#1a5c1a" },
];

const stats = [
  { number: "10,000+", label: "Patients Served" },
  { number: "4", label: "Clinical Specialties" },
  { number: "48hr", label: "Avg. Prescription Turnaround" },
  { number: "100%", label: "Online — No Clinic Visit" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--teal) 100%)" }}
        >
          <div className="absolute top-20 right-[-80px] w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: "var(--gold)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "var(--gold-light)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" /> About Us
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Healthcare That <span style={{ color: "var(--gold-light)" }}>Respects You</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                MediErge was built on a simple belief: getting quality medical care shouldn't require an awkward waiting room, rushed consultations, or compromising your privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24" style={{ backgroundColor: "var(--cream)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>Our Mission</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--navy)" }}>Why We Built MediErge</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                In India, millions of people avoid seeking help for sensitive health concerns — not because treatments don't exist, but because the path to getting them is filled with stigma, inconvenience, and a lack of personalised care.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We created MediErge to change that. A telehealth concierge where licensed doctors design personalised treatment plans for men's health, women's health, skincare, and hair — delivered discreetly to your door, entirely online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-4xl font-bold mb-2" style={{ color: "var(--teal)" }}>{stat.number}</div>
                  <div className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24" style={{ backgroundColor: "var(--cream)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>What We Stand For</p>
              <h2 className="font-serif text-4xl font-bold" style={{ color: "var(--navy)" }}>Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-serif text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>The Team</p>
              <h2 className="font-serif text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>Meet Your Doctors</h2>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>Every doctor on our panel is IMC-registered with years of clinical experience in their specialty.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.map((doc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 text-center hover:shadow-md transition-all"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "var(--cream)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                    style={{ backgroundColor: doc.color }}
                  >
                    {doc.initials}
                  </div>
                  <h3 className="font-serif font-bold mb-1" style={{ color: "var(--navy)" }}>{doc.name}</h3>
                  <p className="text-xs font-medium mb-1" style={{ color: doc.color }}>{doc.specialty}</p>
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{doc.qualification}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{doc.experience} experience</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal note */}
        <section className="py-12" style={{ backgroundColor: "var(--cream)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              MediErge operates in full compliance with the MoHFW Telemedicine Practice Guidelines 2020. All prescriptions are issued only after an online consultation with a licensed medical practitioner registered under the Indian Medical Council. This service is not a substitute for emergency medical care. In case of a medical emergency, contact your nearest hospital or call 112.
            </p>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
