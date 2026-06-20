# Abython.com — Codebase Summary

> **Purpose:** Pass this file to any LLM at the start of a session to give it a comprehensive understanding of the Abython.com codebase — file structure, design system, active constraints, and current site state. Keep it updated after every push to GitHub.

---

## 1. Site Overview

| Field | Value |
|---|---|
| **Project** | Abython.com — agency marketing site |
| **Owner** | Matthew Bernhardt — Abython Consulting, Chicago IL |
| **Repo** | `Matthew-Abython/abython.com-website` · branch `main` |
| **Hosting** | Vercel · live at https://abython.com |
| **Stack** | Pure HTML / CSS / JS — no framework, no build step, no npm |

**What Abython sells:** Digital agency services for local service businesses — custom websites, SEO, AIO (AI Optimization cited by ChatGPT/Perplexity/Google AI Overviews), Google Business Profile management, and AI phone receptionist (VAPI-driven).

---

## 2. File Map

| Shortcode | File | Role |
|---|---|---|
| F1 | `index.html` | Homepage: nav, 3×3 portfolio grid, 4 content sections, footer |
| F2 | `styles.css` | All shared CSS — design tokens in `:root`, nav, footer, reveals |
| F3 | `script.js` | Demo form POST, mobile nav, IntersectionObserver reveals, Lenis smooth scroll |
| F4 | `chat.js` | Floating chat widget (main site only) |
| F5 | `ai-receptionist/index.html` | AI receptionist demo form + copy |
| F7 | `vercel.json` | Security headers + CSP — **LOCKED, never touch** |
| S1 | `services/custom-websites/index.html` | Custom Websites service page |
| S2 | `services/local-seo/index.html` | Local Search Dominance service page |
| S3 | `services/ai-optimization/index.html` | AI Optimization service page |
| — | `privacy-policy/index.html` | Privacy policy |
| — | `terms-and-conditions/index.html` | Terms & conditions |
| W1–W16 | `work/{slug}/index.html` | Portfolio demo sites (self-contained, see §4) |
| — | `tile-iframe-scaler.js` | Scales portfolio iframes to fit homepage grid tiles |

---

## 3. Homepage 3×3 Portfolio Grid

Each tile is an iframe preview of a portfolio demo site at `/work/{slug}/`.

| Tile | Slug | Business | Notes |
|---|---|---|---|
| 01 | `azure-cosmetic-dentistry` | Azure Cosmetic Dentistry | Custom one-off design; scrim suppressed |
| 02 | `little-grins-pediatric` | Little Grins Pediatric Dentistry | Soft pastels, playful |
| 03 | `west-side-derma-spa` | West Side Derma + Spa | Editorial spa landing, hero video, fade-up reveals |
| 04 | `texas-prosthetics` | Texas Prosthetics | Full-bleed video, two-pill nav, system font |
| 05 | `andersons-boards` | Anderson's Boards | Dark #000, giant type, Readex Pro |
| 06 | `midwestern-iv` | Midwestern IV | Dark, ~10 sections, liquid-glass |
| 07 | `stratum-dermatology` | Stratum Dermatology | 3-row full-screen layout |
| 08 | `graces-private-food-services` | Graces Private Food Services | Dark, ~9 sections, blur-bottom overlay |
| 09 | `bossert-therapy` | Bossert Therapy | Dark video, mouse parallax; scrim suppressed |

**Scrim rule:** Tiles 01 and 09 suppress the hover scrim (`::before { display: none }`). All others keep it.

---

## 4. Full Portfolio Slug Map (W1–W16)

Built tiles: W1, W2, W3, W4, W5, W10, W11, W12, W16. Remaining are placeholders.

| W# | Slug | Business |
|---|---|---|
| W1 | `azure-cosmetic-dentistry` | Azure Cosmetic Dentistry |
| W2 | `little-grins-pediatric` | Little Grins Pediatric Dentistry |
| W3 | `west-side-derma-spa` | West Side Derma + Spa |
| W4 | `texas-prosthetics` | Texas Prosthetics |
| W5 | `andersons-boards` | Anderson's Boards |
| W6 | `hearthfield-family-dental` | Hearthfield Family Dental |
| W7 | `meridian-implants` | Meridian Implant Center |
| W8 | `glow-laser-clinic` | Glow Laser Clinic |
| W9 | `halcyon-plastic-surgery` | Halcyon Plastic Surgery |
| W10 | `midwestern-iv` | Midwestern IV |
| W11 | `bossert-therapy` | Bossert Therapy |
| W12 | `stratum-dermatology` | Stratum Dermatology |
| W13 | `kinetics-pilates` | Kinetics Pilates Studio |
| W14 | `north-barber-co` | North Barber Co. |
| W15 | `ironwood-law` | Ironwood Law |
| W16 | `graces-private-food-services` | Graces Private Food Services |

---

## 5. Design System

**Tokens** (all in `styles.css :root` — do not rename or change values without explicit instruction):

```
--bg: #F7F5F1          --bg-elevated: #EFECE6     --bg-inverse: #0F1117
--ink: #0F1117         --ink-muted: #4A4A52        --ink-subtle: #8A8A94
--ink-inverse: #F7F5F1 --accent: #1A3566           --accent-hover: #122850
--accent-2: #B8972A    --border: rgba(15,17,23,.08) --border-inverse: rgba(247,245,241,.12)
--radius: 16px         --radius-lg: 24px           --radius-btn: 9999px
--nav-height: 72px     --content-width: 1280px     --section-py: 160px
--error: #dc2626       --card-shadow: 0 2px 8px rgba(15,17,23,.06)
```

**Fonts:** Cormorant Garamond (display/headings) · DM Sans (body/UI) · DM Mono (labels) — Google Fonts via `@import` in `styles.css`.

**Reveal system:** `.reveal-ready` (opacity 0 + translateY 32px) → `.is-visible` (visible). IntersectionObserver in `script.js` adds `.is-visible` at threshold 0.15. Service pages enhance with `filter: blur(12px)` → `blur(0)` in their inline `<style>` blocks.

**Nav:** Fixed, frosted glass (`rgba(247,245,241,0.85)` + `backdrop-filter: blur(20px)`). Services dropdown (desktop: absolute panel; mobile: max-height accordion). All pages load `styles.css` for nav/footer styles.

---

## 6. Locked Constraints — Never Modify Without Explicit Instruction

| What | Value |
|---|---|
| Demo form POST | `https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c` — auth `Bearer abython_xK9#mP2$vQ7nL4wR` |
| Chat POST | `https://abython.app.n8n.cloud/webhook/squarespace-chat` (legacy name, do not rename) |
| Calendly | `https://calendly.com/owner-abython/new-meeting` — all Book CTAs |
| vercel.json | LOCKED — CSP blocks inline scripts; scripts only from `self`, `unpkg.com`, `cdnjs.cloudflare.com` |
| Portfolio tiles | Vanilla JS only; all asset paths absolute from site root; Google Fonts only; videos self-hosted |
| tile-iframe-scaler.js | Must use `querySelectorAll` + `forEach` — do not revert to single-element |

---

## 7. Service Pages (S1, S2, S3) — Architecture

All three pages share the same layout pattern (P28 redesign):
- Loads `styles.css` + inline `<style>` block with `sp-*` class CSS
- Hero: 2-col (55/45), display headline, decorative word (BUILD / SEARCH / AI) at 6% opacity
- Stat row: dark section, 3 large Cormorant numbers in `--accent-2` gold
- 4 alternating light/dark sections: eyebrow label → headline → body → 2-col 3D feature cards
- Section 4: 3-col card grid (summary/closing argument)
- S3 Section 3: vertical timeline (circle markers + `--accent-2` line) instead of cards
- Bottom CTA section + cross-service links
- `.reveal-ready` blurFadeUp via `initReveal()` in `script.js`

---

## 8. Active Issues

1. Auth token exposed client-side in `script.js` — known, post-launch fix (move to Vercel serverless)
2. Weak email validation in demo form — acceptable for now

---

## 9. Change History

| Session | What changed |
|---|---|
| P1–P22 | Site built from scratch: nav, portfolio grid, design system, chat widget, demo form, all 9 portfolio tiles built, luxury minimal redesign applied |
| P23 | 3 service detail pages created (`/services/custom-websites/`, `/services/local-seo/`, `/services/ai-optimization/`) |
| P24 | Homepage narrative sections redesigned with 3 distinct editorial layouts |
| P25–P25.5b | Design system tokens + card utilities; mobile nav; reveal system; GSAP injected into W10/W16 |
| P26 | Full luxury minimal redesign: Cormorant + DM Sans + DM Mono; parchment palette; 4 homepage sections; 3-col footer |
| P27 | Deleted work/index.html; Services nav dropdown added to all pages; industry-agnostic copy audit; S2 SEO audit → search.google.com |
| P28 | Full redesign of S1/S2/S3: alternating sections, stat rows, 3D feature cards, S3 timeline, inline sp-* CSS |
| P29 | AI Receptionist moved from top-level nav into Services dropdown on all 7 pages |
