# Prompt-Writing Guide for Abython.com

> **For desktop Claude only.** This file is not read by coding Claude automatically.
> Use it to write accurate prompts for the coding Claude CLI session.

---

## The Two-Claude Workflow

```
You (desktop chat)  →  write prompt  →  coding Claude (CLI) executes
```

Coding Claude automatically reads `CLAUDE.md` (constraints) and `SESSION.md` (current state) at session start. It reads actual source files from disk when executing. **You do not need to paste code into prompts.**

---

## What to Include in a Prompt

- **Which file(s) to edit** — use the shortcodes from `SESSION.md` (F1, F2, W3, etc.) or exact paths
- **What the result should look like** — describe the visual or behavioral outcome
- **Section anchor** — e.g., "after the services section", "inside the `.work-grid` element"
- **Any locked constraint to reinforce** — e.g., "don't touch the form POST logic", "don't modify vercel.json"
- **Whether it's** a new page, edit to existing HTML, or pure CSS change

## What NOT to Include

| Don't | Because |
|---|---|
| Paste existing code | Coding Claude reads the file |
| List design token values | They're in styles.css; say "use `--accent`" |
| Describe full API request shape | It's in script.js; say "same POST as before" |
| Re-describe file structure | SESSION.md has it |
| Repeat locked rules from CLAUDE.md | They're loaded automatically |

---

## File Shortcodes (from SESSION.md)

```
F1 = index.html                 F2 = styles.css
F3 = script.js                  F4 = chat.js
F5 = ai-receptionist/index.html F6 = work/index.html
F7 = vercel.json
W1–W16 = work/{slug}/index.html
```

---

## Prompt Templates

### Add a section to an existing page
```
Add a [section name] section to F1, after the [existing section].
Visual goal: [describe what it should look like].
Use --accent for CTAs. Use Fraunces for the headline.
Don't touch the [nearby locked thing].
```

### Create a new placeholder page
```
Create /[path]/index.html as a styled placeholder.
Use the same nav and footer pattern as F1.
Hero with "[Page Title]" headline and a Calendly CTA.
No new JS needed.
```

### Style-only change (no HTML)
```
In F2, restyle the [component class]. Keep existing HTML.
Goal: [visual description]. Use existing tokens only.
```

### Fix something broken
```
In F3, fix: [describe the bug].
Don't touch [the form POST logic / chat widget / etc.].
```

### Build a portfolio fake site
```
Create W[N] — /work/[slug]/index.html.
Business: [Name] | Industry: [type] | Style: [from portfolio table in CLAUDE.md §5].
Single-page, self-contained HTML/CSS. No nav back to Abython. No external scripts except Google Fonts.
```

---

## Locked Zones (Always Mention When Nearby)

| Zone | Rule to include in prompt |
|---|---|
| Demo form POST in F3 | "Don't modify the form submission endpoint or auth header" |
| Chat widget in F4 | "Don't modify chat.js" |
| vercel.json CSP | "Don't modify vercel.json" |
| Calendly URL | "Use https://calendly.com/owner-abython/new-meeting for all book CTAs" |
| Token values in F2 | "Use existing CSS custom properties only, don't change token values" |

---

## Current Progress Snapshot

Check `SESSION.md` → Current State section for the latest prompt number and what's next.
