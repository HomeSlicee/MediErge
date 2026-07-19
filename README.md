# MediErge — Your Medical Concierge

MediErge is the marketing site for a premium, direct-to-consumer telehealth concierge serving India. It presents clinician-guided, personalized treatment plans across four verticals — **Men's Health**, **Women's Health**, **Skincare**, and **Hair** — delivered entirely online, with prescriptions shipped discreetly to the patient's door.

The site states it operates in accordance with the MoHFW Telemedicine Practice Guidelines 2020, and highlights doctors registered with the Indian Medical Council (IMC).

> **Status:** Front-end only. All core pages are live. There is no backend, database, authentication, or payment integration yet — see [Known Issues](#known-issues--todo) below.

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
│   ├── layout.tsx           # Root layout, global metadata
│   ├── page.tsx             # Homepage — assembles the sections below
│   ├── globals.css          # Tailwind + CSS custom properties (--navy, --gold, --teal, --cream)
│   ├── quiz/
│   │   └── page.tsx         # /quiz — placeholder "coming soon" page
│   ├── mens-health/
│   │   └── page.tsx         # /mens-health — conditions, treatment cards, how it works
│   ├── womens-health/
│   │   └── page.tsx         # /womens-health — PCOS, hormones, skin & hair, wellness
│   ├── skincare/
│   │   └── page.tsx         # /skincare — acne, pigmentation, anti-aging, routines
│   ├── hair/
│   │   └── page.tsx         # /hair — hair loss, regrowth, scalp health
│   ├── how-it-works/
│   │   └── page.tsx         # /how-it-works — 6-step process, FAQ
│   └── about/
│       └── page.tsx         # /about — mission, stats, values, doctor profiles
└── components/
    ├── Navbar.tsx            # Site nav + "Start Consultation" CTA
    ├── HeroSection.tsx       # Landing hero + trust badges
    ├── ServiceCards.tsx      # Men's Health / Women's Health / Skincare / Hair cards
    ├── HowItWorks.tsx        # 3-step process explainer
    ├── WhyMediErge.tsx       # Feature/trust grid
    ├── DoctorPanel.tsx       # Doctor bios and credentials
    ├── Testimonials.tsx      # Patient testimonials
    ├── CTABanner.tsx         # Bottom-of-page conversion banner
    └── Footer.tsx            # Site footer, sitemap links, medical disclaimer
```

## Routes

| Route | Status |
|---|---|
| `/` | ✅ Live — homepage |
| `/mens-health` | ✅ Live — conditions, treatment cards, how it works |
| `/womens-health` | ✅ Live — PCOS, hormones, skin & hair, wellness |
| `/skincare` | ✅ Live — acne, pigmentation, anti-aging, routines |
| `/hair` | ✅ Live — hair loss, regrowth, scalp health |
| `/how-it-works` | ✅ Live — 6-step process explainer, FAQ |
| `/about` | ✅ Live — mission, stats, values, doctor profiles |
| `/quiz` | ⚠️ Placeholder — "Your Assessment Awaits... coming soon," no functional form |

## Known Issues / TODO

- **Quiz is not yet functional.** All "Start Consultation" / "Start Your Assessment" buttons point to `/quiz`, which is currently a static placeholder with no form logic.
- **No backend.** All content (services, doctors, testimonials) is hardcoded in component files; there's no API, database, or CMS integration.
- **No auth, payments, or booking system**, despite the site describing a consultation → prescription → delivery flow.

## Medical Disclaimer

As stated in the site footer: prescriptions are issued only after an online consultation with a licensed medical practitioner registered under the Indian Medical Council. This service is not a substitute for emergency medical care.
