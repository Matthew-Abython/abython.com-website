# Session Log — Abython.com

> **Max 150 lines. No source code. Update in the same commit as code changes.**

---

## Current State

- **Last completed:** Prompt 16 — Built W10 (Midwestern IV); multi-section IV lounge site (~10 sections); liquid-glass design, dual FadingVideo (rAF), BlurText; tile 10 upgraded to iframe in F1; slug renamed verdant-iv-lounge → midwestern-iv
- **Branch:** `main` | Last push commit: `ee92ab3`
- **Next up:** Prompt 17 — TBD
- **Note:** Portfolio Tile Build Pattern lives at §9 (not §11) in CLAUDE.md. §11 references in any old prompts or notes are stale.

---

## File Shortcodes (use in prompts)

```
F1 = index.html                          F2 = styles.css
F3 = script.js                           F4 = chat.js
F5 = ai-receptionist/index.html          F6 = work/index.html
F7 = vercel.json
W1–W16 = work/{slug}/index.html  (see portfolio table in CLAUDE.md §5)
```

---

## File Map

| File | Lines | What it does |
|---|---|---|
| `index.html` | ~305 | Nav, 4×4 grid hero (16 tiles), statement, services (4 cards), CTA, footer |
| `styles.css` | 1,703 | All CSS; design tokens in `:root` block at top |
| `script.js` | 212 | Demo form POST, mobile nav toggle, GSAP scroll animations, Lenis init |
| `chat.js` | 47 | Chat widget IIFE; floating bottom-right bubble |
| `vercel.json` | — | Security headers + CSP (do not touch without explicit instruction) |
| `ai-receptionist/index.html` | 170 | Demo form (same POST as old homepage) + AI receptionist product copy |
| `google-business-profile/index.html` | — | Placeholder — hero + coming soon |
| `seo-and-aio/index.html` | — | Placeholder — hero + coming soon |
| `web-design/index.html` | — | Placeholder — hero + coming soon |
| `work/index.html` | — | Portfolio grid listing all 16 fake sites with name, industry, View CTA |
| `work/{slug}/index.html` × 16 | varies | Individual fake sites — self-contained, no nav back to Abython |
| `privacy-policy/index.html` | 110 | Policy page |
| `terms-and-conditions/index.html` | 110 | Terms page |

---

## Active Issues

1. Auth token exposed client-side in `script.js` — known, post-launch fix (move to Vercel serverless)
2. Weak email validation in demo form — acceptable for now, revisit in QA pass

---

## Prompt History

| Prompt | What changed |
|---|---|
| P1–P7 | Full rebrand: nav, 4×4 grid hero, statement, services, CTA, footer, design system, chat widget |
| P8 | Demo form moved off index.html to ai-receptionist/index.html; homepage gets Calendly CTA instead |
| P9 | Built W2 (Little Grins Pediatric Dentistry); tile 2 swap on F1; F6 portfolio grid created with all 16 rows; tile-iframe-scaler.js generalized to multi-tile via querySelectorAll |
| P10 | Appended CLAUDE.md §11 — Portfolio Tile Build Pattern (full playbook for W2+ tiles) |
| P11 | Built W12 (Stratum Dermatology) as documented §11 layout exception; codified prefers-reduced-motion in §11.5; F1 tile 12 upgraded to iframe pattern; prefers-reduced-motion backported to W2 |
| P12 | Built W3 (Modern Derma and Spa); slug renamed lumen-medspa → modern-derma-spa pre-build; tile 3 upgraded to iframe pattern; F6 + §5 updated; §9 W3 exception documented |
| P13 | Built W4 (Texas Prosthetics); slug renamed shape-aesthetics → botox-chicago → texas-prosthetics; content rebranded from Botox Chicago → Texas Prosthetics; tile 4 upgraded to iframe; F6 + §5 updated; §9 W4 exception documented |
| P14 | Built W5 (Anderson's Boards); slug renamed arcline-orthodontics → andersons-boards; first dark-theme tile (bg #000, white text); 3-part pill navbar, staggered giant type, floating stats; §9.8 hover scrim KEPT (white iframe typography competes with tile label); §9 W5 exception documented |
| P15 | Codebase purge: deleted PROMPT-GUIDE.md; removed stale prompt-ref comments from index.html; cut §6 (Page Structure) + §9 (What This Site Is NOT) from CLAUDE.md; renumbered §11→§9 throughout; fixed W4 name (Botox Chicago→Texas Prosthetics) in §9 exceptions; cleaned SESSION.md prompt history |
| P16 | Built W10 (Midwestern IV) — first multi-section tile; dark liquid-glass, dual FadingVideo (rAF crossfade, no CSS transitions), BlurText word-by-word, 10 sections (hero→services→menu→how-it-works→why-iv→membership→testimonials→faq→book→footer); slug renamed verdant-iv-lounge→midwestern-iv; tile 10 upgraded to iframe in F1; F6 + §5 + §9 exception list updated; §9 NOTE: CLAUDE.md uses §9 for Portfolio Tile Build Pattern (old prompts may reference §11) |
