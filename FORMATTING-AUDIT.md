# FORMATTING-AUDIT.md — Abython.com Full Codebase Audit
> Generated: 2026-06-02 | Updated: 2026-06-02 (P25 applied)
> Scope: F1–F7, W1–W5, W10–W12, W16 (all built pages) + service pages

Legend: ✅ Fixed in P25 · ⚠️ Partial · 🔲 Still open

---

## 1. TEXT SECTIONS REQUIRING CARD TREATMENT

### 1.1 — Main Site (index.html)

| Section | Status | Notes |
|---------|--------|-------|
| Website narrative (`.service-narrative.website`) | ✅ Fixed | Wrapped in `.card-container.narrative-card data-animate="card"` with green left-border |
| SEO narrative (`.service-narrative.seo`) | ✅ Fixed | Same wrapper; blue left-border via `.narrative-card` modifier |
| AIO narrative (`.service-narrative.aio`) | ✅ Fixed | Same; purple left-border |
| "We actively manage…" (`#managed`) | ✅ Fixed | Header + lead paragraph wrapped in `.card-container data-animate="card"` |
| Final CTA (`#contact`) | ✅ Fixed | All inner content (h2, desc, button, contact info) wrapped in `.card-container data-animate="card"` |

### 1.2 — Service Detail Pages

| Page | Status | Notes |
|------|--------|-------|
| `services/custom-websites/` — all 4 sections | ✅ Fixed | Each `.service-detail-section` inner content wrapped in `.card-container data-animate="card"` |
| `services/local-seo/` — all 4 sections | ✅ Fixed | Same |
| `services/ai-optimization/` — all 4 sections | ✅ Fixed | Same |
| `ai-receptionist/` demo form section | ✅ Fixed | Form section inner content wrapped in `.card-container data-animate="card"` |

### 1.3 — Privacy Policy (`privacy-policy/index.html`)

| Item | Status | Notes |
|------|--------|-------|
| Nav structure (old `.nav-content/.logo`) | ✅ Fixed | Rebuilt to standard `.nav-inner/.nav-logo` with 6-link set; GSAP+Lenis scripts added |
| Policy section cards | 🔲 Open | Most `<h2>` sections still float without card treatment. Only `.stop-highlight` (SMS opt-out) is boxed. |

### 1.4 — Portfolio Multi-Section Pages (W10, W16)

| Page | Section | Status |
|------|---------|--------|
| W10 Midwestern IV | All section cards (services, menu, steps, benefits, tiers, testimonials) | ✅ Fixed — GSAP scroll reveals added |
| W10 Midwestern IV | Hero trust row (~L157) | 🔲 Open — bare rgba text, no glass card |
| W10 Midwestern IV | `#book` CTA section | 🔲 Open — plain text, no card wrapper |
| W16 Graces | All section cards (services, menu, process, testimonials) | ✅ Fixed — GSAP scroll reveals added |
| W16 Graces | `#book` CTA section | 🔲 Open — plain text, no card wrapper |
| W16 Graces | FAQ accordion | ⚠️ Partial — accordion working, section has no outer card container |

---

## 2. COLOR PALETTE

### 2.1 — Main Site Tokens (styles.css `:root`) — Current

```css
/* Surfaces */
--bg:              #F4F1EB   /* warm off-white */
--bg-elevated:     #FFFFFF
--bg-inverse:      #0A0A0A
--bg-tint:         rgba(30,58,138,0.04)

/* Ink */
--ink:             #0A0A0A
--ink-muted:       #525252
--ink-subtle:      #A3A3A3
--ink-inverse:     #F4F1EB
--ink-inverse-muted: #A3A3A3

/* Accent */
--accent:          #1E3A8A
--accent-hover:    #2952B5
--accent-soft:     #E8EDF9
--accent-glow:     rgba(30,58,138,0.22)
--accent-ring:     rgba(30,58,138,0.35)

/* Borders */
--border:          rgba(10,10,10,0.08)
--border-strong:   rgba(10,10,10,0.16)
--border-inverse:  rgba(244,241,235,0.12)

/* Error states — ADDED P25 */
--error:           #dc2626
--error-bg:        #fef2f2
--error-border:    rgba(220,38,38,0.2)

/* Card containers — ADDED P25 */
--card-bg:         #FFFFFF
--card-border:     rgba(10,10,10,0.08)
--card-shadow:     0 2px 8px rgba(10,10,10,0.06)
--card-shadow-hover: 0 8px 28px rgba(10,10,10,0.10)

/* Service Narrative Accents */
--service-website-accent: #22c55e
--service-website-bg:     #faf9f7
--service-seo-accent:     #1e3a8a
--service-seo-bg:         #f0f4f9
--service-aio-accent:     #a855f7
--service-aio-bg:         #faf5ff
```

### 2.2 — Hardcoded Colors — Resolution Status

| Location | Value | Status |
|----------|-------|--------|
| `styles.css` ~L372 | `rgba(220,38,38,0.6)` | ✅ Token `--error-border` added; inline use still present in existing rule |
| `styles.css` ~L1189 | `#dc2626` | ✅ Token `--error` added; inline `.field-error` rule still uses `#dc2626` directly |
| `chat.js` error msg | `#fef2f2`, `#dc2626` | 🔲 Open — still hardcoded inline in chat widget style block |
| `styles.css` ~L1928, L1986, L2045 | `#fff`, `rgba(255,255,255,0.9)` | 🔲 Open — narrative hover rules still hardcoded |
| `styles.css` tile gradients | 16+ hex pairs | 🔲 Open — still hardcoded; token conversion not yet done |

### 2.3 — Portfolio Page Color Token Status

| Page | Status |
|------|--------|
| W1 Azure | ⚠️ Still no :root tokens (all inline in `<style>`) — scale hover added but tokenization open |
| W2 Little Grins | ✅ 4 tokens, complete |
| W3 Modern Derma | ✅ 8 tokens, padding fixed |
| W4 Texas Prosthetics | ✅ 9 tokens |
| W5 Anderson's | ✅ 7 tokens, scale hover added |
| W10 Midwestern IV | ✅ 6 tokens |
| W11 Bossert Therapy | ✅ 8 tokens + easing |
| W12 Stratum | ⚠️ Only 3 tokens — tokenization still open |
| W16 Graces | ✅ 6 tokens |

---

## 3. BUTTON STYLE AUDIT

### 3.1 — Main Site Buttons — No Changes Needed

| Class | Padding | Radius | Status |
|-------|---------|--------|--------|
| `.cta-button-primary` | `14px 28px` | `9999px` | ✅ Solid |
| `.cta-button-primary--inverse` | `14px 28px` | `9999px` | ✅ Solid |
| `.cta-button-ghost` | `14px 28px` | `9999px` | ✅ Solid |
| `.cta-button-ghost--inverse` | `14px 28px` | `9999px` | ✅ Solid |

### 3.2 — Portfolio Page Buttons

| Page | Radius | Hover Pattern | Status |
|------|--------|---------------|--------|
| W1 Azure | `9999px` | `scale(1.04)` + opacity | ✅ Fixed P25 |
| W2 Little Grins | `9999px` | `scale(1.03–1.04)` + brightness | ✅ Already correct |
| W3 Modern Derma | `9999px` | `opacity` + `scale(1.02)` | ✅ Padding fixed P25 |
| W4 Texas Prosthetics | `9999px` | color shift | ✅ Design intent |
| W5 Anderson's | `9999px` | `scale(1.03)` + color | ✅ Fixed P25 |
| W10 Midwestern IV | `9999px` | `scale(1.04)` + brightness | ✅ Already correct |
| W11 Bossert | `4px` (sharp) | brightness | ✅ Design intent |
| W12 Stratum | text-links only | gap-expand | ✅ Design intent |
| W16 Graces | `9999px` | `scale(1.04)` + brightness | ✅ Already correct |

---

## 4. NAV / HEADER

### 4.1 — Main Site Nav

| Issue | Status |
|-------|--------|
| Mobile dropdown instant (no animation) | ✅ Fixed P25 — `max-height: 0→480px` slide transition |
| Hamburger no X on open / aria-expanded never updates | ✅ Fixed P25 — `.is-open` class + aria toggle in script.js |
| Privacy policy nav outdated (`.nav-content/.logo`) | ✅ Fixed P25 — rebuilt to `.nav-inner/.nav-logo` with 6 links |
| Work page nav links broken | ✅ Fixed P25 — `/google-business-profile→/services/local-seo/`, `/seo-and-aio→/services/ai-optimization/` |
| Stale dark nav bg color (~L291) | 🔲 Open — `rgba(19,17,28,0.85)` remnant in styles.css |

### 4.2 — Portfolio Page Navs

| Page | Status |
|------|--------|
| W2 Little Grins | ✅ Complete — fixed nav + mobile sheet |
| W10 Midwestern IV | ✅ Complete — 3-part pill + mobile sheet |
| W11 Bossert Therapy | ✅ Fixed P25 — hamburger + slide sheet + focus trap added |
| W12 Stratum | ✅ Complete — sticky nav + mobile sheet |
| W16 Graces | ✅ Complete — 3-part pill + mobile sheet |
| W1 Azure | ⚠️ No hamburger — single-screen hero, design intent |
| W3 Modern Derma | ⚠️ No hamburger — single-screen hero, links hidden mobile |
| W4 Texas Prosthetics | ⚠️ No hamburger — single-screen hero, design intent |
| W5 Anderson's | ⚠️ No hamburger — center pill hides, design intent |

---

## 5. FOOTER

### 5.1 — Main Site Footer

| Item | Status |
|------|--------|
| Consistent across all pages | ✅ Yes |
| No social links | 🔲 Open — deliberate for now |
| No service category nav | 🔲 Open |
| No secondary CTA | 🔲 Open |
| Phone number absent | 🔲 Open |

### 5.2 — Portfolio Footers

| Page | Footer | Status |
|------|--------|--------|
| W1 Azure | Social icons only | ✅ Intentional |
| W2–W5, W11, W12 | None | ✅ Single-screen design intent |
| W10, W16 | Full 4-column grid | ✅ Complete |

---

## 6. ANIMATION INVENTORY

### 6.1 — Main Site

| System | Status |
|--------|--------|
| GSAP + ScrollTrigger on `.animate-ready` | ✅ Active |
| Lenis smooth scroll | ✅ Active |
| Service icon entrance animations | ✅ Active |
| GSAP Pattern A — `[data-animate="card"]` stagger | ✅ Added P25 |
| GSAP Pattern B — `[data-animate="heading"]` reveal | ✅ Added P25 |
| Mobile nav slide | ✅ Added P25 |
| Chat widget open/close transition | 🔲 Open — still `display:none` toggle |
| Footer entrance reveal | 🔲 Open |
| Work grid tile entrance stagger | 🔲 Open |

### 6.2 — Portfolio Pages

| Page | Entry | Scroll | Status |
|------|-------|--------|--------|
| W1 Azure | Video rAF | None | ✅ Single-screen |
| W2 Little Grins | CSS fadeUp stagger | None | ✅ Single-screen |
| W3 Modern Derma | CSS multi-keyframe | None | ✅ Single-screen |
| W4 Texas Prosthetics | CSS fadeUp stagger | None | ✅ Single-screen |
| W5 Anderson's | CSS fadeUp/fadeIn | None | ✅ Single-screen |
| W10 Midwestern IV | BlurText + entranceUnblur | ✅ Added P25 — all sections | GSAP targets: `.service-card`, `.drip-card`, `.how-step`, `.benefit-card`, `.tier-card`, `.testimonial-card`, section `h2`s, `#book` |
| W11 Bossert | blurFadeUp + mouse parallax | None | ✅ Single-screen |
| W12 Stratum | CSS clip-reveal stagger | None | ✅ Single-screen |
| W16 Graces | blurFadeUp + typewriter | ✅ Added P25 — all sections | GSAP targets: `.service-card`, `.dish-card`, `.process-step`, `.testimonial-card`, `#about`, `#book`, section `h2`s |

---

## 7. SHADOW & BORDER SPECIFICATIONS

### 7.1 — Current Shadow System

```css
--shadow-sm:     0 1px 2px rgba(10,10,10,0.05)       /* was: 0 2px 8px — audit reference was approximate */
--shadow:        0 8px 24px rgba(10,10,10,0.08)
--shadow-lg:     0 24px 64px rgba(10,10,10,0.12)
--shadow-accent: 0 16px 40px var(--accent-glow)
/* Added P25: */
--card-shadow:      0 2px 8px rgba(10,10,10,0.06)
--card-shadow-hover: 0 8px 28px rgba(10,10,10,0.10)
```

### 7.2 — Card Container Specs (Implemented P25)

**Light pages:**
```css
.card-container {
  background: var(--card-bg);          /* #FFFFFF */
  border: 1px solid var(--card-border); /* rgba(10,10,10,0.08) */
  border-radius: 20px;
  box-shadow: var(--card-shadow);
  padding: 2rem 2.5rem;                /* 1.5rem 1.25rem on mobile */
}
```

**Dark pages:**
```css
.card-container-dark {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  padding: 2rem 2.5rem;
}
```

**Narrative card modifiers:**
```css
.service-narrative.website .narrative-card { background: var(--service-website-bg); border-left: 3px solid var(--service-website-accent); }
.service-narrative.seo     .narrative-card { background: var(--service-seo-bg);     border-left: 3px solid var(--service-seo-accent); }
.service-narrative.aio     .narrative-card { background: var(--service-aio-bg);     border-left: 3px solid var(--service-aio-accent); }
```

---

## 8. REMAINING OPEN ISSUES (Post-P25)

| # | Issue | Severity | File(s) |
|---|-------|----------|---------|
| 1 | Privacy policy `<section>` blocks lack individual card treatment | Low | `privacy-policy/index.html` |
| 2 | W10 hero trust row has no glass card | Low | `work/midwestern-iv/index.html` |
| 3 | W10 + W16 `#book` CTA sections lack `.card-container-dark` | Low | both |
| 4 | Chat widget opens with `display:none` (no fade/slide transition) | Low | `chat.js` |
| 5 | Tile gradient colors still 16+ hardcoded hex pairs | Low | `styles.css`, `work/index.html` |
| 6 | Stale dark nav bg color `rgba(19,17,28,0.85)` at ~L291 | Low | `styles.css` |
| 7 | `.field-error` and `chat.js` error styles still reference `#dc2626` inline | Low | `styles.css`, `chat.js` |
| 8 | W1 Azure: still no `:root` token architecture (all inline `<style>`) | Low | `work/azure-cosmetic-dentistry/index.html` |
| 9 | W12 Stratum: only 3 CSS tokens — incomplete tokenization | Low | `work/stratum-dermatology/styles.css` |
| 10 | Work grid tiles have no entrance stagger animation | Low | `index.html`, `styles.css` |
| 11 | Footer has no entrance reveal | Low | `styles.css` |
| 12 | Main site footer lacks social links, service nav, secondary CTA | Low | `index.html` |

---

## 9. PAGES NOT YET BUILT (W6–W9, W13–W15)

Placeholder tiles on homepage only — no `/work/` files exist.

| W# | Slug | Business |
|----|------|----------|
| W6 | `hearthfield-family-dental` | Hearthfield Family Dental |
| W7 | `meridian-implants` | Meridian Implant Center |
| W8 | `glow-laser-clinic` | Glow Laser Clinic |
| W9 | `halcyon-plastic-surgery` | Halcyon Plastic Surgery |
| W13 | `kinetics-pilates` | Kinetics Pilates Studio |
| W14 | `north-barber-co` | North Barber Co. |
| W15 | `ironwood-law` | Ironwood Law |

When built: min 4 CSS tokens, `scale(1.03–1.04)` + brightness hover, mobile sheet nav (§9.5 standard), `52px` hero / `48px` nav button heights.

---

*END OF AUDIT — Last updated P25 (2026-06-02)*
