import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function QuizPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex items-center justify-center pt-20"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="text-center px-4 py-24">
          <div className="text-6xl mb-6">📋</div>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Your Assessment Awaits
          </h1>
          <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            This page is coming soon. The intake quiz will help match you with the
            right doctor and treatment plan.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--teal)" }}
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
