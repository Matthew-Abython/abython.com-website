# CLAUDE.md — Abython.com

> Read this file and `SUMMARY.md` at the start of every session before making changes.

---

## 1. Project

**Stack:** Pure HTML / CSS / JS — no framework, no build step, no npm.
**Repo:** `Matthew-Abython/abython.com-website` · branch `main` · hosted on Vercel at https://abython.com
**Owner:** Matthew Bernhardt — Abython Consulting

**What Abython does:** Digital agency for local service businesses — custom websites, SEO, AIO (AI Optimization), Google Business Profile management, AI phone receptionist (VAPI).

---

## 2. 🔒 Locked API Contracts — Do Not Modify

| Contract | Value |
|---|---|
| Demo form POST | `https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c` |
| Demo form auth | `Authorization: Bearer abython_xK9#mP2$vQ7nL4wR` |
| Chat POST | `https://abython.app.n8n.cloud/webhook/squarespace-chat` *(legacy name — never rename)* |
| Calendly | `https://calendly.com/owner-abython/new-meeting` — all "Book" CTAs |
| Phone / Email | (847) 636-9074 · owner@abython.com |

**CSP (vercel.json — LOCKED):**
- `script-src`: `'self'`, `https://unpkg.com`, `https://cdnjs.cloudflare.com`
- `connect-src`: `'self'`, `https://abython.app.n8n.cloud`
- `font-src`: `https://fonts.gstatic.com` · `style-src`: `https://fonts.googleapis.com`
- Inline `<script>` blocks and inline event handlers are **blocked by CSP**

---

## 3. Design System

**Fonts:** Cormorant Garamond (display/headings) · DM Sans (body/UI) · DM Mono (labels) — Google Fonts via `@import` in `styles.css`.

**Tokens:** All in `styles.css :root` — never rename or change values without explicit instruction. Full list in `SUMMARY.md §5`.

**Motion:** Lenis (`unpkg.com/lenis@1.3.x`) + GSAP 3.12 (`cdnjs.cloudflare.com`) for smooth scroll. Main site / service page reveals via IntersectionObserver (`.reveal-ready` → `.is-visible` class added by `script.js`). Always gate animations on `prefers-reduced-motion`.

**Key layout rule:** Every page loads `styles.css` from root and places scripts at bottom of `<body>`. `chat.js` is loaded on main-site pages only.

---

## 4. Git Workflow

- **Before every push:** Update `SUMMARY.md` — add change history row, update any changed state. Stage in the same commit as code.
- **Commit style:** `feat:` / `fix:` / `style:` / `chore:`
- **No mid-session SUMMARY.md updates** — only update when committing and pushing.

---

## 5. Efficiency Rules

- Read files from disk before asking about structure. Never ask what a file contains.
- Read targeted line ranges, not whole files, when editing a specific section.
- Make all edits to a file in one Edit call. Do not re-read after editing.
- No trailing summaries — the diff shows the work.

---

## 6. Portfolio Tile Build Pattern (W2 onward)

### Exceptions to the standard hero pattern (§6.4)

| Tile | Exception |
|---|---|
| W1 Azure | One-off custom design; built before this pattern |
| W3 West Side Derma + Spa | Single-page anchor-nav layout; no hamburger/sheet on mobile |
| W4 Texas Prosthetics | Two-pill nav; bottom-left hero; system font; no mobile sheet |
| W5 Anderson's Boards | Dark #000, 3-part pill nav, giant staggered type; no mobile sheet |
| W10 Midwestern IV | Multi-section (~10 sections); liquid-glass; FadingVideo rAF crossfade; Instrument Serif + Barlow |
| W12 Stratum Dermatology | 3-row full-screen layout; clip-reveal heading |
| W16 Graces | Multi-section (~9 sections); single hero video (native loop); typewriter CTA; Instrument Serif + Inter |

### 6.1 — File structure per tile

```
/work/<slug>/index.html
/work/<slug>/styles.css
/work/<slug>/script.js
/work/<slug>/background.mp4   (self-hosted — never reference external CDN URLs)
```

Vanilla HTML/CSS/JS only. No React, Tailwind, Framer Motion, or build step. Translate any spec written in those frameworks to vanilla.

### 6.2 — CSP rules (non-negotiable for all tiles)

- All JS in `/work/<slug>/script.js` — no inline `<script>`, no `onclick=`, no `onload=`
- All asset paths absolute from site root: `/work/<slug>/background.mp4`, etc.
- Google Fonts is the only permitted external resource
- No links back to abython.com from inside a demo tile

### 6.3 — Fonts

Google Fonts only. If a spec calls for a paid font, substitute the closest Google Fonts equivalent and report the substitution. Common substitutes: Helvetica Now → Plus Jakarta Sans ExtraBold · Neue Haas Grotesk → Inter/Manrope · GT America → DM Sans · Söhne → Inter · Editorial New → Fraunces.

### 6.4 — Standard hero composition

Every tile (except exceptions above) uses:

**Navbar:** max-width 1280px, z-index 10. Left: brand SVG logo 32×32. Center: 5 nav links. Right: primary CTA pill + secondary CTA pill. Mobile: hamburger (inline SVG) → right-side slide sheet (translateX 100%→0, 0.45s ease).

**Hero:** Fullscreen video (`autoplay muted loop playsinline`) + dark overlay (rgba 0.20–0.30). Foreground: heading with 3 inline SVG icons, subtext, primary CTA pill.

**Fade-up animation:**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Heading: 0s · Subtext: 0.15s · CTA: 0.30s — gate on prefers-reduced-motion */
```

**What changes per tile:** video, color palette, fonts, navbar links, heading copy, 3 inline SVG icons, subtext, CTA labels.

### 6.5 — Homepage tile integration

```html
<a href="/work/<slug>/" target="_blank" rel="noopener">
  <iframe src="/work/<slug>/"></iframe>
  <div class="tile-overlay"></div>
  <div class="tile-label">NN · DEMO NAME IN CAPS</div>
</a>
```

`tile-iframe-scaler.js` uses `querySelectorAll` + `forEach` — never revert to single-element `querySelector`.

### 6.6 — Hover scrim decision

After downloading the tile video, assess tone:
- **Dark video** → suppress hover scrim (`::before { display: none }`) — scrim compounds darkness
- **Light video** → keep scrim enabled — needed for tile label legibility
- **Override** if the iframe thumbnail creates label legibility conflict regardless of video tone (precedents: W3 cream card kept scrim; W5 white type kept scrim despite dark video)

### 6.7 — Pre-flight check (mandatory before any tile build)

1. Does `/work/<slug>/` already exist? List contents and pause if so.
2. Which F1 grid slot does this tile occupy? Confirm current `href` and label.
3. Grep for any other references to the old slug.

### 6.8 — Locked zones during tile builds

- `vercel.json` — never touch
- `script.js` form POST logic and auth header — never touch
- `chat.js` — never touch
- `styles.css :root` token values — never change existing values
- Calendly URL — never change
- `tile-iframe-scaler.js` multi-tile pattern — never revert

### 6.9 — Mandatory final report after every tile build

1. Pre-flight findings (existing folder state, F1 slot, stale slug references)
2. Video tone (dark/light) + brief description
3. Hover scrim decision and reasoning
4. Font substitutions made
5. Any deviations from §6.4 spec
6. Checklist: no inline scripts · no inline event handlers · all paths absolute · Google Fonts only · no abython.com links in demo · scaler still uses querySelectorAll
