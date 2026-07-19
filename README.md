# MediErge — Your Medical Concierge

MediErge is the marketing site for a premium, direct-to-consumer telehealth concierge serving India. It presents clinician-guided, personalized treatment plans across four verticals — **Men's Health**, **Women's Health**, **Skincare**, and **Hair** — delivered entirely online, with prescriptions shipped discreetly to the patient's door.

The site states it operates in accordance with the MoHFW Telemedicine Practice Guidelines 2020, and highlights doctors registered with the Indian Medical Council (IMC).

> **Status:** Front-end landing page only. There is no backend, database, authentication, or payment integration yet — see [Known Issues](#known-issues--todo) below.

## Use Cases

1. **Discreet, condition-specific consultation** — A visitor with a sensitive concern (e.g. acne, hair loss, ED) browses the relevant service card, reads a condition-specific pitch, and starts a consultation from home instead of visiting a clinic in person.
2. **Guided self-assessment before seeing a doctor** — Every primary call-to-action on the site (navbar, hero, "How It Works," footer, CTA banner) funnels the visitor to a short intake quiz meant to triage symptoms/goals and match them with the right doctor and treatment plan.
3. **Trust-building before a medical purchase** — Because the service involves prescriptions and personal health data, the site leans on a named doctor panel (credentials, IMC registration) and patient testimonials to reassure a hesitant visitor before they share health information.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation

## Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, global metadata
│   ├── page.tsx         # Homepage — assembles the sections below
│   ├── globals.css      # Tailwind + CSS custom properties (--navy, --gold, --teal, --cream)
│   └── quiz/
│       └── page.tsx     # /quiz — placeholder "coming soon" page
└── components/
    ├── Navbar.tsx        # Site nav + "Start Consultation" CTA
    ├── HeroSection.tsx   # Landing hero + trust badges
    ├── ServiceCards.tsx  # Men's Health / Women's Health / Skincare / Hair cards
    ├── HowItWorks.tsx    # 3-step process explainer
    ├── WhyMediErge.tsx   # Feature/trust grid
    ├── DoctorPanel.tsx   # Doctor bios and credentials
    ├── Testimonials.tsx  # Patient testimonials
    ├── CTABanner.tsx     # Bottom-of-page conversion banner
    └── Footer.tsx        # Site footer, sitemap links, medical disclaimer
```

## Routes

| Route | Status |
|---|---|
| `/` | ✅ Live — homepage |
| `/quiz` | ⚠️ Placeholder — "Your Assessment Awaits... coming soon," no functional form |
| `/mens-health` | ❌ Not implemented (404) |
| `/womens-health` | ❌ Not implemented (404) |
| `/skincare` | ❌ Not implemented (404) |
| `/hair` | ❌ Not implemented (404) |
| `/how-it-works` | ❌ Not implemented (404) |
| `/about` | ❌ Not implemented (404) |

## Known Issues / TODO

- **Every primary CTA leads to an incomplete flow.** All "Start Consultation" / "Start Your Assessment" buttons point to `/quiz`, which is currently a static placeholder with no form logic.
- **Six of eight linked routes 404.** The navbar, service cards, and footer all link to `/mens-health`, `/womens-health`, `/skincare`, `/hair`, `/how-it-works`, and `/about`, none of which have a corresponding page yet.
- **No backend.** All content (services, doctors, testimonials) is hardcoded in component files; there's no API, database, or CMS integration.
- **No auth, payments, or booking system**, despite the site describing a consultation → prescription → delivery flow.

## Medical Disclaimer

As stated in the site footer: prescriptions are issued only after an online consultation with a licensed medical practitioner registered under the Indian Medical Council. This service is not a substitute for emergency medical care.
