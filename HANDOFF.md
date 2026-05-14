# Abython.com — Full Codebase Handoff

This document gives you everything you need to understand and work on the Abython.com website from scratch.

---

## Project Overview

**Live URL:** https://abython.com (hosted on Netlify)
**Owner:** Matthew Bernhardt — Abython Consulting
**Purpose:** Marketing/agency website for Abython. Sells two core services: AI phone receptionists (via VAPI) and custom conversion-optimized websites. The site IS the product showcase — it demonstrates exactly what Abython builds for clients.

---

## File Structure

```
Abython.com/
├── index.html                  ← Main single-page site
├── styles.css                  ← All styling (1,178 lines)
├── script.js                   ← Demo form logic + scroll/nav behavior
├── chat.js                     ← Chat widget logic (IIFE)
├── netlify.toml                ← Security headers config
├── privacy-policy/
│   └── index.html              ← Privacy policy page
└── terms-and-conditions/
    └── index.html              ← Terms & conditions page
```

No build step. No npm. No framework. Pure HTML/CSS/JS deployed directly to Netlify.

---

## index.html — Section-by-Section

### `<head>`
- Title: "Abython | AI Receptionist & High-Converting Websites"
- Meta description targets the two core services.
- Loads `styles.css` only — no external CSS frameworks.

### Navigation (`<nav class="nav">`)
- Fixed to top, 68px tall, frosted glass (`backdrop-filter: blur(12px)`) over dark background.
- Links: Services, Pricing, How It Works, Contact — all `#anchor` smooth-scroll.
- Mobile: hamburger button (`#nav-toggle`) toggles `#nav-links` with `.open` class.
- No logo text in the nav — the `footer-logo` span handles branding at the bottom.

### Hero + Demo (`<section class="hero-demo">`)
This is the most important section. It's a two-column grid:

**Left column (`.hero-demo-heading`):**
- Eyebrow pill: "AI Receptionist & Custom Websites"
- H1: "AI that answers. / Websites that convert." — the word "convert" has a purple-to-cyan gradient.
- Subtext explaining the live demo concept.

**Right column (`.hero-demo-form-wrap`):**
- Form ID: `#demo-form`
- Fields: First Name, Last Name, Email, Phone
- SMS consent checkbox (`#sms-consent`) + TCR-compliant disclosure text
- On submit → `script.js` validates → POSTs to n8n webhook → triggers an actual VAPI outbound call to the user's phone
- On success: form hides, `#demo-success` div appears

### Services (`<section id="services" class="services">`)
Three-column card grid (`.services-grid`):
1. **AI Receptionist** — 24/7 phone agent, lead qual, SMS follow-up, lead database
2. **AI Website System** (`.featured`) — chatbot + lead capture + 60-second SMS + unified DB
3. **Lead Reactivation** — performance-based (10% of revenue), cold list campaigns

Cards use `.animate-ready` class — they start invisible and fade+slide up when scrolled into view via IntersectionObserver.

### Pricing (`<section id="pricing" class="pricing">`)
Same three-column card grid layout. Three plans:

| Plan | Price | Key feature |
|------|-------|-------------|
| Starter | $225/mo | AI phone receptionist only |
| Growth (`.featured`) | $397/mo | Receptionist + AI website |
| Full System | $697/mo | Everything + new website build + unlimited reactivation |

CTA buttons on Starter and Full System use `.cta-button-ghost` (outlined). Growth uses `.cta-button-primary` (filled purple). All link to `#contact`.

Stripe payment links (from owner's CLAUDE.md):
- Starter: `https://buy.stripe.com/aFa14nfL50qX1cofBqew801`
- Growth: `https://buy.stripe.com/8x23cv7ezehN8EQ88Yew803`
- Full System: `https://buy.stripe.com/8x2dRe9eH13D95sE9d2ew805`

Note: these Stripe links exist but are NOT currently wired to the pricing card buttons — the buttons go to `#contact` (Calendly booking).

Reactivation add-on callout below the grid: explains the 10% revenue-share model for Starter/Growth clients.

### How It Works (`<section id="how-it-works" class="how-it-works">`)
Two alternating two-column blocks (`.how-block`):

**Block 1 — AI Receptionist:**
- Left: text with 3-step numbered list (configure → AI handles calls → you close deals)
- Right: visual card listing 6 capability checkmarks

**Block 2 — Custom Website (`.how-block.reverse`):**
- The `.reverse` class flips order so the visual card appears on the LEFT
- Left: visual card with 6 deliverable checkmarks
- Right: text with 3-step list (strategy call → build → traffic converts)

### Final CTA (`<section id="contact" class="final-cta">`)
- Headline: "Ready to grow on autopilot?"
- Single primary CTA button: "Book a Free Demo" → links to `https://calendly.com/owner-abython/new-meeting`
- Contact info: phone `(847) 636-9074` and email `owner@abython.com`

### Footer
- Left: "Abython" wordmark
- Right: Privacy Policy, Terms & Conditions, Contact links
- Copyright: "© 2026 Abython"

### Chat Widget (inline `<style>` + `chat.js`)
Fixed bottom-right floating chat button. Styles are inline in the HTML (not in styles.css). Logic is in `chat.js`.

---

## script.js — Line by Line

### Smooth Scroll (lines 1–16)
```js
document.querySelectorAll('a[href^="#"]').forEach(anchor => { ... })
```
Intercepts all anchor clicks, scrolls to target minus 80px nav offset, then closes mobile nav.

### Mobile Nav Toggle (lines 18–29)
```js
const navToggle = document.getElementById('nav-toggle');
```
Toggle adds/removes `.open` on `#nav-links`. Click-outside listener closes it.

### Scroll Animation (lines 31–45)
```js
const observer = new IntersectionObserver(...)
```
- Threshold: 10% visible, margin -80px bottom
- When element enters: adds `.visible` class with 80ms stagger per sibling index
- Targets all `.animate-ready` elements
- CSS handles the actual fade+translateY transition

### Demo Form IIFE (lines 47–98)
```js
(function () {
    var WEBHOOK_URL = 'https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c';
```

**Validation (`validate()`):**
- First/last name: required, non-empty
- Email: required, non-empty (no regex — just presence check)
- Phone: strips non-digits, must be exactly 10 digits

**Error display (`showError()`):**
- Adds `.input-error` class to input (red border)
- Sets `.textContent` on `#error-{fieldName}` span

**Submit handler:**
1. Calls `clearErrors()` to reset all field states
2. Runs `validate()` — returns false if any field fails
3. Disables button, sets text to "Sending…"
4. `fetch()` POST to n8n webhook with headers:
   - `Content-Type: application/json`
   - `Authorization: Bearer abython_xK9#mP2$vQ7nL4wR`
5. Body: `{ firstName, lastName, email, phone (digits only), smsConsent (bool) }`
6. On success (response.ok): hides form, shows `#demo-success`
7. On error: re-enables button, shows error message in `#error-phone`

**What happens downstream:** n8n workflow `e4df1cc2...` receives the data and triggers a VAPI outbound call to the submitted phone number using the Demo Assistant (`d3e8bd04`).

### Chat Widget Init (lines 99–120, also in script.js)
This is a duplicate of `chat.js` — both files contain the same chat IIFE. The version in `script.js` is appended to the bottom of that file. In `index.html`, both `chat.js` and `script.js` are loaded, so the chat widget initializes twice — but because the second call runs after the DOM elements already have event listeners from the first, the last binding wins. **This is a minor bug** — the chat widget logic runs twice.

---

## chat.js — Line by Line

Single IIFE `(function(){ ... })()`.

```js
var url = 'https://abython.app.n8n.cloud/webhook/squarespace-chat';
var sid = null, msgc = 0, isOpen = false;
```

- `sid`: session ID returned by n8n — passed back on each message to maintain conversation context
- `msgc`: message count — passed to n8n to track conversation depth
- `isOpen`: toggle state

**`toggle()`:**
- Flips `isOpen`
- Shows/hides `#chat-box` via `display: flex/none`
- Changes button emoji between 💬 and ✕
- On first open (`msgc === 0`): appends greeting bot message, sets `msgc = 1`

**`addMsg(role, txt, isErr)`:**
- Creates `<div class="msg user-msg|bot-msg [error-msg]">`
- Appends to `#chat-msgs`
- Auto-scrolls to bottom

**`send()`:**
- Reads `#chat-inp` value, trims
- Appends user message to UI
- Clears input
- POSTs to n8n webhook:
  ```json
  { "sessionId": sid, "message": msg, "userData": {}, "messageCount": msgc }
  ```
- On success: expects `{ success: true, botResponse: "...", sessionId: "...", messageCount: N }`
- Updates `sid` and `msgc` from response
- On error: appends error message in red

**Event bindings:**
- `#chat-btn` → `toggle`
- `#chat-send` → `send`
- `#chat-inp` keypress → `send` on Enter

**Note on the webhook URL:** `squarespace-chat` is a leftover name from an earlier version of the site. The actual n8n workflow behind it is the Abython chat AI, not Squarespace-specific.

---

## styles.css — Design System

### Design Tokens (`:root`)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#13111C` | Page background |
| `--bg-secondary` | `hsl(250, 21%, 11%)` | Services section bg |
| `--bg-card` | `rgba(255,255,255,0.03)` | Card backgrounds |
| `--border` | `rgba(255,255,255,0.08)` | Default borders |
| `--border-hover` | `rgba(255,255,255,0.18)` | Hover borders |
| `--fg` | `hsl(0,0%,100%)` | Primary text (white) |
| `--fg-muted` | `hsl(246,6%,65%)` | Secondary text |
| `--fg-subtle` | `hsl(246,6%,45%)` | Tertiary text |
| `--accent` | `#7A3FF1` | Purple — brand color |
| `--accent-hover` | `#8e53ff` | Lighter purple on hover |
| `--accent-glow` | `rgba(122,63,241,0.25)` | Glow shadow |
| `--hero-gradient` | multi-layer gradient | Hero section bg |
| `--radius` | `12px` | Card border radius |
| `--radius-btn` | `9999px` | Pill-shaped buttons |
| `--nav-height` | `68px` | Used for padding offsets |
| `--content-width` | `1200px` | Max container width |
| `--section-py` | `96px` | Section vertical padding |
| `--font-body` | Inter | Body text |
| `--font-heading` | Inter Tight | Headings, logo |

### Key CSS Patterns

**Featured cards** (`.service-card.featured`):
- Purple-tinted gradient background
- Accent-colored top border always visible (not just on hover)
- Used for the "Growth" plan and "AI Website System" service

**Gradient text** (`.gradient-text`):
```css
background: linear-gradient(135deg, #c084fc 0%, #7A3FF1 45%, #38bdf8 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Scroll animations** (`.animate-ready` / `.animate-ready.visible`):
```css
.animate-ready { opacity: 0; transform: translateY(20px); transition: 0.6s; }
.animate-ready.visible { opacity: 1; transform: translateY(0); }
```

**Responsive breakpoints:**
- `768px`: single-column grid, mobile nav drawer, stacked hero
- `480px`: reduced section padding, smaller font sizes

**Policy page styles** (`.policy-hero`, `.policy-content`):
- Shared styles for both legal pages
- `.stop-highlight` / `.opt-out-box`: purple left-bordered callout blocks
- `.rates-box`: subtle bordered info boxes

---

## netlify.toml

Applies security headers to all routes (`for = "/*"`):

| Header | Value |
|--------|-------|
| `X-Frame-Options` | `DENY` — prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Blocks geolocation, microphone, camera |
| `Content-Security-Policy` | Scripts: self only; Styles: self + fonts.googleapis.com + unsafe-inline; Connect: self + abython.app.n8n.cloud; No iframes |

**Important:** The CSP `connect-src` explicitly whitelists `https://abython.app.n8n.cloud` — required for the demo form and chat widget fetches. Any new external API calls must be added here or they'll be blocked by the browser.

---

## Privacy Policy (`/privacy-policy/index.html`)

- Effective Date: March 5, 2026
- Covers: data collected (name, email, phone, address), usage (scheduling/reactivation on behalf of clients), no third-party sharing
- SMS opt-out: reply STOP; opt-in text: JOIN/START/INFO/YES to (847) 636-9074
- Explicitly mentions Mission MMA & Fitness as a client example
- Links back to `../styles.css` and `../script.js`

---

## Terms & Conditions (`/terms-and-conditions/index.html`)

- Effective Date: March 5, 2026
- Program: "Abython SMS Notifications (including Mission MMA & Fitness)"
- Message frequency: up to 4/month
- Opt-out: reply STOP; help: reply HELP
- Carrier disclaimer: carriers not liable for undelivered messages
- Links to Privacy Policy

---

## External Services & API Connections

| Service | What it does | Credential |
|---------|-------------|------------|
| **n8n** | Automation backbone — receives demo form submissions and chat messages | Webhook header auth: `abython_xK9#mP2$vQ7nL4wR` |
| **VAPI** | AI phone calls — triggered by n8n after demo form submit | Demo Assistant ID: `d3e8bd04-1720-4eff-aa56-2e04f5b664ed` |
| **Netlify** | Hosting | Site: https://abython.com |
| **Calendly** | Booking — "Book a Free Demo" button | https://calendly.com/owner-abython/new-meeting |
| **Stripe** | Payment collection (not wired to site buttons yet) | See payment links above |

### n8n Webhooks used by this site
- **Demo form:** `https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c` (Abython Demo Outbound workflow)
- **Chat widget:** `https://abython.app.n8n.cloud/webhook/squarespace-chat` (chat AI workflow)

---

## Known Issues / Technical Debt

1. **Duplicate chat widget init:** `chat.js` is loaded AND the same IIFE is appended to the bottom of `script.js`. Both run. Last binding wins (harmless but wasteful).

2. **Weak email validation:** The demo form only checks that the email field is non-empty — no regex or format check.

3. **Auth token in client-side JS:** `Authorization: Bearer abython_xK9#mP2$vQ7nL4wR` is visible in `script.js` source. This is the n8n webhook header auth secret. Fine for low-stakes demo submissions but worth noting.

4. **CSP `unsafe-inline` for styles:** Required because chat widget styles are injected inline in `index.html`. Could be cleaned up by moving them to `styles.css`.

5. **Stripe links exist but aren't wired:** All three pricing CTAs go to `#contact`, not the Stripe payment links defined in the owner's system config.

---

## How the Demo Call Flow Works (end-to-end)

1. Visitor fills out hero form (name, email, phone, SMS consent)
2. `script.js` validates client-side
3. POST to n8n webhook `e4df1cc2...` with JSON payload + Bearer token
4. n8n "Abython Demo Outbound" workflow fires
5. n8n calls VAPI API to initiate outbound call to submitted phone number
6. VAPI uses Demo Assistant `d3e8bd04` to call the person
7. Person experiences the AI receptionist product firsthand
8. Lead data is presumably saved to Abython's internal CRM/sheets

---

## How the Chat Widget Flow Works (end-to-end)

1. Visitor clicks 💬 button (bottom-right)
2. Chat box opens, greeting message appears
3. Visitor types message → `send()` fires
4. POST to n8n `squarespace-chat` webhook with `{sessionId, message, userData, messageCount}`
5. n8n routes to AI (likely Claude or GPT), returns `{success, botResponse, sessionId, messageCount}`
6. Bot response appended to chat UI
7. `sessionId` stored in `sid` variable — passed on every subsequent message for context continuity

---

## Quick Reference: IDs and Classes to Know

| Selector | Element |
|----------|---------|
| `#demo-form` | Hero demo form |
| `#demo-submit` | Submit button (disabled during fetch) |
| `#demo-success` | Success state (hidden by default) |
| `#error-{field}` | Field-level error spans |
| `#nav-toggle` | Hamburger button |
| `#nav-links` | Nav link container (gets `.open` on mobile) |
| `#chat-btn` | Chat toggle button |
| `#chat-box` | Chat window container |
| `#chat-msgs` | Message scroll area |
| `#chat-inp` | Chat text input |
| `#chat-send` | Chat send button |
| `.animate-ready` | Elements that fade in on scroll |
| `.animate-ready.visible` | State added by IntersectionObserver |
| `.service-card.featured` | Highlighted card variant |
| `.how-block.reverse` | Flips visual to left column |
