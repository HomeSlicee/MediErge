"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Men's Health", href: "/mens-health" },
  { label: "Women's Health", href: "/womens-health" },
  { label: "Skincare", href: "/skincare" },
  { label: "Hair", href: "/hair" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--teal)" }}
            >
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <span
              className="font-serif text-xl font-semibold"
              style={{ color: "var(--navy)" }}
            >
              MediErge
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: scrolled ? "var(--text-dark)" : "var(--navy)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/quiz"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: "var(--teal)" }}
            >
              Start Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
                style={{ backgroundColor: "var(--navy)" }}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
                style={{ backgroundColor: "var(--navy)" }}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
                style={{ backgroundColor: "var(--navy)" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium py-2 border-b border-gray-50"
                  style={{ color: "var(--text-dark)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/quiz"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--teal)" }}
              >
                Start Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
