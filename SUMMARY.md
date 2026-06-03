# Abython.com — Website Summary

> **Purpose:** Hand this file to a separate planning Claude chat. That chat can use it to understand the full site, plan edits, and generate precise prompts to bring back to the implementation session.
> **Keep current:** This file must be updated after every push to GitHub.

---

## 1. Site Overview

| Field | Value |
|---|---|
| **Project** | Abython.com — agency marketing site |
| **Owner** | Matthew Bernhardt — Abython Consulting, Chicago/Evanston IL |
| **Repo** | `Matthew-Abython/abython.com-website` · branch `main` |
| **Hosting** | Vercel · live at https://abython.com |
| **Stack** | Pure HTML / CSS / JS — no framework, no build step, no npm |

**What Abython sells:** Digital agency services for local service businesses — website design, SEO, AIO (AI Optimization), Google Business Profile management, and AI phone receptionist (VAPI-driven). The marketing site is bold and editorial; the portfolio demos are calm and luxurious. That contrast is the pitch.

---

## 2. Main Site File Map

| File | Role |
|---|---|
| `index.html` | Nav, 3×3 hero grid (9 portfolio tiles), Sections A–D (craft/services/advantage/CTA), footer |
| `styles.css` | All CSS — design tokens in `:root` at top; luxury minimal design system (Cormorant + DM Sans + DM Mono) |
| `script.js` | Demo form POST, mobile nav, IntersectionObserver reveals, Lenis smooth scroll, page-load animation, parallax |
| `chat.js` | Chat widget — floating bottom-right bubble |
| `vercel.json` | Security headers + CSP — **LOCKED, never touch** |
| `ai-receptionist/index.html` | Demo form + AI receptionist product copy |
| `services/custom-websites/index.html` | Custom Websites service detail page |
| `services/local-seo/index.html` | Local Search Dominance service detail page (covers GBP) |
| `services/ai-optimization/index.html` | AI Optimization service detail page |
| `work/{slug}/index.html` × 16 | Individual portfolio demo sites (self-contained) |
| `privacy-policy/index.html` | Policy page |
| `terms-and-conditions/index.html` | Terms page |

---

## 3. File Shortcodes (use in prompts to this session)

```
F1 = index.html                          F2 = styles.css
F3 = script.js                           F4 = chat.js
F5 = ai-receptionist/index.html
F7 = vercel.json
S1 = services/custom-websites/index.html
S2 = services/local-seo/index.html
S3 = services/ai-optimization/index.html
W1–W16 = work/{slug}/index.html  (see §5 portfolio table below)
```

---

## 4. Homepage 3×3 Grid — Active Tiles

The homepage hero is a 3×3 grid. Each tile is a live iframe preview of a portfolio site.

| Tile | Slug | Business | Design notes |
|---|---|---|---|
| 01 | `azure-cosmetic-dentistry` | Azure Cosmetic Dentistry | Gold + cream, luxury serif, one-off custom design |
| 02 | `little-grins-pediatric` | Little Grins Pediatric Dentistry | Playful premium, soft pastels |
| 03 | `modern-derma-spa` | Modern Derma and Spa | Glassmorphism rounded card, navy + cream, simple loop video |
| 04 | `texas-prosthetics` | Texas Prosthetics | Full-bleed video, two-pill centered nav, bottom-left hero, system font |
| 05 | `andersons-boards` | Anderson's Boards | Dark #000 bg, giant staggered type, floating stats, Readex Pro, dark tile #1 |
| 06 | `midwestern-iv` | Midwestern IV | Dark multi-section (~10 sections), liquid-glass, FadingVideo rAF crossfade, Instrument Serif + Barlow, dark tile #2 |
| 07 | `stratum-dermatology` | Stratum Dermatology | Clean, clinical-luxury, blue + white, 3-row full-screen layout |
| 08 | `graces-private-food-services` | Graces Private Food Services | Dark multi-section (~9 sections), video hero (native loop), blur-bottom overlay, blurFadeUp, Instrument Serif + Inter, dark tile #3 |
| 09 | `bossert-therapy` | Bossert Therapy | Dark video, mouse parallax (rAF lerp scale 1.08 ±20px), liquid-glass nav pill, blur-bottom overlay, blurFadeUp, Sora font, therapy rebrand, dark tile #4 |

**Hover scrim rule (F2 `styles.css`):**
- Tiles 01 and 09 have `::before { display: none }` — scrim suppressed (dark video, legible without it)
- All other tiles keep the hover scrim enabled

---

## 5. Full Portfolio Slug List (W1–W16)

These are the 16 fake client sites in `work/`. Only W1, W2, W3, W4, W5, W10, W11, W12, W16 have been fully built. The rest are placeholders.

| W# | Slug | Business | Industry |
|---|---|---|---|
| W1 | `azure-cosmetic-dentistry` | Azure Cosmetic Dentistry | Cosmetic dentist |
| W2 | `little-grins-pediatric` | Little Grins Pediatric Dentistry | Pediatric dentist |
| W3 | `modern-derma-spa` | Modern Derma and Spa | Medical spa |
| W4 | `texas-prosthetics` | Texas Prosthetics | Prosthetics |
| W5 | `andersons-boards` | Anderson's Boards | Snowboard shop |
| W6 | `hearthfield-family-dental` | Hearthfield Family Dental | Family dentist |
| W7 | `meridian-implants` | Meridian Implant Center | Implants |
| W8 | `glow-laser-clinic` | Glow Laser Clinic | Laser hair removal |
| W9 | `halcyon-plastic-surgery` | Halcyon Plastic Surgery | Plastic surgeon |
| W10 | `midwestern-iv` | Midwestern IV | IV therapy lounge |
| W11 | `bossert-therapy` | Bossert Therapy | Individual & couples therapy |
| W12 | `stratum-dermatology` | Stratum Dermatology | Dermatologist |
| W13 | `kinetics-pilates` | Kinetics Pilates Studio | Pilates |
| W14 | `north-barber-co` | North Barber Co. | Barber |
| W15 | `ironwood-law` | Ironwood Law | Law firm |
| W16 | `graces-private-food-services` | Graces Private Food Services | Private chef / catering |

---

## 6. Design System — Main Site Tokens

All tokens live in `styles.css` `:root`. Never rename or change values without explicit instruction.

```
--bg  --bg-elevated  --bg-inverse  --ink  --ink-muted  --ink-subtle
--ink-inverse  --accent  --accent-hover  --accent-glow  --border  --border-strong
--radius-sm: 8px  --radius: 16px  --radius-lg: 24px  --radius-btn: 9999px
--nav-height: 72px  --content-width: 1280px  --section-py: 120px

/* Added P25 */
--error: #dc2626  --error-bg: #fef2f2  --error-border: rgba(220,38,38,0.2)
--card-bg: #FFFFFF  --card-border: rgba(10,10,10,0.08)
--card-shadow: 0 2px 8px rgba(10,10,10,0.06)
--card-shadow-hover: 0 8px 28px rgba(10,10,10,0.10)
```

**Luxury minimal design system (P26):** `--bg:#F7F5F1` · `--bg-elevated:#EFECE6` · `--bg-inverse:#0F1117` · `--accent:#1A3566` (deep trust blue) · `--accent-2:#B8972A` (antique gold) · `--section-py:160px`

**Reveal system (P26):** `.reveal-ready` → `opacity:0 + translateY(32px)` · `.reveal-ready.is-visible` → visible. IntersectionObserver (threshold 0.15) in script.js adds `.is-visible`. `[data-animate="card"]` and `[data-animate="heading"]` use same pattern.

**Fonts (main site):** Cormorant Garamond (display/headings) + DM Sans (body/UI) + DM Mono (labels) — all Google Fonts.

---

## 7. Technical Constraints

Full details in `CLAUDE.md §2` (locked API contracts) and `CLAUDE.md §9.3` (CSP rules). Quick reference:

- **Demo form POST:** `https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c` — auth `Bearer abython_xK9#mP2$vQ7nL4wR`
- **Chat POST:** `https://abython.app.n8n.cloud/webhook/squarespace-chat` — legacy name, do not rename
- **Calendly:** `https://calendly.com/owner-abython/new-meeting` — all Book CTAs
- **vercel.json:** LOCKED — never touch; CSP blocks inline scripts, non-CDN scripts, and external video URLs
- **Portfolio tiles:** vanilla JS only, all paths absolute from site root, Google Fonts only, external video must be self-hosted

---

## 8. Proven Visual Patterns (use these when specifying new tiles)

### Video background (reliable)
```html
<video autoplay muted loop playsinline aria-hidden="true">
  <source src="/work/{slug}/background.mp4" type="video/mp4">
</video>
```
Use `autoplay muted loop playsinline` with no JS opacity tricks. This pattern works in all browsers. Do NOT use FadingVideo — it was removed from graces after persistent visibility bugs.

### Blur-bottom overlay (used on graces W16 + bossert-therapy W11)
```css
.hero-overlay {
  position: absolute; inset: 0;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  -webkit-mask-image: linear-gradient(to top, black 0%, transparent 45%);
  mask-image: linear-gradient(to top, black 0%, transparent 45%);
  z-index: 1; pointer-events: none;
}
```
No dark gradient — blur only, concentrated at the bottom.

### Liquid glass utility (used on graces W16, bossert-therapy W11, azure W1)
```css
.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.10);
  position: relative; overflow: hidden;
}
.liquid-glass::before {
  content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.4px;
  background: linear-gradient(180deg, rgba(255,255,255,.45) 0%, rgba(255,255,255,.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,.15) 80%, rgba(255,255,255,.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
}
```

### blurFadeUp entrance animation
```css
@keyframes blurFadeUp {
  from { opacity: 0; filter: blur(20px); transform: translateY(40px); }
  to   { opacity: 1; filter: blur(0px);  transform: translateY(0); }
}
/* Stagger: 0.1s / 0.3s / 0.5s / 0.7s — always gate on prefers-reduced-motion */
```

### Mouse parallax (used on bossert-therapy)
Video scaled `scale(1.08)` for headroom. rAF loop lerps currentX/Y → targetX/Y at 0.06 factor. Mouse moves map to ±20px range via `((clientX - cx) / cx) * 20`. Applied via `video.style.transform = 'scale(1.08) translate(...)' `.

### 3-part liquid-glass navbar (used on midwestern-iv W10, graces W16)
`[logo pill] [center links pill] [nav-right: text + book pill + hamburger]`
Mobile: hamburger → right-side slide sheet (translateX 100%→0, 0.45s, role="dialog", Escape closes, focus trap).

---

## 9. How to Write Prompts for the Implementation Session

The implementation chat is Claude Code with full repo access. It reads CLAUDE.md + this file at session start. Prompts that work well:

**Referencing files:** Use shortcodes (F1, W10, etc.) and slug names. "Edit F1 tile 8" or "rebuild W16 graces-private-food-services."

**Specifying video:** Always include the CloudFront or source URL — the implementation chat will download and self-host it automatically.

**React/Tailwind prompts:** Just paste them. The implementation chat translates automatically — Framer Motion → CSS keyframes, Tailwind → hand-written CSS, GSAP → rAF vanilla JS, external video → self-hosted MP4.

**Specifying content:** Write exact copy (badge text, heading, subtext, CTA labels, trust line). Vague copy gets placeholder text that needs a follow-up.

**Example well-formed prompt:**
> "Build W13 Kinetics Pilates. Slug: kinetics-pilates. Tile 13 on F1. Replace F6 row. Dark theme — #0a0a0a bg, warm amber accent (#f59e0b). Download video from [URL]. 3-part liquid-glass navbar. Bottom-left hero layout. Badge: PILATES STUDIO · COLUMBUS OH. Heading: KINETICS / PILATES. Sub: Move with intention. Desc: [exact copy]. CTA: Book a Class / Our Classes. Trust: 200+ members · small group classes."

**What the chat handles automatically:** downloading video, verifying CSP compliance, self-hosting assets, translating framework code to vanilla, updating F1/F6/CLAUDE.md/SUMMARY.md, committing and pushing.

---

## 10. Active Issues

1. Auth token exposed client-side in `script.js` — known, post-launch fix (move to Vercel serverless)
2. Weak email validation in demo form — acceptable for now, revisit in QA pass

---

## 11. Change History

| Session | What changed |
|---|---|
| P1–P7 | Full rebrand: nav, 4×4 grid hero, statement, services, CTA, footer, design system, chat widget |
| P8 | Demo form moved to ai-receptionist/; homepage gets Calendly CTA |
| P9 | Built W2 Little Grins; tile 2 iframe; F6 portfolio grid created |
| P10 | CLAUDE.md §9 Portfolio Tile Build Pattern added |
| P11 | Built W12 Stratum Dermatology |
| P12 | Built W3 Modern Derma and Spa |
| P13 | Built W4 Texas Prosthetics |
| P14 | Built W5 Anderson's Boards (first dark tile) |
| P15 | Codebase purge; §11→§9 renumber; PROMPT-GUIDE.md deleted |
| P16 | Built W10 Midwestern IV (first multi-section tile, ~10 sections) |
| P17 | Grid collapsed 4×4→3×3; 9 tiles renumbered 01–09 |
| P18 | Built W11 Bossert Dental (canvas particles); Built W16 Graces (CSS orbs → later rebuilt) |
| P19 | Rebuilt W16 Graces as full 9-section site: FadingVideo, liquid-glass, Instrument Serif, typewriter CTA |
| P20 | Graces: replaced FadingVideo with native loop, new CloudFront video self-hosted, blur-bottom overlay, blurFadeUp. Bossert: new CloudFront video, mouse parallax, liquid-glass nav, blur-bottom overlay |
| P21 | W11 rebranded dental→therapy: slug bossert-dental→bossert-therapy, all content rewritten for emotional therapy practice |
| P22 | SESSION.md deleted; replaced with SUMMARY.md; CLAUDE.md updated |
| P23 | Website expansion: 3 narrative sections added to homepage (website/SEO/AIO); services grid restructured (4 cards: Custom Websites→/services/custom-websites/, Local Search Dominance→/services/local-seo/, AI Optimization→/services/ai-optimization/, AI Receptionist unchanged); 3 new service detail pages created at /services/; nav broken links fixed; CSS for service-narrative + service-detail-* added to styles.css |
| P24 | Homepage narrative sections redesigned: 3 distinct editorial layouts (green left-border/cream, blue top-bar/light-blue 2-col, purple right-bar/light-purple absolute icon); scroll-triggered icon animations; full-section background shift on link hover via CSS :has(); statement section ("Abython · For dentists & med spas") deleted |
| P25 | Design system rollout: error tokens + card tokens added to styles.css :root; .card-container + .card-container-dark utility classes added; mobile nav max-height slide + hamburger X animation; aria-expanded fixed; GSAP Pattern A/B for [data-animate]; index.html 5 sections wrapped (website/SEO/AIO narratives, managed, CTA); privacy-policy nav rebuilt to standard structure + GSAP/Lenis added; work/index.html nav links fixed (GBP→/services/local-seo/, SEO+AIO→/services/ai-optimization/); W10+W16 GSAP injected + scroll animations on all section cards; W11 Bossert full mobile nav added (hamburger + slide sheet + focus trap); W1 scale hover added; W3 asymmetric padding fixed; W5 scale hover added; service pages (S1/S2/S3) + ai-receptionist all .service-detail-section blocks wrapped in .card-container; FORMATTING-AUDIT.md created |
| P25.5a | CSS Foundation completion: hamburger animation, hardcoded colors → tokens, chat widget fade, card hovers, dark tokens for W10/W16 |
| P25.5b | HTML wrapping pass: F1 cards, privacy-policy 9 sections, F6 work grid, W10/W16 trust/book/FAQ sections wrapped in card-container-dark |
| P26 | Full luxury minimal redesign: Cormorant Garamond + DM Sans + DM Mono typography; parchment palette (#F7F5F1) + deep trust blue (#1A3566) + antique gold (#B8972A); IntersectionObserver replaces GSAP ScrollTrigger for reveals; 4 new post-hero sections on F1 (craft/services/advantage/begin); 3-col footer; svc-hero + svc-row horizontal rule layout on all service pages; updated F5 hero + form styling; F6 new header; legal pages nav + footer updated |
| P27 | Deleted work/index.html (F6 portfolio listing) + removed all /work/ nav/footer references site-wide; Services dropdown added to nav on all pages (desktop panel + mobile accordion, vanilla JS, Escape closes, chevron rotates); industry-agnostic copy audit across F1/F5/S1/S2/S3/privacy-policy/terms — all dental/med-spa/patient references replaced; S2 SEO Audit CTAs → search.google.com; work-listing CSS removed from styles.css |
| P28 | Full redesign of S1/S2/S3 service pages: alternating light/dark sections, large Cormorant stat rows (accent-2 gold numbers), 3D feature cards (white on light / dark glass on dark), hero with decorative deco word (BUILD/SEARCH/AI), blurFadeUp reveal via existing initReveal(); S3 Section 3 uses vertical timeline component with circle markers; inline sp-* CSS in each page's style block; new copy per spec for all four sections per page |
