# Abython.com — Codebase Handoff

**Last updated:** 2026-05-13 after Prompts 1–7 (rebrand in progress)
**Repository:** `Matthew-Abython/abython.com-website` on GitHub — branch `main`, commit `06b8f0d`

This document gives a complete picture of the current codebase state. It is updated every time changes are pushed to GitHub — if it conflicts with what you see in the files, trust the files.

---

## Project Status

The Abython.com website is mid-rebrand (~7 of ~37 prompts complete). The structural foundation is in place — design tokens, animation libraries, homepage skeleton, and portfolio grid hero. Individual sections and the 16 fake portfolio sites will be built in subsequent prompts.

**Live URL:** https://abython.com  
**Hosting:** Vercel (migrated from Netlify — `netlify.toml` deleted, `vercel.json` is the config)  
**Stack:** Pure HTML / CSS / JS. No framework. No build step. Deployed directly.

---

## File Structure (current state)

```
Abython.com/
├── CLAUDE.md                     ← Canonical project context — read first every session
├── PLAN.md                       ← Living plan + prompt roadmap + future tasks
├── HANDOFF.md                    ← This file — updated on every GitHub push
├── vercel.json                   ← Security headers + CSP (replaced netlify.toml)
├── index.html                    ← Homepage (rebrand skeleton — 298 lines)
├── styles.css                    ← All styles (1,703 lines, design tokens live here)
├── script.js                     ← Nav + scroll animations + demo form IIFE (212 lines)
├── chat.js                       ← Chat widget IIFE
├── ai-receptionist/              ← PLANNED (Prompt 8) — not yet created
├── google-business-profile/      ← PLANNED — not yet created
├── seo-and-aio/                  ← PLANNED — not yet created
├── web-design/                   ← PLANNED — not yet created
├── work/                         ← PLANNED (Prompts 9–28) — not yet created
├── privacy-policy/
│   └── index.html                ← Existing, will be restyled
└── terms-and-conditions/
    └── index.html                ← Existing, will be restyled
```

**What doesn't exist yet:** All service subpages (`/ai-receptionist/`, `/google-business-profile/`, `/seo-and-aio/`, `/web-design/`), the `/work/` portfolio index, and all 16 fake portfolio sites are planned but not yet created. Clicking any portfolio tile on the homepage currently 404s — that's expected.

---

## Design System

The rebrand uses a completely new design system from the original site. The old dark purple theme is gone.

### Palette (locked tokens in `styles.css` `:root`)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F4F1EB` | Off-white base — dominant page color |
| `--bg-elevated` | `#FFFFFF` | Cards, elevated surfaces |
| `--bg-inverse` | `#0A0A0A` | Dark sections (final CTA, footer) |
| `--ink` | `#0A0A0A` | Primary text |
| `--ink-muted` | `#525252` | Secondary text |
| `--ink-subtle` | `#A3A3A3` | Captions, tertiary |
| `--ink-inverse` | `#F4F1EB` | Text on dark bg |
| `--accent` | `#1E3A8A` | Trust blue — primary brand color |
| `--accent-hover` | `#2952B5` | Hover state |
| `--accent-soft` | `#E8EDF9` | Tinted bg for badges, highlights |
| `--accent-glow` | `rgba(30,58,138,0.22)` | Shadows, glows |
| `--border` | `rgba(10,10,10,0.08)` | Default borders |
| `--border-strong` | `rgba(10,10,10,0.16)` | Hover/emphasis borders |

### Typography

- **Display/headings:** `'Fraunces', Georgia, serif` — loaded from Google Fonts
- **Body/UI:** `'Inter Tight', system-ui, sans-serif` — loaded from Google Fonts
- **Mono:** `'JetBrains Mono', monospace` (used sparingly)

### Key spacing tokens

| Token | Value |
|-------|-------|
| `--nav-height` | `72px` |
| `--content-width` | `1280px` |
| `--content-width-narrow` | `920px` |
| `--section-py` | `120px` |
| `--radius-btn` | `9999px` (pill) |
| `--radius` | `16px` |

---

## index.html — Current Structure

The homepage skeleton is in place. Sections have HTML and class names but most section-specific styles aren't written yet — they'll come in later prompts.

### `<head>`
- Loads Google Fonts (Fraunces + Inter Tight)
- Loads `styles.css`
- No other stylesheets or framework scripts

### Navigation (`.nav` / `#primary-nav`)
- Fixed top, 72px height, frosted off-white (`rgba(244,241,235,0.85)` + `blur(14px)`)
- New structure: `.nav-inner` (flex container) with `.nav-logo` (wordmark) on left, `#nav-links` on right
- Nav links: Work, Services, AI Receptionist, GBP, SEO + AIO, Contact
- Hamburger `#nav-toggle` → toggles `.open` on `#nav-links` (mobile)

### Portfolio Grid Hero (`.work-grid-hero` / `#work`)
- Full-bleed 4×4 grid of 16 `.work-tile` elements
- Each tile has a unique gradient background (`data-tile="1"` through `data-tile="16"`)
- Hover: tile scales 1.03×, label fades + slides up, scrim appears
- Dark tiles (4, 9, 14, 16) use inverted scrim + `--ink-inverse` label color
- Responsive: 2-col at ≤900px, 1-col at ≤540px; labels always visible on touch devices
- Click → opens `/work/{slug}` in new tab (all 404 until Prompts 13–28)

### Statement Section (`.statement` / `#statement`)
- Placeholder copy: "We build, manage, and grow websites that actually book appointments."
- Final copy comes in Prompt 29

### Services Section (`.services` / `#services`)
- 4 cards (`.service-card`): Web Design, SEO + AIO, GBP, AI Receptionist
- Each has `.service-card-num`, `h3`, `.service-card-body`, `.service-card-link`
- Full content + SEO/AIO explainer comes in Prompt 30

### Managed Section (`.managed` / `#managed`)
- "We don't ship a website and disappear." differentiator
- Placeholder copy, real content in Prompt 31

### Demo Section (`.demo-section` / `#demo`)
- Contains the live VAPI demo form — **this is a locked integration**
- Full container restyling in Prompt 32; form HTML/JS must not change

### Final CTA (`.final-cta` / `#contact`)
- Calendly booking button → `https://calendly.com/owner-abython/new-meeting`
- Phone + email contact links
- Polish in Prompt 33

### Footer (`.footer`)
- Wordmark left, legal nav right, copyright line

### Chat Widget
- Inline `<style>` block + `#chat-widget` div (tokens updated to rebrand palette)
- Logic in `chat.js`
- Restyled in Prompt 34

### Script load order (end of `<body>`)
1. `https://unpkg.com/lenis@1.3.8/dist/lenis.min.js`
2. `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
3. `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`
4. `chat.js`
5. `script.js`

---

## script.js — Current Structure (212 lines)

### 1. Lenis-aware anchor scroll handler (lines 1–27)
Intercepts `a[href^="#"]` clicks. Uses `window.lenis.scrollTo()` if Lenis is initialized, falls back to native `window.scrollTo`. Closes mobile nav on click.

### 2. Mobile nav toggle (lines 29–44)
`#nav-toggle` click → toggles `.open` on `#nav-links`. Click-outside listener closes it.

### 3. `initScrollAnimations()` function (lines 46–85)
Replaces the old IntersectionObserver. Uses GSAP ScrollTrigger:
- Checks `prefers-reduced-motion` first — if reduced, shows all `.animate-ready` elements immediately
- Falls back gracefully if GSAP/ScrollTrigger failed to load
- Each `.animate-ready` element gets: `opacity: 0, y: 24` → `opacity: 1, y: 0`, `duration: 0.8`, `ease: 'power3.out'`, `start: 'top 88%'`

### 4. Demo form IIFE (lines 87–163) — **LOCKED, DO NOT MODIFY**
```js
var WEBHOOK_URL = 'https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c';
// Authorization: 'Bearer abython_xK9#mP2$vQ7nL4wR'
```
Validates fields → POST to n8n → VAPI outbound call. See locked API contracts in CLAUDE.md Section 2.

### 5. Lenis + GSAP init IIFE (lines 165–212)
Boots Lenis with `{ lerp: 0.08, wheelMultiplier: 1.2, smoothWheel: true }`. Exposes instance as `window.lenis`. Syncs with GSAP ticker via `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker.add(...)`. Skips Lenis entirely if `prefers-reduced-motion`. Falls back to RAF loop if GSAP not available. Calls `initScrollAnimations()` after boot.

---

## chat.js — Unchanged from original

Single IIFE. Key variables:
- `var url = 'https://abython.app.n8n.cloud/webhook/squarespace-chat'` (legacy name — do not rename)
- `sid`: session ID for conversation continuity
- `msgc`: message count

**Flow:** toggle open → send message → POST `{sessionId, message, userData, messageCount}` → receive `{success, botResponse, sessionId, messageCount}` → append to `#chat-msgs`.

**Note:** The duplicate chat init bug documented in the original HANDOFF.md has been confirmed resolved — the `chat.js` IIFE does NOT exist inside `script.js`. Both files are distinct.

---

## vercel.json — Security Headers

Replaces the deleted `netlify.toml`. Applied to all routes (`"source": "/(.*)"` and `"source": "/"`).

**CSP key directives:**
- `connect-src`: `'self' https://abython.app.n8n.cloud` — required for demo form + chat widget
- `script-src`: `'self' https://unpkg.com https://cdnjs.cloudflare.com` — required for Lenis + GSAP CDNs
- `font-src`: `https://fonts.gstatic.com`
- `style-src`: `'self' https://fonts.googleapis.com 'unsafe-inline'`
- `frame-ancestors`: `'none'`

**Do not remove any of these without updating the script/font/connect sources to match.**

---

## styles.css — Block Map (1,703 lines)

| Lines | Block |
|-------|-------|
| 1–6 | Comment header + Google Fonts `@import` |
| 8–23 | Reset (`box-sizing`, `html` base) |
| 25–117 | Design tokens (`:root`) |
| 119–257 | Base element styles (body, headings, links, buttons, inputs) |
| 259–349 | Navigation v1 (`.nav-content`, `.logo` — old selectors, harmless) |
| 350–442 | Hero + Demo (old layout — `.hero-demo`, `.hero-title`, `.gradient-text`) |
| 443–535 | Buttons (`.cta-button-primary`, `.cta-button-ghost`, inverse variants) |
| 536–568 | Section common (`.section-label`, `.section-title`, `.section-description`) |
| 570–703 | Services section |
| 705–878 | How It Works section (old layout) |
| 879–990 | Final CTA + Footer |
| 992–1004 | Animations (`.animate-ready` / `.visible`) |
| 1006–1110 | Policy pages |
| 1111–1209 | Demo form (shared styles) |
| 1210–1311 | Responsive 768px breakpoint |
| 1312–1336 | Responsive 480px breakpoint |
| 1337–1416 | Pricing section (old layout) |
| 1417–1476 | **Nav v2** (`.nav-inner`, `.nav-logo`, scoped `.nav .nav-links`) |
| 1477–1700 | **Portfolio grid hero** (`.work-grid-hero`, `.work-grid`, `.work-tile`, tile gradients, hover, responsive, reduced-motion) |
| 1701–1703 | **`.container--narrow`** |

**Note:** Old layout blocks (How It Works, Pricing, hero-demo) still exist in the CSS — they target HTML that was removed in the rebrand. They are harmless dead code and will be cleaned up in a later prompt.

---

## Live API Integrations (locked — do not modify)

| Integration | Endpoint / ID | Used by |
|-------------|---------------|---------|
| Demo form webhook | `https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c` | `script.js` demo IIFE |
| Chat widget webhook | `https://abython.app.n8n.cloud/webhook/squarespace-chat` | `chat.js` |
| VAPI Demo Assistant | `d3e8bd04-1720-4eff-aa56-2e04f5b664ed` | Triggered by n8n after form submit |
| Calendly booking | `https://calendly.com/owner-abython/new-meeting` | Final CTA, all "Book" buttons |

---

## Critical HTML IDs (referenced by script.js)

| ID | Element |
|----|---------|
| `#demo-form` | Demo form element |
| `#demo-first-name` / `name="firstName"` | First name input |
| `#demo-last-name` / `name="lastName"` | Last name input |
| `#demo-email` / `name="email"` | Email input |
| `#demo-phone` / `name="phone"` | Phone input |
| `#sms-consent` / `name="smsConsent"` | SMS consent checkbox |
| `#demo-submit` | Submit button (disabled during fetch) |
| `#demo-success` | Success state div (`hidden` by default) |
| `#error-firstName/lastName/email/phone` | Field error spans |
| `#nav-toggle` | Hamburger button |
| `#nav-links` | Nav links container (gets `.open` on mobile) |
| `#chat-btn` | Chat toggle button |
| `#chat-box` | Chat window |
| `#chat-msgs` | Message scroll area |
| `#chat-inp` | Chat text input |
| `#chat-send` | Chat send button |

---

## Known Issues / Technical Debt

1. **Auth token in client-side JS** — `Authorization: Bearer abython_xK9#mP2$vQ7nL4wR` is plaintext in `script.js`. Known, accepted for now. Migration to Vercel serverless function is a post-launch priority documented in `PLAN.md`.
2. **Weak email validation** — demo form only checks non-empty, no regex. Acceptable until QA pass.
3. **Dead CSS blocks** — old layout styles (How It Works, Pricing, hero-demo) remain in `styles.css` targeting removed HTML. Scheduled for cleanup.
4. **Portfolio tiles 404** — all 16 `/work/{slug}` pages return 404. Expected — portfolio sites built in Prompts 13–28.

---

## What's Next (Prompts 8–12)

- **Prompt 8** — Create `/ai-receptionist/index.html` (demo form safety net page)
- **Prompt 9** — Create `/work/index.html` (portfolio index grid)
- **Prompt 10** — Create `/google-business-profile/index.html` (placeholder)
- **Prompt 11** — Create `/seo-and-aio/index.html` (placeholder)
- **Prompt 12** — Create `/web-design/index.html` (placeholder)
- **Prompts 13–28** — Build all 16 fake portfolio sites
