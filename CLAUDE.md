# CLAUDE.md — Abython.com Rebrand Context

> **READ THIS FIRST** at the start of every session before making any changes.
> Current file state and prompt history are in `SESSION.md` — read that too.

---

## 1. Project Overview

**Project:** Abython.com — full rebrand
**Owner:** Matthew Bernhardt — Abython Consulting
**Repo:** `Matthew-Abython/abython.com-website` | **Branch:** `main`
**Hosting:** Vercel
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
| 2 | `little-grins-pediatric` | Little Grins Pediatric Dentistry | Pediatric dentist | Playful premium, soft pastels |
| 3 | `modern-derma-spa` | Modern Derma and Spa | Medical Spa | Glassmorphism, rounded card, navy + cream |
| 4 | `texas-prosthetics` | Texas Prosthetics | Prosthetics | Full-bleed video, two-pill nav, bottom-left hero, system font |
| 5 | `andersons-boards` | Anderson's Boards | Snowboard Shop | Dark full-bleed, 3-part pill nav, staggered giant type, floating stats |
| 6 | `hearthfield-family-dental` | Hearthfield Family Dental | Family dentist | Warm, sage green + cream |
| 7 | `meridian-implants` | Meridian Implant Center | Implants | Clinical-luxury, navy + silver |
| 8 | `glow-laser-clinic` | Glow Laser Clinic | Laser hair removal | Bright, gradient-forward |
| 9 | `halcyon-plastic-surgery` | Halcyon Plastic Surgery | Plastic surgeon | Cinematic, dark mode, full-bleed |
| 10 | `midwestern-iv` | Midwestern IV | IV therapy lounge | Dark cosmic + liquid-glass; multi-section single-page; Instrument Serif italic + Barlow |
| 11 | `bossert-therapy` | Bossert Therapy | Individual &amp; Couples Therapy | Dark video hero, mouse parallax, liquid-glass nav, blur-bottom overlay, blurFadeUp; Sora font; green accent |
| 12 | `stratum-dermatology` | Stratum Dermatology | Dermatologist | Clean, scientific, blue + white |
| 13 | `kinetics-pilates` | Kinetics Pilates Studio | Pilates | Movement-forward, bold type |
| 14 | `north-barber-co` | North Barber Co. | Barber | Masculine monochrome, condensed |
| 15 | `ironwood-law` | Ironwood Law | Law firm | Serif-heavy, ivory + navy |
| 16 | `graces-private-food-services` | Graces Private Food Services | Private Chef / Catering | Dark liquid-glass, multi-section single-page, video hero; Instrument Serif italic + Inter; second multi-section tile after W10 |

---

## 6. Animation Conventions

GSAP + Lenis on every page that uses animation. Init pattern (bottom of `script.js`):
```js
const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.2 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```
Per-section animations go in named functions called after DOMContentLoaded. Always gate on `prefers-reduced-motion`.

---

## 7. Git Workflow

**Before every push:** Update `SESSION.md` (current state, file map if changed, active issues, prompt history row). Stage `SESSION.md` in the same commit as code changes.

Commit style: conventional commits — `feat:`, `style:`, `fix:`, `chore:`
Repo: `Matthew-Abython/abython.com-website` | Branch: `main`
Push only at end of major milestones, never mid-prompt unless explicitly instructed.

---

## 8. Efficiency Rules (Read-First Gates)

- **Read files from disk** before asking about structure. Never ask what a file contains — read it.
- **Targeted reads only.** When editing a specific section, read the relevant line range, not the whole file.
- **No trailing summaries.** Do not re-summarize changes at end of a response. The diff shows the work.
- **No mid-session SESSION.md updates.** Only update SESSION.md when explicitly committing and pushing.
- **Single-pass edits.** Make all changes to a file in one Edit call, not multiple sequential reads/edits.
- **No re-reads after edits.** Edit/Write confirm success — do not re-read to verify.
- **Small session = skip §3–6.** If this session is a single-file style edit with no new pages or locked-constraint changes, you may read only §1, §2, and `SESSION.md`. Skip §3–7.

---

## 9. Portfolio Tile Build Pattern (W2 onward)

This section is the source of truth for building portfolio demo tiles 2–16.

**Documented exceptions (§9.5 hero composition does not apply):**
- **W1 — Azure Cosmetic Dentistry**: one-off custom design, built before this pattern existed
- **W12 — Stratum Dermatology**: 3-row full-screen layout (nav / stats row / bottom content with clip-reveal heading) per external design spec. §9.3 CSP rules and §9.6 variable-layer protocol still apply.
- **W3 — Modern Derma and Spa**: glassmorphism rounded-card layout. §9.5 hero composition does not apply (page-wrapper padding + border-radius card, no full-bleed stretch). §9.5 nav pattern also does not apply (no hamburger, no mobile sheet — mobile shows brand wordmark + CTA only). §9.3 CSP rules and §9.6 variable-layer protocol still apply.
- **W4 — Texas Prosthetics**: full-bleed video (no rounded card), two-pill centered nav (logo circle + links pill), bottom-left hero content, no hamburger/sheet, system font stack (no Google Fonts link), custom animation timing (0.5s duration, 0.1s stagger). §9.3 CSP rules and §9.6 variable-layer protocol still apply.
- **W5 — Anderson's Boards**: dark theme (body bg #000, white text — first dark tile in portfolio), full-bleed video, 3-part pill navbar (logo pill + center links pill + right button), giant staggered absolute-positioned typography, floating stat blocks, bottom gradient overlay, all-lowercase text, Readex Pro font, custom animation timing (0.5s/0.1s, matches W4). No hamburger/sheet.
- **W10 — Midwestern IV**: FIRST multi-section tile in portfolio (~10 sections including drip menu, membership tiers, FAQ, footer). Dark theme (second dark tile after W5). Custom liquid-glass design system, two FadingVideo backgrounds with rAF crossfade (no CSS transitions on videos), BlurText word-by-word animation on hero headline. 3-part liquid-glass navbar with mobile sheet (unlike W4/W5 which omit the sheet). Instrument Serif italic + Barlow fonts. Iframe preview shows full long-scroll page squished — per user decision, no height clamp applied. All React/Babel/Framer Motion translated to vanilla per §9.3.
- **W16 — Graces Private Food Services**: SECOND multi-section tile (~9 sections: hero, services, menu, about, process, testimonials, FAQ, booking, footer). Third dark tile (W5, W10, W16). Reuses W10's liquid-glass design system and FadingVideo class. One background video in hero only (single video, 14s, fade-at-13.45s loop). Custom typewriter email-capture CTA on hero (State A pill → State B form; post-submit typewriter at 30ms/char; no backend, no fetch). 3-part liquid-glass navbar with mobile sheet; sheet has 5 inlined links (Menu/Services/About/Inquire/Book) with no separate CTA wrap. Instrument Serif italic + Inter fonts. Iframe preview shows full long-scroll page squished — no height clamp. All React/Motion/hls.js translated to vanilla per §9.3.

Do not retrofit exceptions into §9.5, and do not copy from them when building new tiles.

### 9.1 — Pattern overview

Every tile from W2 onward is built around the same reusable hero
composition:

- Fullscreen looping background video, brand-matched per tile
- Subtle dark overlay over the video for text legibility
- Foreground hero layout: navbar (logo + 5 links + 2 CTAs + mobile sheet)
  → heading with 3 inline SVG icons → subtext → primary CTA
- Vertical fade-up animation on heading, subtext, CTA (staggered 0s, 0.15s,
  0.30s) via CSS `@keyframes` — not Framer Motion, not JS; always gated on
  `@media (prefers-reduced-motion: no-preference)` so elements are visible by
  default and only animate when the user has not requested reduced motion
- Mobile hamburger opens a right-side slide-in sheet with staggered link
  reveal, implemented in vanilla JS class toggle + CSS transitions

What changes per tile: the background video, color palette, navbar links,
heading copy, subtext copy, CTA copy, the three inline SVG icons in the
heading, and the logo mark. Layout, animation timing, font roles, and
component structure stay constant.

### 9.2 — File layout per tile

Every new tile creates this exact structure:

```
/work/<slug>/index.html
/work/<slug>/styles.css
/work/<slug>/script.js
/work/<slug>/background.mp4    (self-hosted, downloaded from source)
/work/<slug>/[any other brand assets, all self-hosted]
```

Vanilla HTML/CSS/JS only. No React, no Tailwind, no Framer Motion, no build
step — even when the design spec is written for that stack. Translate to
vanilla.

### 9.3 — CSP rules (non-negotiable)

The deployed `vercel.json` CSP enforces:
- Scripts only from `'self'`, `unpkg.com`, `cdnjs.cloudflare.com`
- Same-origin iframes: `frame-ancestors 'self'`, `X-Frame-Options: SAMEORIGIN`
- Inline scripts and inline event handlers blocked

Therefore, in every tile:
- All JS lives in `/work/<slug>/script.js` — no inline `<script>` blocks,
  no `onclick=`, no `onload=`, no inline event handlers anywhere
- All asset paths are absolute from site root: `/work/<slug>/background.mp4`,
  `/work/<slug>/script.js`, etc. — never relative paths
- Only external resource allowed: Google Fonts `<link>`
- No nav, link, analytics, or chat widget pointing back to abython.com

### 9.4 — Asset self-hosting and font-source vetting

All third-party media (video, images, audio) must be downloaded once and
committed to the repo under `/work/<slug>/`. Never reference a third-party
CDN URL directly in production HTML — those URLs rot.

Font sources: **Google Fonts only.** Specifically:
- Do NOT use `onlinewebfonts.com` URLs. They serve obfuscated CSS payloads,
  not raw font binaries. They cannot be self-hosted and many fonts they
  list are paid Monotype / Linotype families that we have no license
  to redistribute.
- If a design spec calls for a specific paid font (e.g. Helvetica Now
  Display, Neue Haas Grotesk, etc.), substitute the closest Google Fonts
  equivalent and report the substitution. Sensible substitutes:
  - Helvetica Now Display Bold → Plus Jakarta Sans ExtraBold
  - Neue Haas Grotesk Display → Inter / Manrope
  - GT America → Inter / DM Sans
  - Söhne → Inter
  - Editorial New / serif → Fraunces / DM Serif Display
- If unsure, ask before substituting.

### 9.5 — Reusable hero composition (the constant layer)

**NAVBAR:**
- max-width 1280px, centered, z-index 10
- padding: `px-5 sm:px-8 py-4 sm:py-5` (or vanilla equivalent)
- Left: custom brand SVG logo, 32×32, fill = brand text color
- Center (desktop md+ only): 5 nav links, text-sm font-medium, opacity hover effect
- Right (desktop md+ only):
  - Primary button: rounded-full, bg = brand accent color, white text, px-5 py-2.5
  - Secondary button: rounded-full, bg = brand soft-bg color, text = brand text color, px-5 py-2.5
- Mobile (below md): hamburger icon (inline SVG, NOT lucide-react), toggles to X when sheet is open

**MOBILE SHEET:**
- Triggered by hamburger; closed by X or backdrop click
- Backdrop: fixed inset-0, `rgba(brand-text-rgb, 0.35)`, backdrop-filter blur(4px)
- Sheet: fixed right-0 top-0, width `min(88vw, 360px)`, height 100dvh, background = brand soft-bg color, box-shadow `-12px 0 48px rgba(brand-text-rgb, 0.18)`
- Animation: `translateX(100%)` → `0`, `cubic-bezier(0.22, 1, 0.36, 1)`, 0.45s
- Contents: logo + close button header, 1px divider, nav links (staggered reveal: delay `0.18s + i * 0.07s` per link), bottom CTA buttons matching desktop primary/secondary
- Implementation: CSS transitions + vanilla JS class toggle. NOT Framer Motion.

**HERO HEADING:**
- font-family: brand heading font (Google Fonts)
- font-size: `clamp(1.65rem, 5vw, 3rem)`
- line-height: 1.05
- letter-spacing: -0.01em
- color: brand text color
- margin-bottom: 24px
- Contains 3 inline SVG icons at 24px, color = brand text color, vertical-align middle, position relative with `top: -2px`, placed contextually in the heading text
- Icons are inline SVG (NOT lucide-react, NOT icon fonts), single-color, geometric line/fill style, brand-appropriate

**HERO SUBTEXT:**
- font-family: brand body font (Google Fonts, typically Inter 300–900)
- font-size: `clamp(0.9rem, 2.5vw, 1.1rem)`
- line-height: 1.65
- opacity: 0.8
- max-width: 560px

**PRIMARY CTA BUTTON:**
- background: brand accent color
- color: white
- border-radius: 50px
- padding: 17px 24px
- font-family: brand body font, font-weight 600
- font-size: `clamp(0.9rem, 2vw, 1rem)`
- box-shadow: `0 4px 24px rgba(brand-accent-rgb, 0.28–0.32)`
- min-width: 210px
- Contents: button label + inline SVG right-arrow-in-circle icon (20px) on right
- Hover: `scale(1.04)` + `brightness(1.1)`
- Active: `scale(0.96)`
- Hover/active implemented in CSS, NOT JS

**BACKGROUND VIDEO:**
- `<video>` tag, absolute inset-0, object-cover, behind a subtle dark overlay (`rgba(brand-text-rgb, 0.20–0.30)`; tune to video tone)
- Attributes: `autoplay`, `muted`, `loop`, `playsinline`
- Source: `/work/<slug>/background.mp4`

**FADE-UP ANIMATION (replaces Framer Motion fadeUp):**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
- Heading: `animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: 0s`
- Subtext: `animation-delay: 0.15s`
- CTA: `animation-delay: 0.30s`

### 9.6 — The variable layer (what changes per tile)

For each new tile build, the prompt will specify:
- Slug for the URL (`/work/<slug>/`)
- Business name and brand direction
- Tile number on F1 to replace
- Background video URL to download and self-host
- Color palette: `--color-text`, `--color-accent`, `--color-soft-bg`, `--color-on-accent`
- Heading font and body font (Google Fonts names)
- Navbar link labels (5)
- Navbar CTA labels (primary + secondary)
- Hero heading copy + which 3 inline SVG icons to embed
- Hero subtext copy
- Primary CTA label

Anything not specified defaults to the constants in §9.5.

### 9.7 — Homepage tile integration

After building `/work/<slug>/`, replace the existing placeholder tile on F1
that corresponds to this slot. Tile structure:

```html
<a href="/work/<slug>/" target="_blank" rel="noopener">
  <iframe src="/work/<slug>/"></iframe>
  <div class="tile-overlay"></div>            <!-- transparent, blocks pointer events -->
  <div class="tile-label">NN · DEMO NAME IN CAPS</div>
</a>
```

Where `NN` is the zero-padded tile number (02–16) and "DEMO NAME IN CAPS" is
the business display name in uppercase.

The iframe scaler at `/tile-iframe-scaler.js` already handles multiple tiles
via `querySelectorAll` + `forEach` (refactored during W2 build). Do NOT revert
it to single-tile `querySelector`. Do NOT duplicate the scaler script.

### 9.8 — Hover scrim decision (mandatory)

After downloading the background video for the new tile, watch the first
few seconds and report:
- (a) Predominantly DARK or LIGHT in overall tone
- (b) Brief description of contents

Then decide hover scrim behavior on the F1 tile:
- **DARK video** → suppress hover scrim on this tile (scrim would compound darkness and hurt legibility). Tile 1 (Azure) used this path.
- **LIGHT video** → keep standard hover scrim enabled (scrim is needed for the tile label to read against the bright background). Tile 2 (Little Grins) used this path.
- **OVERRIDE** → If the rendered tile-as-iframe-thumbnail produces a visual hierarchy conflict with the white F1 tile label — e.g., prominent white typography inside the iframe competing with the label, or a non-video surround (rounded card, cream background) dominating over the video tone — the standard dark/light rule does not apply. Make the scrim decision based on which state produces clearer label legibility and layer separation at F1 tile-scale. Documented precedents: W3 Modern Derma (cream surround dominated over video → kept scrim), W5 Anderson's Boards (white iframe typography competed with white label → kept scrim despite dark video).

Report the decision and reasoning in the final report.

### 9.9 — Mandatory Part 0 pre-flight check

Before writing any new files for a tile build, check and report:
1. Does `/work/<slug>/` already exist? If yes, list its contents and pause for instructions before overwriting.
2. Which tile in F1's hero grid currently occupies this slot? Confirm tile number, current `href`, and current label so the right tile is replaced.
3. Does F6 (`work/index.html`) currently have a row for this slot or this slug? Report what's there.
4. Are there any other references to the old slug elsewhere in the repo (grep)? List them.

Pause and report findings before continuing to file creation.

### 9.10 — F6 portfolio grid

Every new tile gets a corresponding row in F6 (`work/index.html`):
- Display name (full business name)
- Industry
- View CTA linking to `/work/<slug>/`, `target="_blank"`, `rel="noopener"`

If a placeholder row exists for this slot, update it. Otherwise insert in
the correct slot position. Match the existing row format already used by
other entries in F6.

### 9.11 — Locked zones (never modify during tile builds)

- F7 `vercel.json` and its CSP/header config
- F3 `script.js` form POST logic and auth header
- F4 `chat.js` chat widget
- F2 design token values in `styles.css` `:root` (new rules elsewhere in F2 are fine; never change existing token values)
- Calendly URL anywhere it appears: `https://calendly.com/owner-abython/new-meeting`
- `/tile-iframe-scaler.js` multi-tile pattern — do not revert to single-tile

### 9.12 — Mandatory final report

At the end of every tile build, report:
1. Part 0 findings (existing folder state, current tile NN, F6 row status, other references to old slug if any)
2. Background video: tone (dark/light) + brief contents description
3. Hover scrim decision and reasoning
4. Any font substitutions made and why (e.g. paid font → Google Fonts equivalent)
5. Any other design-spec deviations and why
6. Confirmation checklist:
   - No inline `<script>` blocks anywhere
   - No inline event handlers (`onclick=`, `onload=`, etc.)
   - All asset paths absolute from site root
   - No relative paths anywhere
   - Google Fonts is the only external resource
   - No nav back to abython.com from the demo site
   - `tile-iframe-scaler.js` still uses `querySelectorAll` + `forEach`
7. Any remaining references to the previous placeholder slug for follow-up cleanup
