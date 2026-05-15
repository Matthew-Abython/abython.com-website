# CLAUDE.md — Abython.com Rebrand Context

> **READ THIS FIRST** at the start of every session before making any changes.
> Current file state and prompt history are in `SESSION.md` — read that too.

---

## 1. Project Overview

**Project:** Abython.com — full rebrand
**Owner:** Matthew Bernhardt — Abython Consulting
**Repo:** `Matthew-Abython/abython.com-website` | **Branch:** `main`
**Hosting:** Vercel (not Netlify — replace any Netlify references)
**Live URL:** https://abython.com
**Stack:** Pure HTML / CSS / JS. No framework. No build step. No npm.

**What Abython does:** Digital agency for **dentists and med spas**:
1. Custom website design + build
2. SEO (traditional search engine optimization)
3. AIO (AI Optimization — cited by ChatGPT, Perplexity, Google AI Overviews) — *most clients have never heard this term; explaining it is part of the pitch*
4. Google Business Profile (GBP) management
5. AI-powered phone receptionist (VAPI-driven)

**Positioning:** Bold, editorial agency. Marketing site is loud and opinionated. Client work is calm and luxurious. That contrast is the pitch.

---

## 2. 🔒 LOCKED API CONTRACTS — DO NOT MODIFY

Live in production. Restyling surrounding HTML/CSS is fine. Modifying the logic/endpoints below is **forbidden** without explicit user instruction.

### Demo Form → VAPI Outbound Call
- **POST** `https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c`
- **Auth:** `Authorization: Bearer abython_xK9#mP2$vQ7nL4wR`
- **Body/success/failure logic:** see `script.js` demo form block
- **Downstream:** Triggers VAPI Demo Assistant `d3e8bd04-1720-4eff-aa56-2e04f5b664ed`

### Chat Widget
- **POST** `https://abython.app.n8n.cloud/webhook/squarespace-chat` *(legacy name — do NOT rename)*
- **Body/response logic:** see `chat.js`
- `sessionId` persists across messages for conversation continuity

### Calendly Booking
- **URL:** `https://calendly.com/owner-abython/new-meeting` — used by all "Book" CTAs

### Contact
- **Phone:** (847) 636-9074 | **Email:** owner@abython.com

### Vercel CSP (`vercel.json`) — required directives
- `connect-src`: `'self'`, `https://abython.app.n8n.cloud`
- `script-src`: `'self'`, `https://unpkg.com`, `https://cdnjs.cloudflare.com`
- `font-src`: `https://fonts.gstatic.com` | `style-src`: `https://fonts.googleapis.com`

---

## 3. Design System (Locked)

**Palette:** CSS custom properties in `styles.css` `:root` block — do not invent new token names, do not change values without explicit instruction.
Key tokens: `--bg` `--bg-elevated` `--bg-inverse` `--ink` `--ink-muted` `--ink-subtle` `--ink-inverse` `--accent` `--accent-hover` `--accent-glow` `--border` `--border-strong`

**Typography:**
- Display/Headings: `'Fraunces', Georgia, serif` — variable, weight 400–900, optical size on
- Body/UI: `'Inter Tight', system-ui, sans-serif`
- Mono (if needed): `'JetBrains Mono', monospace`
- Both load from Google Fonts

**Spacing & Radii:**
`--radius-sm: 8px` | `--radius: 16px` | `--radius-lg: 24px` | `--radius-btn: 9999px`
`--nav-height: 72px` | `--content-width: 1280px` | `--section-py: 120px`

**Motion:**
- Smooth scroll: Lenis (`unpkg.com/lenis@1.3.x`) synced with GSAP ticker
- Animations: GSAP 3.12+ with ScrollTrigger (`cdnjs.cloudflare.com`)
- Easing: `power3.out` entrances, `power2.inOut` transitions
- **Always** check `prefers-reduced-motion` and skip animations if true

**Visual personality — marketing site:** Oversized Fraunces headlines (8rem+ desktop), generous whitespace, high contrast, confident declarative copy, strong vertical rhythm.
**Portfolio sites:** Opposite — calm, premium, luxurious. The contrast is the pitch.

---

## 4. File Structure

See `SESSION.md` for the current file map and line counts. Stack is pure HTML/CSS/JS — no framework, no build step, no npm.

**Key layout pattern:** Every page that needs locked integrations loads `styles.css` from root, and scripts inline at bottom of `<body>`. Chat widget (`chat.js`) is on the main site only.

---

## 5. Portfolio: 16 Fake Sites

Single-page landings. Self-contained HTML/CSS. No nav back to Abython. Open in new tab from the grid.

| # | Slug | Business | Industry | Style |
|---|---|---|---|---|
| 1 | `azure-cosmetic-dentistry` | Azure Cosmetic Dentistry | Cosmetic dentist | Gold + cream, luxury serif, cinematic |
| 2 | `little-tooth-pediatric` | Little Tooth Pediatric Dental | Pediatric dentist | Playful premium, soft pastels |
| 3 | `lumen-medspa` | Lumen Medspa | Medspa | Editorial pinks, magazine layout |
| 4 | `shape-aesthetics` | Shape Aesthetics | Botox/injectables | Dark, sculptural, fashion moody |
| 5 | `arcline-orthodontics` | Arcline Orthodontics | Orthodontist | Geometric, electric color, sans-only |
| 6 | `hearthfield-family-dental` | Hearthfield Family Dental | Family dentist | Warm, sage green + cream |
| 7 | `meridian-implants` | Meridian Implant Center | Implants | Clinical-luxury, navy + silver |
| 8 | `glow-laser-clinic` | Glow Laser Clinic | Laser hair removal | Bright, gradient-forward |
| 9 | `halcyon-plastic-surgery` | Halcyon Plastic Surgery | Plastic surgeon | Cinematic, dark mode, full-bleed |
| 10 | `verdant-iv-lounge` | Verdant IV Lounge | IV lounge | Boutique, terracotta + sage |
| 11 | `rootwell-holistic-dental` | Rootwell Holistic Dental | Holistic dentist | Organic, sage + cream, texture |
| 12 | `stratum-dermatology` | Stratum Dermatology | Dermatologist | Clean, scientific, blue + white |
| 13 | `kinetics-pilates` | Kinetics Pilates Studio | Pilates | Movement-forward, bold type |
| 14 | `north-barber-co` | North Barber Co. | Barber | Masculine monochrome, condensed |
| 15 | `ironwood-law` | Ironwood Law | Law firm | Serif-heavy, ivory + navy |
| 16 | `savor-private-chef` | Savor Private Chef | Private chef | Burgundy, food photography |

---

## 6. Page Structure

### `/` (Homepage)
Nav → 4×4 grid hero (16 tiles, hover enlarges, click → new tab) → Statement → Services (4 cards) → Actively Managed differentiator → Final CTA (Calendly) → Footer → Chat widget

### `/ai-receptionist/`
Demo form (same POST endpoint as old homepage form) + AI receptionist product copy. This page is the permanent home for the live demo.

### `/google-business-profile/`, `/seo-and-aio/`, `/web-design/`
Styled placeholders. Hero + title + single CTA. Content comes later.

### `/work/`
Grid of all 16 portfolio sites with name, industry, View CTA.

### `/work/{slug}/`
Fake portfolio site. No nav back. Self-contained.

---

## 7. Animation Conventions

GSAP + Lenis on every page that uses animation. Init pattern (bottom of `script.js`):
```js
const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.2 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```
Per-section animations go in named functions called after DOMContentLoaded. Always gate on `prefers-reduced-motion`.

---

## 8. Git Workflow

**Before every push:** Update `SESSION.md` (current state, file map if changed, active issues, prompt history row). Stage `SESSION.md` in the same commit as code changes.

Commit style: conventional commits — `feat:`, `style:`, `fix:`, `chore:`
Repo: `Matthew-Abython/abython.com-website` | Branch: `main`
Push only at end of major milestones, never mid-prompt unless explicitly instructed.

---

## 9. What This Site Is NOT

- Not CMS-driven. All content is hand-coded HTML.
- Not React/Vue/Next/Astro. No build step. No npm.
- Not behind auth. Everything is public.
- Not a place for analytics/tracking scripts without explicit approval (CSP blocks them anyway).

---

## 10. Efficiency Rules (Read-First Gates)

- **Read files from disk** before asking about structure. Never ask what a file contains — read it.
- **Targeted reads only.** When editing a specific section, read the relevant line range, not the whole file.
- **No trailing summaries.** Do not re-summarize changes at end of a response. The diff shows the work.
- **No mid-session SESSION.md updates.** Only update SESSION.md when explicitly committing and pushing.
- **Single-pass edits.** Make all changes to a file in one Edit call, not multiple sequential reads/edits.
- **No re-reads after edits.** Edit/Write confirm success — do not re-read to verify.
- **Small session = skip §3–7.** If this session is a single-file style edit with no new pages or locked-constraint changes, you may read only §1, §2, and `SESSION.md`. Skip §3–7.
