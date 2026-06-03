# FORMATTING-AUDIT.md — Abython.com Full Codebase Audit
> Generated: 2026-06-02 | Scope: F1–F7, W1–W5, W10–W12, W16 (all built pages) + service pages

---

## 1. TEXT SECTIONS REQUIRING CARD TREATMENT

### 1.1 — Main Site (index.html)

| Section | Selector / Line | Issue |
|---------|----------------|-------|
| "Professional Design" narrative | `.service-narrative.website`, ~L191–208 | Two dense paragraphs with only a left-border accent. No background, no boundary. Floats on `--bg`. |
| "We actively manage…" section | `#managed`, ~L303–315 | `.lead` paragraph in `.container--narrow` with no card or tint. Key differentiator copy reads as orphaned body text. |
| Final CTA section | `#contact`, ~L320–340 | Multiple paragraphs + contact info laid flat on `--bg-inverse`. Contact details inline with body copy; needs a grouped card. |
| SEO narrative | `.service-narrative.seo`, ~L255–275 | Same pattern as website narrative — left-border only, no container. |
| AIO narrative | `.service-narrative.aio`, ~L280–295 | Same. |

### 1.2 — Service Detail Pages

| Page | Section | Issue |
|------|---------|-------|
| `services/custom-websites/` | "We Start With You", "Designed for Conversion", "Your Story, Told Right" (~L68–149) | `.service-detail-list` items and paragraphs sequential in a column with no background separation between content blocks. |
| `services/ai-optimization/` | Numbered steps (~L130–135) | `<ol class="service-detail-list">` floats as raw list. Multi-step process needs a step-card or bordered container. |
| `services/local-seo/` | Feature lists | Same list-floating issue as custom-websites. |

### 1.3 — Privacy Policy (`privacy-policy/index.html`)

- Most `<h2>` sections have no card — only `.stop-highlight` blocks (SMS opt-out) get a background treatment.
- Inconsistent: some sections have visual containment, most don't.
- **Fix:** Apply a consistent section-card pattern to all policy `<section>` blocks.

### 1.4 — Portfolio Multi-Section Pages (W10, W16)

| Page | Section | Issue |
|------|---------|-------|
| W10 Midwestern IV | Hero trust row (~L157–167) | `"Trusted by athletes…"` + partner names are bare `rgba(255,255,255,0.38)` text — no glass card, no container. |
| W10 Midwestern IV | `#book` CTA section | Plain text + CTAs on pure black. No card or visual frame. |
| W16 Graces | `#book` CTA section | Same: centered text and buttons, no distinction from surrounding dark sections. |
| W16 Graces | FAQ accordion items | No visual card; items border each other but the section as a whole has no container treatment. |

---

## 2. COLOR PALETTE — CURRENT STATE & RECOMMENDATION

### 2.1 — Current Main Site Tokens (styles.css `:root`)

```css
/* Surfaces */
--bg:              #F4F1EB   /* warm off-white */
--bg-elevated:     #FFFFFF
--bg-inverse:      #0A0A0A   /* near-black */
--bg-tint:         rgba(30,58,138,0.04)

/* Text */
--ink:             #0A0A0A
--ink-muted:       #525252
--ink-subtle:      #A3A3A3
--ink-inverse:     #F4F1EB
--ink-inverse-muted: #A3A3A3

/* Accent (Trust Blue) */
--accent:          #1E3A8A
--accent-hover:    #2952B5
--accent-soft:     #E8EDF9
--accent-glow:     rgba(30,58,138,0.22)
--accent-ring:     rgba(30,58,138,0.35)

/* Borders */
--border:          rgba(10,10,10,0.08)
--border-strong:   rgba(10,10,10,0.16)
--border-inverse:  rgba(244,241,235,0.12)

/* Service Narrative Accents */
--service-website-accent: #22c55e   /* green */
--service-seo-accent:     #1e3a8a   /* blue (= --accent) */
--service-aio-accent:     #a855f7   /* purple */
```

### 2.2 — Hardcoded Colors (NOT Using Variables) — Fix These

| Location | Hardcoded Value | Should Be |
|----------|----------------|-----------|
| `styles.css` ~L291 (nav bg variant) | `rgba(19,17,28,0.85)` | Remove or replace with token |
| `styles.css` ~L372 | `rgba(220,38,38,0.6)` | `var(--error)` |
| `styles.css` ~L1189 | `#dc2626` | `var(--error)` |
| `chat.js` (error message) | `#fef2f2`, `#dc2626` | `var(--error-bg)`, `var(--error)` |
| `index.html` (chat inline) | `#fff` | `var(--ink-inverse)` |
| `styles.css` ~L1928, L1986, L2045 (narrative hover) | `#fff`, `rgba(255,255,255,0.9)` | `var(--ink-inverse)` |
| `styles.css` L1542–1550 (tile gradients) | 16+ hardcoded hex pairs | `--tile-bg-N-start`, `--tile-bg-N-end` |
| `work/index.html` L71–86 (swatch gradients) | Same tile hex colors | Match styles.css tokens |

**Missing tokens to add:**
```css
--error:           #dc2626
--error-bg:        #fef2f2
--error-border:    rgba(220,38,38,0.2)
```

### 2.3 — Portfolio Page Color Systems

| Page | Token Discipline | Primary BG | Primary Text | Accent |
|------|-----------------|-----------|-------------|--------|
| W1 Azure | ❌ None (all hardcoded) | `#000` | `#fff` | white opacity |
| W2 Little Grins | ✅ 4 tokens | `#F4EFE6` (cream) | `#1A3A3A` (teal) | `#2BB3A3` |
| W3 Modern Derma | ✅ 8 tokens | `#f0f0f0` | `#1E2B4A` (navy) | navy / glass |
| W4 Texas Prosthetics | ✅ 9 tokens | `#f0f0ee` | `#111827` | `#3B82F6` (blue) |
| W5 Anderson's | ✅ 7 tokens | `#000` | `#fff` | white opacity |
| W10 Midwestern IV | ✅ 6 tokens | `#000` | `#fff` | liquid-glass white |
| W11 Bossert Therapy | ✅ 8 tokens + easing | `#0d0d0d` | `#f4f4f4` | `hsl(119,99%,46%)` green |
| W12 Stratum | ⚠️ 3 tokens only | `#fff` | `#000` | `#5E0ED7` purple |
| W16 Graces | ✅ 6 tokens | `#000` | `#fff` | liquid-glass white |

**W1 (Azure) and W12 (Stratum) need token expansion.**

### 2.4 — Recommended Modern Palette (for any main site refresh or new pages)

```
NEUTRALS (hierarchy)
  Surface 0 (deepest):   #0A0A0A
  Surface 1:             #141414
  Surface 2:             #1C1C1C
  Mid gray:              #6B7280
  Subtle:                #9CA3AF
  Off-white:             #F5F4F1
  White:                 #FFFFFF

MUTED GREENS
  Green 500:             #22c55e   (already in use as --service-website-accent)
  Green 400 muted:       #4ade80
  Green glow:            rgba(34,197,94,0.18)

MUTED BLUES
  Blue 800:              #1E3A8A   (already --accent)
  Blue 600:              #2563EB
  Blue 200:              #BFDBFE
  Blue glow:             rgba(30,58,138,0.18)

MUTED PURPLES
  Purple 500:            #a855f7   (already --service-aio-accent)
  Purple 700:            #7E22CE
  Purple glow:           rgba(168,85,247,0.18)

GRAYS FOR HIERARCHY
  Gray 900:  #111827
  Gray 700:  #374151
  Gray 500:  #6B7280
  Gray 300:  #D1D5DB
  Gray 100:  #F3F4F6
```

---

## 3. BUTTON STYLE AUDIT & STANDARDIZATION PLAN

### 3.1 — Main Site Buttons (Consistent, Well-Defined)

| Class | Padding | Radius | Bg | Hover |
|-------|---------|--------|-----|-------|
| `.cta-button-primary` | `14px 28px` | `9999px` | `--accent` | `--accent-hover` + `translateY(-1px)` + shadow |
| `.cta-button-primary--inverse` | `14px 28px` | `9999px` | `--bg` | `--bg-elevated` |
| `.cta-button-ghost` | `14px 28px` | `9999px` | transparent | fills `--ink` |
| `.cta-button-ghost--inverse` | `14px 28px` | `9999px` | transparent | fills `--ink-inverse` |
| `.cta-button-small` | `8px 20px` | `9999px` | `--accent` | `--accent-hover` |
| `.service-detail-cross a` | `6px 14px` | `9999px` | transparent | fills `--accent` |

**Main site button system: ✅ Solid. No changes needed.**

### 3.2 — Portfolio Page Button Inconsistencies

| Page | Button Radius | Hover Pattern | Height/Padding |
|------|--------------|---------------|----------------|
| W1 Azure | `9999px` | `opacity: 0.85` (no scale) | varies (0.5rem–1rem v-pad) |
| W2 Little Grins | `9999px` | `scale(1.03–1.04)` + `brightness(1.08–1.1)` ✅ | `10px 22px` nav / `17px 24px` hero |
| W3 Modern Derma | `9999px` | `opacity: 0.84` + `scale(1.02)` | `10px 18px` (asymmetric: 18px/14px) |
| W4 Texas Prosthetics | `9999px` | color shift (fill on hover) | border-style |
| W5 Anderson's | `9999px` | color invert (white→#e5e5e5) | `12px 24px` |
| W10 Midwestern IV | `9999px` | `scale(1.04)` + `brightness(1.1)` ✅ | `52px` hero / `48px` secondary |
| W11 Bossert Therapy | **`4px`** (sharp) ⚠️ | `brightness(1.08)` | `15px 26px` |
| W12 Stratum | text links only | gap expands (arrow) | none |
| W16 Graces | `9999px` | `scale(1.04)` + `brightness(1.1)` ✅ | `52px` hero / `48px` secondary |

**Standardization Plan for Portfolio Pages:**
1. **Radius:** Each page may keep its design character (W11's `4px` is intentional), but document as a deliberate choice
2. **Hover pattern:** Converge toward `scale(1.03–1.04)` + `brightness(1.08–1.1)` for pill buttons (W2/W10/W16 pattern)
3. **Hero button height:** Standardize at `52px` for primary hero CTAs (W10/W16 pattern)
4. **Nav button height:** Standardize at `48px`
5. **W3 asymmetric padding:** Fix `10px 18px 10px 14px` → `10px 18px` (symmetric)
6. **W1 Azure:** Add scale hover; remove opacity-only pattern

---

## 4. NAV / HEADER STYLING GAPS

### 4.1 — Main Site Nav (Consistent Across Most Pages)

**Current spec:**
- Fixed top, `height: 72px`, `z-index: 100`
- Background: `rgba(244,241,235,0.85)` + `backdrop-filter: blur(14px)`
- Logo: Fraunces 1.5rem / 700 weight
- Links: Inter Tight 14px / 500 weight / `--ink-muted` → `--ink` hover
- Mobile: vertical dropdown, no slide animation

**Gaps:**
1. **Mobile menu has no open animation** — `.open` class applies `display:flex` instantly; needs CSS transition (`max-height` or `translateY`)
2. **Hamburger has no state change** — 3 spans never transform to X on open; `aria-expanded` never updates (script.js toggle doesn't set attribute)
3. **Privacy policy nav is outdated** — uses `.nav-content` / `.logo` structure instead of `.nav-inner` / `.nav-logo`; only 3 links vs 6
4. **Work page (`work/index.html`) nav links broken** — points to `/google-business-profile` and `/seo-and-aio` (pages don't exist)
5. **Navigation conflict:** Two different nav background colors in styles.css (~L291 vs ~L1445); `rgba(19,17,28,0.85)` is stale

### 4.2 — Portfolio Page Nav Variations

| Page | Type | Mobile Strategy | Deviations |
|------|------|----------------|------------|
| W1 Azure | Inline pill, no fixed | Desktop links hidden on mobile | No hamburger, no sheet |
| W2 Little Grins | Fixed 72px + pill | Full hamburger + slide-in sheet + stagger | ✅ Most complete |
| W3 Modern Derma | Relative (scrolls away) | Desktop links hidden, brand text only mobile | No hamburger, no sheet |
| W4 Texas Prosthetics | Two-pill centered | Static, no responsive collapse | No hamburger, no sheet |
| W5 Anderson's | Three-pill absolute | Center pill hidden <768px | No hamburger, no sheet |
| W10 Midwestern IV | Centered fixed pill | Hamburger + full sheet + stagger | ✅ Complete |
| W11 Bossert Therapy | Fixed full-width | Links/CTA hidden <820px | No hamburger at all |
| W12 Stratum | Sticky (not fixed) | Hamburger + full sheet + stagger | ✅ Complete |
| W16 Graces | Centered fixed pill | Hamburger + full sheet + stagger | ✅ Complete |

**W11 Bossert has no mobile navigation at all** — links disappear at 820px with no replacement.

---

## 5. FOOTER STRUCTURE & GAPS

### 5.1 — Main Site Footer (All Pages Consistent)

**Structure:** Logo → Legal links → Copyright line  
**Styling:** `--bg-inverse` (black), `2.5rem 0` padding, `1px solid --border` top

**What's missing:**
- No social media icons (zero social presence in footer)
- No service category links (no sitemap nav)
- No secondary CTA (no newsletter, no "Book a call" repeat)
- Phone number absent (only in homepage contact section)
- No company description or tagline

### 5.2 — Portfolio Page Footers

| Page | Footer Present | Type |
|------|--------------|------|
| W1 Azure | ✅ Minimal | Social icons only (Instagram, X, Globe) |
| W2 Little Grins | ❌ None | — |
| W3 Modern Derma | ❌ None | — |
| W4 Texas Prosthetics | ❌ None | — |
| W5 Anderson's | ❌ None | — |
| W10 Midwestern IV | ✅ Full | 4-column grid: brand + nav + nav + contact; social icons |
| W11 Bossert Therapy | ❌ None | — |
| W12 Stratum | ❌ None | — |
| W16 Graces | ✅ Full | Same 4-column pattern as W10 |

**Pattern:** Single-screen hero pages (W2–W5, W11, W12) have no footer — this is intentional per the design spec.  
Multi-section pages (W10, W16) have identical, well-structured footers: `4rem 2rem 2.5rem` padding, `2fr 1fr 1fr 1.5fr` grid, rgba(255,255,255,0.06) top border.

---

## 6. ANIMATION INVENTORY & OPPORTUNITIES

### 6.1 — What's Animated (Main Site)

| System | Where | What |
|--------|-------|------|
| GSAP + ScrollTrigger | All pages with `.animate-ready` | `opacity:0 + y:24` → `opacity:1 + y:0`, 0.8s, `power3.out`, triggers at `top 88%` |
| Lenis | Main site only | Smooth scroll, `lerp:0.08`, synced to GSAP ticker |
| Service icon animations | Homepage narrative sections | `iconFadeScale`, `iconBounce`, `iconRise` — triggered by ScrollTrigger at `top 80%` |
| Work tile hover | Homepage work grid | Scale 1.03 + label slide-up + scrim fade-in |
| Service card hover | Homepage service cards | `translateY(-4px)` + shadow + top gradient bar |

### 6.2 — What's Animated (Portfolio Pages)

| Page | Entry Animation | Scroll Animations | Interactive |
|------|----------------|------------------|-------------|
| W1 Azure | Video rAF fade (vanilla JS) | None | None |
| W2 Little Grins | CSS fadeUp stagger (0s / 0.15s / 0.30s) | None | Mobile sheet stagger |
| W3 Modern Derma | CSS fadeUp / scaleIn / slideInLeft | None | None |
| W4 Texas Prosthetics | CSS fadeUp stagger (0.1s increments) | None | None |
| W5 Anderson's | CSS fadeUp + fadeIn stagger | None | None |
| W10 Midwestern IV | FadingVideo (rAF) + BlurText (IO) + entranceUnblur | **None** | FAQ accordion, mobile sheet |
| W11 Bossert Therapy | CSS blurFadeUp stagger + mouse parallax (rAF) | None | None |
| W12 Stratum | CSS fadeDown/fadeUp/slideUp (clip-reveal) | None | Mobile sheet |
| W16 Graces | CSS blurFadeUp stagger + typewriter email form | **None** | FAQ accordion, mobile sheet, email state |

### 6.3 — Sections With No Animation (High-Priority Opportunities)

**Main Site:**
- Mobile nav dropdown — instant open (no slide/fade)
- Chat widget — `display:none` toggle (no transition)
- Footer — no entrance reveal
- Work grid tiles — no entrance stagger (only hover)

**W10 Midwestern IV (10 sections, only hero is animated):**
- `#services` — 3 service cards, no entrance reveal
- `#menu` — 8-item drip grid, no stagger
- `#how-it-works` — 4 step cards, no sequential reveal
- `#why-iv` — 7 benefit cards, no stagger
- `#membership` — 3 tier cards, no reveal or "popular" pulse
- `#testimonials` — 3 testimonial cards, no slide-in
- `#book` — plain CTA section, no entrance

**W16 Graces (9 sections, only hero + FAQ + email form animated):**
- `#services` — 3 service cards
- `#menu` — 8-dish grid
- `#about` — image + quote block
- `#process` — 4 step cards
- `#testimonials` — 3 testimonial cards
- `#book` — plain CTA section

### 6.4 — Recommended Animation Additions

```
Pattern A — Card stagger (use on W10/W16 section cards):
  gsap.fromTo(cards, 
    { opacity: 0, y: 32 },
    { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 80%' }
    }
  )

Pattern B — Section heading reveal (all sections without it):
  gsap.fromTo(heading,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 85%' }
    }
  )

Pattern C — Chat widget open transition:
  Replace display:none toggle with:
  opacity: 0 → 1, translateY(8px) → 0, duration: 200ms

Pattern D — Mobile nav slide-down:
  .nav-links max-height: 0 → auto-height via CSS transition
  transition: max-height 0.3s cubic-bezier(0.22,1,0.36,1)
```

---

## 7. SHADOW & BORDER SPECIFICATIONS

### 7.1 — Current Shadow System (styles.css)

```css
--shadow-sm:     0 2px 8px rgba(10,10,10,0.06)
--shadow:        0 8px 24px rgba(10,10,10,0.08)
--shadow-md:     0 12px 32px rgba(10,10,10,0.10)
--shadow-lg:     0 24px 48px rgba(10,10,10,0.12)
--shadow-accent: 0 16px 40px rgba(30,58,138,0.22)
```

**These are well-defined. No changes needed.**

### 7.2 — Current Border System (styles.css)

```css
--border:          rgba(10,10,10,0.08)   /* light — most dividers */
--border-strong:   rgba(10,10,10,0.16)   /* interactive hover states */
--border-inverse:  rgba(244,241,235,0.12) /* on dark backgrounds */
```

**Also solid. Extend for portfolio dark pages:**

### 7.3 — Portfolio Dark Page Border Specs

W10 and W16 use raw rgba values. Recommended standardized tokens (add to each page's `:root`):

```css
/* For dark-theme portfolio pages */
--border-glass:        rgba(255,255,255,0.10)   /* standard glass border */
--border-glass-strong: rgba(255,255,255,0.18)   /* hover/active */
--border-glass-subtle: rgba(255,255,255,0.06)   /* footer dividers */

/* Card shadows on dark */
--shadow-glass:    0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)
--shadow-glass-lg: 0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)
```

### 7.4 — Card Container Spec (For Sections Needing Card Treatment)

**Light pages (main site, W2, W3, W4):**
```css
.content-card {
  background:    var(--bg-elevated);         /* white */
  border:        1px solid var(--border);    /* rgba(10,10,10,0.08) */
  border-radius: var(--radius-lg);           /* 24px */
  box-shadow:    var(--shadow-sm);           /* 0 2px 8px rgba(10,10,10,0.06) */
  padding:       2rem 2.5rem;
}
```

**Dark pages (W10, W16):**
```css
.content-card-dark {
  background:    rgba(255,255,255,0.04);
  border:        1px solid rgba(255,255,255,0.10);
  border-radius: 20px;
  box-shadow:    0 8px 32px rgba(0,0,0,0.3);
  padding:       2rem 2.5rem;
}
```

---

## 8. CROSS-CUTTING ISSUES SUMMARY

| # | Issue | Severity | Files Affected |
|---|-------|----------|----------------|
| 1 | Privacy policy uses old nav structure | High | `privacy-policy/index.html` |
| 2 | Work page nav links to non-existent pages | High | `work/index.html` |
| 3 | No error color token (`--error`, `--error-bg`) | Medium | `styles.css`, `chat.js` |
| 4 | W1 Azure: zero CSS custom properties | Medium | `work/azure-cosmetic-dentistry/index.html` |
| 5 | W11 Bossert: no mobile nav at all | Medium | `work/bossert-therapy/index.html` |
| 6 | Hamburger `aria-expanded` never updates | Medium | `script.js` |
| 7 | Mobile nav dropdown has no transition | Low | `styles.css` |
| 8 | Tile gradients use 16+ hardcoded hex values | Low | `styles.css`, `work/index.html` |
| 9 | W3 Modern Derma: asymmetric button padding | Low | `work/modern-derma-spa/styles.css` |
| 10 | W10/W16 multi-section pages have zero scroll animations | Low | `work/midwestern-iv/`, `work/graces-private-food-services/` |
| 11 | Chat widget opens with no transition | Low | `chat.js` |
| 12 | W12 Stratum: only 3 CSS tokens (needs expansion) | Low | `work/stratum-dermatology/styles.css` |

---

## 9. PAGES NOT YET BUILT (W6–W9, W13–W15)

These slots exist as placeholder tiles on the homepage. No files exist for:
- W6 Hearthfield Family Dental
- W7 Meridian Implant Center
- W8 Glow Laser Clinic
- W9 Halcyon Plastic Surgery
- W13 Kinetics Pilates Studio
- W14 North Barber Co.
- W15 Ironwood Law

When built, the formatting recommendations in this document should inform their construction — particularly:
- Full CSS token architecture (min 4 tokens)
- Scale + brightness hover pattern for CTAs
- Mobile sheet navigation (§9.5 standard)
- Consistent 52px hero / 48px nav button heights

---

*END OF AUDIT — Do not apply changes without explicit instruction.*
