# PLAN.md — Abython.com Living Plan

> This is a living document. Append freely. Check items off as they complete. Add new ideas to the appropriate section.

---

## 1. Active Rebrand Sequence (37 Prompts)

Status legend: ⬜ Not started · 🔄 In progress · ✅ Complete · ⏸️ Paused / blocked

### Foundation
- ✅ **Prompt 1** — Create `CLAUDE.md`
- 🔄 **Prompt 2** — Create `PLAN.md` *(this file)*
- ⬜ **Prompt 3** — Delete `netlify.toml`, create `vercel.json` with security headers + CSP
- ⬜ **Prompt 4** — Rewrite design tokens in `styles.css` (off-white palette, Fraunces + Inter Tight, trust blue accent `#1E3A8A`)
- ⬜ **Prompt 5** — Add GSAP + Lenis CDN scripts to `index.html`, initialize smooth scroll

### Structure
- ⬜ **Prompt 6** — Rebuild `index.html` body skeleton (nav, grid hero, statement, services, managed pitch, demo, CTA, footer)
- ⬜ **Prompt 7** — Build the 4×4 portfolio grid hero with all 16 placeholder links + hover behavior

### Service Pages
- ⬜ **Prompt 8** — Create `/ai-receptionist/index.html` with demo form *(API contract preserved verbatim)*
- ⬜ **Prompt 9** — Create `/google-business-profile/index.html` styled placeholder
- ⬜ **Prompt 10** — Create `/seo-and-aio/index.html` styled placeholder
- ⬜ **Prompt 11** — Create `/web-design/index.html` styled placeholder
- ⬜ **Prompt 12** — Create `/work/index.html` portfolio index page

### Portfolio Sites (16)
- ⬜ **Prompt 13** — `/work/azure-cosmetic-dentistry/` — Gold + cream luxury
- ⬜ **Prompt 14** — `/work/little-tooth-pediatric/` — Playful premium pastels
- ⬜ **Prompt 15** — `/work/lumen-medspa/` — Editorial pinks
- ⬜ **Prompt 16** — `/work/shape-aesthetics/` — Dark sculptural moody
- ⬜ **Prompt 17** — `/work/arcline-orthodontics/` — Modern geometric
- ⬜ **Prompt 18** — `/work/hearthfield-family-dental/` — Warm sage + cream
- ⬜ **Prompt 19** — `/work/meridian-implants/` — Clinical-luxury navy + silver
- ⬜ **Prompt 20** — `/work/glow-laser-clinic/` — Bright gradient energetic
- ⬜ **Prompt 21** — `/work/halcyon-plastic-surgery/` — Cinematic dark mode
- ⬜ **Prompt 22** — `/work/verdant-iv-lounge/` — Earthy terracotta + sage
- ⬜ **Prompt 23** — `/work/rootwell-holistic-dental/` — Organic natural texture
- ⬜ **Prompt 24** — `/work/stratum-dermatology/` — Scientific-modern blue + white
- ⬜ **Prompt 25** — `/work/kinetics-pilates/` — Movement-forward bold type
- ⬜ **Prompt 26** — `/work/north-barber-co/` — Masculine monochrome
- ⬜ **Prompt 27** — `/work/ironwood-law/` — Editorial serif gravitas
- ⬜ **Prompt 28** — `/work/savor-private-chef/` — Lush burgundy indulgent

### Homepage Sections
- ⬜ **Prompt 29** — Statement section (big-type "who we are / who we serve")
- ⬜ **Prompt 30** — Services section with SEO vs AIO explainer
- ⬜ **Prompt 31** — "Actively managed" differentiator section
- ⬜ **Prompt 32** — Restyle demo form on homepage *(functionality preserved)*
- ⬜ **Prompt 33** — Final CTA + footer

### Polish
- ⬜ **Prompt 34** — Restyle chat widget *(API contract preserved)*
- ⬜ **Prompt 35** — Restyle legal pages (`/privacy-policy/`, `/terms-and-conditions/`)
- ⬜ **Prompt 36** — QA pass — verify VAPI demo + chat both functional, lighthouse audit, responsive check
- ⬜ **Prompt 37** — Git commit sequence + push to `Matthew-Abython/abython.com-website`

---

## 2. 🔒 Post-Launch Security Migration — MOVE API CREDENTIALS TO VERCEL SERVERLESS

> **Priority: High. Execute before any meaningful traffic hits the site.**

### The Problem

The current architecture has the n8n webhook auth token exposed in client-side JavaScript:

```js
'Authorization': 'Bearer abython_xK9#mP2$vQ7nL4wR'
```

This token is visible to anyone who views the page source. The webhook URLs themselves (`https://abython.app.n8n.cloud/webhook/...`) are also fully exposed. This creates two attack vectors:

1. **VAPI abuse:** A malicious actor extracts the token, scripts calls to the demo webhook with arbitrary phone numbers, and triggers harassing VAPI calls — at Matthew's expense.
2. **Chat abuse:** Same actor floods the chat webhook to drain AI compute budget, or attempts prompt injection on the conversational AI.

Mitigation is essential before the rebranded site goes live and starts driving real traffic.

### The Fix

Move both API calls behind Vercel serverless functions. The browser talks to `/api/*` on the same domain; the server holds the secrets.

#### Step 1: Create `/api/demo-call.js` (Vercel serverless function)

```js
// /api/demo-call.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, smsConsent } = req.body || {};

  // Server-side validation
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length !== 10) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  try {
    const upstream = await fetch(
      `https://abython.app.n8n.cloud/webhook/${process.env.N8N_DEMO_WEBHOOK_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.N8N_AUTH_TOKEN}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: digits,
          smsConsent: Boolean(smsConsent),
        }),
      }
    );

    if (!upstream.ok) {
      return res.status(502).json({ error: 'Upstream service unavailable' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}
```

#### Step 2: Create `/api/chat.js` (Vercel serverless function)

```js
// /api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sessionId, message, userData, messageCount } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid message' });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long' });
  }

  try {
    const upstream = await fetch(
      `https://abython.app.n8n.cloud/webhook/${process.env.N8N_CHAT_WEBHOOK_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.N8N_AUTH_TOKEN}`,
        },
        body: JSON.stringify({
          sessionId: sessionId || null,
          message,
          userData: userData || {},
          messageCount: Number(messageCount) || 0,
        }),
      }
    );

    const data = await upstream.json();
    return res.status(upstream.ok ? 200 : 502).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}
```

#### Step 3: Set Vercel environment variables

In Vercel project settings → Environment Variables:

| Variable | Value |
|---|---|
| `N8N_AUTH_TOKEN` | `abython_xK9#mP2$vQ7nL4wR` *(rotate this after migration — see Step 7)* |
| `N8N_DEMO_WEBHOOK_ID` | `e4df1cc2-8d07-4e72-a86a-df1a13b10f2c` |
| `N8N_CHAT_WEBHOOK_ID` | `squarespace-chat` |

Apply to: Production, Preview, Development.

#### Step 4: Update client-side code

In `script.js`, change:
```js
// OLD
var WEBHOOK_URL = 'https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c';
fetch(WEBHOOK_URL, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer abython_xK9#mP2$vQ7nL4wR',
  },
  // ...
});
```

To:
```js
// NEW
fetch('/api/demo-call', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ firstName, lastName, email, phone, smsConsent }),
});
```

Same pattern for `chat.js` → point at `/api/chat` instead of the n8n URL directly.

#### Step 5: Update `vercel.json` CSP

`connect-src` can be tightened — `https://abython.app.n8n.cloud` is no longer needed in the browser CSP since the browser only talks to same-origin `/api/*`. The serverless function makes the n8n call server-side.

```json
"connect-src 'self'"
```

This is significantly more restrictive and removes the n8n URL from any browser-side exposure.

#### Step 6: Add rate limiting

Use `@upstash/ratelimit` or Vercel's built-in middleware to cap:
- **Demo form:** 3 calls per IP per hour
- **Chat:** 30 messages per IP per hour

This prevents abuse even if the `/api/*` endpoints are discovered and scripted against.

#### Step 7: Rotate the n8n auth token

After confirming the new architecture works:
1. In n8n, generate a new webhook auth token
2. Update `N8N_AUTH_TOKEN` in Vercel env vars
3. The old token is now dead — any attacker who captured it during the exposed period now has nothing

#### Step 8: Optional hardening

- **Cloudflare Turnstile or hCaptcha** on the demo form to stop bot-triggered VAPI calls (currently a real risk — someone could script automated calls to harass random phone numbers)
- **Phone number validation library** (e.g. `libphonenumber-js`) to verify the number is plausibly real before forwarding to VAPI
- **Email validation** stronger than presence check
- **Honeypot field** in the demo form to catch unsophisticated bots

### Definition of Done

- [ ] `/api/demo-call.js` and `/api/chat.js` deployed to Vercel
- [ ] Environment variables set in Vercel
- [ ] `script.js` and `chat.js` point to `/api/*` endpoints
- [ ] `vercel.json` CSP `connect-src` tightened to `'self'`
- [ ] Rate limiting active on both endpoints
- [ ] N8n auth token rotated; old token invalidated
- [ ] Tested: VAPI demo call works end-to-end
- [ ] Tested: Chat widget works end-to-end
- [ ] Page source inspected: no `Bearer` tokens or n8n URLs visible to the browser

---

## 3. Ideas & Future Enhancements

*Append freely below.*

- (empty — add ideas as they come up)

---

## 4. Known Issues

Carried forward from `HANDOFF.md` + tracked during rebrand:

| # | Issue | Status | Notes |
|---|---|---|---|
| 1 | Duplicate chat init (`chat.js` IIFE also pasted at bottom of `script.js`) | ⬜ Open | Fix during Prompt 34 (chat restyle) |
| 2 | Weak email validation (presence-only) | ⬜ Open | Revisit in QA pass (Prompt 36) and/or security migration |
| 3 | Auth token + webhook URLs exposed client-side | ⬜ Open | Addressed by Section 2 (Vercel migration) |
| 4 | Stripe payment links from prior version are dropped from rebrand | ✅ Decided | Pricing returns later, separate effort |

Add new issues here as they surface.

---

## 5. Decisions Log

A record of meaningful design / product decisions and when they were made, so future-Matthew (or future-Claude) understands the reasoning.

| Date | Decision | Reasoning |
|---|---|---|
| Rebrand kickoff | Move from Netlify to Vercel | Already migrated; consolidates with planned `/api/*` serverless functions |
| Rebrand kickoff | Target ICP: dentists + med spas only | Sharper positioning, allows for niche-specific portfolio and messaging |
| Rebrand kickoff | Drop pricing from site (was $225 / $397 / $697 tiers) | Pricing strategy under reconsideration; returns later |
| Rebrand kickoff | Accent color: `#1E3A8A` trust blue | Symbolizes trust; works for medical/dental ICP; contrasts cleanly with off-white base |
| Rebrand kickoff | Marketing site = bold/loud, portfolio sites = calm/luxurious | The contrast is the pitch — bold agency that ships polished work |
| Rebrand kickoff | 16 fake portfolio sites, mixed industries skewed dental/medspa | Demonstrates range while staying relevant to ICP |

Add new decisions here as they're made.

---

*Last updated: at creation. Update timestamps and append below as the project evolves.*
