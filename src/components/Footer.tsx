import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <span className="font-serif text-xl font-semibold">MediErge</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your Medical Concierge. Premium telehealth services delivered 100%
              online across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "var(--gold)" }}>
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/mens-health" className="hover:text-white transition-colors">Men's Health</Link></li>
              <li><Link href="/womens-health" className="hover:text-white transition-colors">Women's Health</Link></li>
              <li><Link href="/skincare" className="hover:text-white transition-colors">Skincare</Link></li>
              <li><Link href="/hair" className="hover:text-white transition-colors">Hair</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "var(--gold)" }}>
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/quiz" className="hover:text-white transition-colors">Start Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "var(--gold)" }}>
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>support@medierge.in</li>
              <li>Mon–Sat, 9am–7pm IST</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            <strong className="text-gray-400">Medical Disclaimer:</strong> Prescriptions issued only after online
            consultation with a licensed medical practitioner registered under the Indian Medical Council.
            MediErge operates in accordance with the MoHFW Telemedicine Practice Guidelines 2020.
            This service is not a substitute for emergency medical care. In case of emergency, please
            contact your nearest hospital or call 112.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} MediErge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
