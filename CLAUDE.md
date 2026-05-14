# CLAUDE.md — Abython.com Rebrand Context

> **READ THIS FIRST** at the start of every session before making any changes.

This document is the canonical source of truth for the Abython.com rebrand. It contains locked constraints, design tokens, API contracts, and project structure. If anything in a user prompt conflicts with this document, ask for clarification before proceeding.

---

## 1. Project Overview

**Project:** Abython.com — full rebrand from existing site
**Owner:** Matthew Bernhardt — Abython Consulting
**Repository:** `Matthew-Abython/abython.com-website` on GitHub
**Hosting:** Vercel (migrated from Netlify — all Netlify references must be replaced)
**Live URL:** https://abython.com
**Stack:** Pure HTML / CSS / JS. No framework. No build step. Deployed directly.

**What Abython does:** A digital agency for **dentists and med spas** offering:
1. Custom website design + build
2. SEO (traditional search engine optimization)
3. AIO (AI Optimization — being cited by ChatGPT, Perplexity, Google AI Overviews) — *most clients have never heard this term; explaining it is part of the pitch*
4. Google Business Profile (GBP) management
5. AI-powered phone receptionist (VAPI-driven)

**Ideal customer:** Dental practices and medical spas
**Positioning:** Bold, opinionated agency that builds and *actively manages* premium, conversion-focused websites. The Abython marketing site is loud and editorial; the work we ship for clients is calm and luxurious. That contrast is the pitch.

---

## 2. 🔒 LOCKED API CONTRACTS — DO NOT MODIFY

These integrations are live in production. Restyling surrounding HTML/CSS is encouraged. Modifying any of the following is **forbidden** without explicit user instruction:

### Demo Form → VAPI Outbound Call

- **Endpoint:** `https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer abython_xK9#mP2$vQ7nL4wR`
- **Body shape:**
```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string (10 digits, non-digits stripped)",
    "smsConsent": "boolean"
  }
```
- **Success:** `response.ok` → hide form, show `#demo-success` element
- **Failure:** Re-enable submit button, show error in `#error-phone` span
- **Downstream:** Triggers VAPI Demo Assistant `d3e8bd04-1720-4eff-aa56-2e04f5b664ed` to call submitted phone number

### Chat Widget

- **Endpoint:** `https://abython.app.n8n.cloud/webhook/squarespace-chat`
  - *Name is a legacy artifact from a prior site version. Do NOT rename.*
- **Method:** `POST`
- **Body shape:**
```json
  {
    "sessionId": "string | null",
    "message": "string",
    "userData": {},
    "messageCount": "number"
  }
```
- **Expected response:**
```json
  {
    "success": true,
    "botResponse": "string",
    "sessionId": "string",
    "messageCount": "number"
  }
```
- **State:** `sessionId` persists across messages for conversation continuity; `messageCount` increments per send

### Calendly Booking

- **URL:** `https://calendly.com/owner-abython/new-meeting`
- Used by all "Book a Free Demo" / "Schedule a Call" CTAs

### Contact Information

- **Phone:** (847) 636-9074
- **Email:** owner@abython.com

### Vercel `vercel.json` CSP requirements

The `connect-src` directive must always include:
- `'self'`
- `https://abython.app.n8n.cloud`

The `script-src` directive must always include:
- `'self'`
- `https://unpkg.com` (for Lenis)
- `https://cdnjs.cloudflare.com` (for GSAP)

The `font-src` directive must include `https://fonts.gstatic.com` and `style-src` must include `https://fonts.googleapis.com`.

---

## 3. Design System (Locked Tokens)

### Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F4F1EB` | Off-white base, the dominant page color |
| `--bg-elevated` | `#FFFFFF` | Cards, elevated surfaces |
| `--bg-inverse` | `#0A0A0A` | Inverted sections (CTA, footer) |
| `--ink` | `#0A0A0A` | Primary text on light bg |
| `--ink-muted` | `#525252` | Secondary text |
| `--ink-subtle` | `#A3A3A3` | Tertiary text, captions |
| `--ink-inverse` | `#F4F1EB` | Text on dark bg |
| `--accent` | `#1E3A8A` | Trust blue — primary accent |
| `--accent-hover` | `#2952B5` | Lighter blue for hover states |
| `--accent-glow` | `rgba(30, 58, 138, 0.22)` | Soft glow / shadow tint |
| `--border` | `rgba(10, 10, 10, 0.08)` | Default borders |
| `--border-strong` | `rgba(10, 10, 10, 0.16)` | Hover / emphasized borders |

### Typography

- **Display / Headings:** `'Fraunces', Georgia, serif` — variable font, weight 400–900, optical size enabled
- **Body / UI:** `'Inter Tight', system-ui, -apple-system, sans-serif`
- **Mono (if needed):** `'JetBrains Mono', monospace`
- Both Fraunces and Inter Tight load from Google Fonts

### Spacing & Radii

| Token | Value |
|---|---|
| `--radius-sm` | `8px` |
| `--radius` | `16px` |
| `--radius-lg` | `24px` |
| `--radius-btn` | `9999px` (pill) |
| `--nav-height` | `72px` |
| `--content-width` | `1280px` |
| `--section-py` | `120px` |

### Motion conventions

- **Smooth scroll:** Lenis (`unpkg.com/lenis@1.3.x`) — initialized globally, synced with GSAP ticker
- **Animations:** GSAP 3.12+ with ScrollTrigger (`cdnjs.cloudflare.com/ajax/libs/gsap/3.12.x/`)
- **Easing default:** `power3.out` for entrances, `power2.inOut` for transitions
- **Respect `prefers-reduced-motion`:** All entrance animations must check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` and skip if true

### Visual personality

The Abython marketing site is **bold, editorial, opinionated**:
- Oversized Fraunces serif headlines (8rem+ on desktop)
- Generous whitespace
- High contrast (off-white + near-black + trust blue)
- Confident, declarative copy — short sentences, no fluff
- Strong vertical rhythm, deliberate hierarchy

The 16 fake portfolio sites are the **opposite** — calm, premium, luxurious, what dentists and med spas actually want to look like. The contrast between marketing site and portfolio work is intentional and is the pitch itself.

---

## 4. File Structure

```
abython.com/
├── CLAUDE.md                          ← This file (read first)
├── PLAN.md                            ← Living plan + ideas + future tasks
├── HANDOFF.md                         ← Original handoff doc (historical reference)
├── vercel.json                        ← Security headers + CSP (replaces netlify.toml)
├── index.html                         ← Main rebrand site
├── styles.css                         ← Global styles (design tokens live here)
├── script.js                          ← Demo form + nav + scroll animations
├── chat.js                            ← Chat widget IIFE
├── ai-receptionist/
│   └── index.html                     ← AI Receptionist product page (with demo form)
├── google-business-profile/
│   └── index.html                     ← GBP management page (placeholder for now)
├── seo-and-aio/
│   └── index.html                     ← SEO vs AIO educational page (placeholder)
├── web-design/
│   └── index.html                     ← Web design service page (placeholder)
├── work/
│   ├── index.html                     ← Portfolio index page
│   ├── azure-cosmetic-dentistry/      ← Fake site 1
│   ├── little-tooth-pediatric/        ← Fake site 2
│   ├── lumen-medspa/                  ← Fake site 3
│   ├── shape-aesthetics/              ← Fake site 4
│   ├── arcline-orthodontics/          ← Fake site 5
│   ├── hearthfield-family-dental/     ← Fake site 6
│   ├── meridian-implants/             ← Fake site 7
│   ├── glow-laser-clinic/             ← Fake site 8
│   ├── halcyon-plastic-surgery/       ← Fake site 9
│   ├── verdant-iv-lounge/             ← Fake site 10
│   ├── rootwell-holistic-dental/      ← Fake site 11
│   ├── stratum-dermatology/           ← Fake site 12
│   ├── kinetics-pilates/              ← Fake site 13
│   ├── north-barber-co/               ← Fake site 14
│   ├── ironwood-law/                  ← Fake site 15
│   └── savor-private-chef/            ← Fake site 16
├── privacy-policy/
│   └── index.html                     ← Existing, will be restyled
└── terms-and-conditions/
    └── index.html                     ← Existing, will be restyled
```

---

## 5. Portfolio: 16 Fake Sites

Each fake site is a single-page landing (no scroll, no inner pages, no nav) — visually stunning, premium, fully self-contained HTML/CSS with optional minor JS. Each opens in a **new tab** when clicked from the main grid. Each enlarges on hover in the grid.

| # | Slug | Business | Industry | Style Direction |
|---|---|---|---|---|
| 1 | `azure-cosmetic-dentistry` | Azure Cosmetic Dentistry | High-end cosmetic dentist | Gold + cream, luxury serif headlines, cinematic |
| 2 | `little-tooth-pediatric` | Little Tooth Pediatric Dental | Pediatric dentist | Playful but premium, soft pastels, custom illustrations |
| 3 | `lumen-medspa` | Lumen Medspa | Full-service medspa | Editorial pinks, magazine layout, generous whitespace |
| 4 | `shape-aesthetics` | Shape Aesthetics | Botox/injectables | Dark, sculptural, fashion-magazine moody |
| 5 | `arcline-orthodontics` | Arcline Orthodontics | Orthodontist | Modern geometric, electric color pop, sans-only |
| 6 | `hearthfield-family-dental` | Hearthfield Family Dental | Family dentist | Warm, community-focused, sage green + cream |
| 7 | `meridian-implants` | Meridian Implant Center | Implant specialist | Clinical-luxury, deep navy + silver, refined |
| 8 | `glow-laser-clinic` | Glow Laser Clinic | Laser hair removal | Bright, energetic, gradient-forward |
| 9 | `halcyon-plastic-surgery` | Halcyon Plastic Surgery | Plastic surgeon | Cinematic, dramatic, full-bleed photography, dark mode |
| 10 | `verdant-iv-lounge` | Verdant IV Lounge | IV/wellness lounge | Boutique, earthy, terracotta + sage |
| 11 | `rootwell-holistic-dental` | Rootwell Holistic Dental | Holistic dentist | Organic, sage-and-cream, natural texture |
| 12 | `stratum-dermatology` | Stratum Dermatology | Dermatologist | Clean, scientific-modern, blue + white |
| 13 | `kinetics-pilates` | Kinetics Pilates Studio | Pilates studio | Movement-forward, bold typography, kinetic motion |
| 14 | `north-barber-co` | North Barber Co. | High-end barber | Masculine monochrome, condensed type, leather/brass |
| 15 | `ironwood-law` | Ironwood Law | Boutique law firm | Editorial serif-heavy, ivory + navy, gravitas |
| 16 | `savor-private-chef` | Savor Private Chef | Private chef/catering | Lush food photography, deep burgundy, indulgent |

---

## 6. Page Structure

### `/` (Homepage)

1. **Nav header** — fixed top, logo wordmark left, nav links right (Work, Services, AI Receptionist, GBP, SEO + AIO, Contact)
2. **4×4 portfolio grid hero** — fills viewport immediately below nav, no headline, no fluff. Each square enlarges on hover. Click → new tab.
3. **Statement section** — big-type "who we are / who we serve" declaration
4. **Services section** — 4 pillar cards (Web Design, SEO + AIO, GBP, AI Receptionist) with SEO vs AIO explainer
5. **Actively managed differentiator** — what makes Abython not a one-and-done agency
6. **Demo form** — "Try It Free — Hear It Live" (live VAPI call) — restyled but functionally identical to existing
7. **Final CTA** — Calendly booking
8. **Footer** — logo, legal links, contact
9. **Chat widget** — bottom-right floating, restyled

### `/ai-receptionist/`

Dedicated product page for the AI receptionist. Contains the demo form (same code as homepage form — both POST to the same n8n endpoint). This is the **safety net** — if the homepage form is ever moved or restyled, the receptionist demo always lives here.

### `/google-business-profile/`, `/seo-and-aio/`, `/web-design/`

Styled blank placeholders for now. They use the global design system so they don't look broken — just a hero with the page title and a "Coming soon" or single CTA. Content fills in later.

### `/work/`

Index page listing all 16 portfolio sites in a grid (more detailed than the homepage hero — each entry has business name, industry, and a "View" CTA). Deep-linkable.

### `/work/{slug}/`

Each is a single-page fake portfolio site. No nav back to Abython (it's pretending to be a real business site). The only "tell" is the URL.

---

## 7. Animation Library Conventions

GSAP and Lenis are loaded from CDN in `index.html` and on every portfolio site. Initialization lives at the bottom of `script.js`:

```js
// Lenis smooth scroll
const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.2 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

Per-section animations go into named functions called after DOMContentLoaded. Every animation must check `prefers-reduced-motion` and skip if reduced motion is preferred.

---

## 8. Git Workflow

- **Repo:** `Matthew-Abython/abython.com-website`
- **Default branch:** `main`
- **Commit convention:** Conventional commits where reasonable
  - `feat: add 4x4 portfolio grid hero`
  - `style: update design tokens for rebrand`
  - `chore: replace netlify.toml with vercel.json`
- **Push:** Only at the end of major milestones, never mid-prompt unless explicitly instructed

---

## 9. Known Issues (Pre-Rebrand)

Carried forward from `HANDOFF.md`:

1. **Duplicate chat widget init** — `chat.js` IIFE is duplicated at the bottom of `script.js`. To be cleaned up during chat widget restyle (Prompt 34).
2. **Weak email validation** — Demo form only checks non-empty. Acceptable for now; revisit in QA pass.
3. **Auth token client-side** — `Authorization: Bearer abython_xK9#mP2$vQ7nL4wR` is in plaintext in `script.js`. **This is a known security concern.** Migration to Vercel serverless functions is documented in `PLAN.md` and is a post-launch priority.
4. **Stripe links** — Previously documented Stripe links for 3 pricing tiers are removed from this rebrand. Pricing returns later.

---

## 10. What This Site Is NOT

- It is not a CMS-driven site. All content is hand-coded in HTML.
- It is not a React/Vue/Next/Astro project. No build step. No `npm`.
- It is not behind authentication. Everything is public.
- It is not a place for additional analytics/tracking scripts without explicit user approval (CSP would block them anyway).

---

*Last updated: at creation of CLAUDE.md during rebrand kickoff. Update timestamps and changelog entries as the rebrand progresses.*
