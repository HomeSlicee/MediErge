"use client";

import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Ananya Sharma",
    specialty: "Internal Medicine & Men's Health",
    qualification: "MBBS, MD — AIIMS Delhi",
    experience: "12 years",
    initials: "AS",
    color: "#0d4f5c",
  },
  {
    name: "Dr. Meera Pillai",
    specialty: "Gynaecology & Women's Health",
    qualification: "MBBS, MS (OBG) — CMC Vellore",
    experience: "15 years",
    initials: "MP",
    color: "#7c3d6b",
  },
  {
    name: "Dr. Rohan Desai",
    specialty: "Dermatology & Hair Restoration",
    qualification: "MBBS, MD (Dermatology) — MAMC",
    experience: "10 years",
    initials: "RD",
    color: "#5c4a0d",
  },
  {
    name: "Dr. Kavitha Nair",
    specialty: "Endocrinology & Hormonal Health",
    qualification: "MBBS, DM (Endocrinology) — PGIMER",
    experience: "18 years",
    initials: "KN",
    color: "#1a5c1a",
  },
];

export default function DoctorPanel() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--gold)" }}
          >
            Our Doctors
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Experts You Can Trust
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Every MediErge physician is licensed, experienced, and registered with
            the Indian Medical Council.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              {/* Avatar placeholder */}
              <div className="flex justify-center mb-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                  style={{ backgroundColor: doc.color }}
                >
                  {doc.initials}
                </div>
              </div>

              <h3
                className="font-serif font-bold text-base mb-1"
                style={{ color: "var(--navy)" }}
              >
                {doc.name}
              </h3>
              <p className="text-xs font-medium mb-2" style={{ color: doc.color }}>
                {doc.specialty}
              </p>
              <p className="text-xs text-gray-400 mb-1">{doc.qualification}</p>
              <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                {doc.experience} experience
              </p>

              {/* IMC badge */}
              <div
                className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "#f0fdf4",
                  color: "#166534",
                }}
              >
                <span>✓</span> IMC Registered
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-8" style={{ color: "var(--text-muted)" }}>
          All prescriptions are issued only after a completed online consultation with a licensed doctor.
        </p>
      </div>
    </section>
  );
}
