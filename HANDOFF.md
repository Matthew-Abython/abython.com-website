# Abython.com — Codebase Handoff

**Last updated:** 2026-05-13 after Prompts 1–8 (rebrand in progress)
**Repository:** `Matthew-Abython/abython.com-website` on GitHub — branch `main`, commit `06b8f0d`

This document gives a complete picture of the current codebase state. It is updated every time changes are pushed to GitHub — if it conflicts with what you see in the files, trust the files.

---

## Full File Contents (Authoritative Source of Truth)

> **Maintenance rule:** Every time any of these files changes, this section must be regenerated in the same commit. If you edit `index.html`, `script.js`, `chat.js`, `styles.css`, `vercel.json`, or any policy page, you also update the corresponding embedded block above. The structural notes elsewhere in this handoff describe intent; these embedded files are the literal source of truth. When the embedded contents and the actual files conflict, the actual files win and this section is out of date — regenerate it immediately.

### index.html (225 lines)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abython | AI Receptionist & High-Converting Websites</title>
    <meta name="description" content="Abython builds AI phone agents that answer every call 24/7 and custom websites engineered to convert visitors into booked clients.">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- ════════════════════════════════════════════════════════════════
       NAVIGATION
       ════════════════════════════════════════════════════════════════ -->
  <nav class="nav" id="primary-nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo">Abython</a>

      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" id="nav-links">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="/ai-receptionist">AI Receptionist</a>
        <a href="/google-business-profile">GBP</a>
        <a href="/seo-and-aio">SEO + AIO</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <!-- ════════════════════════════════════════════════════════════════
       HERO — 4×4 PORTFOLIO GRID
       Content fills in during Prompt 7
       ════════════════════════════════════════════════════════════════ -->
  <section class="work-grid-hero" id="work" aria-label="Selected work">
    <div class="work-grid" id="work-grid">
      <!-- 16 placeholder tiles. Real content in Prompt 7. -->
      <a href="/work/azure-cosmetic-dentistry" target="_blank" rel="noopener" class="work-tile" data-tile="1"><span class="work-tile-label">01 · Cosmetic Dentistry</span></a>
      <a href="/work/little-tooth-pediatric" target="_blank" rel="noopener" class="work-tile" data-tile="2"><span class="work-tile-label">02 · Pediatric Dental</span></a>
      <a href="/work/lumen-medspa" target="_blank" rel="noopener" class="work-tile" data-tile="3"><span class="work-tile-label">03 · Medspa</span></a>
      <a href="/work/shape-aesthetics" target="_blank" rel="noopener" class="work-tile" data-tile="4"><span class="work-tile-label">04 · Injectables</span></a>
      <a href="/work/arcline-orthodontics" target="_blank" rel="noopener" class="work-tile" data-tile="5"><span class="work-tile-label">05 · Orthodontics</span></a>
      <a href="/work/hearthfield-family-dental" target="_blank" rel="noopener" class="work-tile" data-tile="6"><span class="work-tile-label">06 · Family Dental</span></a>
      <a href="/work/meridian-implants" target="_blank" rel="noopener" class="work-tile" data-tile="7"><span class="work-tile-label">07 · Implants</span></a>
      <a href="/work/glow-laser-clinic" target="_blank" rel="noopener" class="work-tile" data-tile="8"><span class="work-tile-label">08 · Laser Clinic</span></a>
      <a href="/work/halcyon-plastic-surgery" target="_blank" rel="noopener" class="work-tile" data-tile="9"><span class="work-tile-label">09 · Plastic Surgery</span></a>
      <a href="/work/verdant-iv-lounge" target="_blank" rel="noopener" class="work-tile" data-tile="10"><span class="work-tile-label">10 · IV Lounge</span></a>
      <a href="/work/rootwell-holistic-dental" target="_blank" rel="noopener" class="work-tile" data-tile="11"><span class="work-tile-label">11 · Holistic Dental</span></a>
      <a href="/work/stratum-dermatology" target="_blank" rel="noopener" class="work-tile" data-tile="12"><span class="work-tile-label">12 · Dermatology</span></a>
      <a href="/work/kinetics-pilates" target="_blank" rel="noopener" class="work-tile" data-tile="13"><span class="work-tile-label">13 · Pilates Studio</span></a>
      <a href="/work/north-barber-co" target="_blank" rel="noopener" class="work-tile" data-tile="14"><span class="work-tile-label">14 · Barber Co.</span></a>
      <a href="/work/ironwood-law" target="_blank" rel="noopener" class="work-tile" data-tile="15"><span class="work-tile-label">15 · Law Firm</span></a>
      <a href="/work/savor-private-chef" target="_blank" rel="noopener" class="work-tile" data-tile="16"><span class="work-tile-label">16 · Private Chef</span></a>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════════════
       STATEMENT — Big-type "who we are / who we serve"
       Real copy & polish in Prompt 29
       ════════════════════════════════════════════════════════════════ -->
  <section class="statement" id="statement">
    <div class="container container--narrow">
      <p class="eyebrow animate-ready">Abython · For dentists &amp; med spas</p>
      <p class="statement-line animate-ready">
        We build, manage, and grow websites
        <span class="gradient-text">that actually book appointments.</span>
      </p>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════════════
       SERVICES — 4 pillars
       Real content & SEO vs AIO explainer in Prompt 30
       ════════════════════════════════════════════════════════════════ -->
  <section class="services" id="services" aria-label="Services">
    <div class="container">
      <header class="section-head animate-ready">
        <p class="eyebrow">What we do</p>
        <h2 class="section-title">Four services. One growth system.</h2>
      </header>

      <div class="services-grid">
        <article class="service-card animate-ready" data-pillar="web-design">
          <p class="service-card-num">01</p>
          <h3>Custom Web Design</h3>
          <p class="service-card-body">Built specifically for dental practices and med spas — designed to convert visitors into booked appointments, not just look pretty.</p>
          <a href="/web-design" class="service-card-link">Learn more →</a>
        </article>

        <article class="service-card animate-ready" data-pillar="seo-aio">
          <p class="service-card-num">02</p>
          <h3>SEO + AIO</h3>
          <p class="service-card-body">Traditional SEO gets you found on Google. AIO gets you cited by ChatGPT, Perplexity, and Google's AI Overviews. You need both now.</p>
          <a href="/seo-and-aio" class="service-card-link">Learn more →</a>
        </article>

        <article class="service-card animate-ready" data-pillar="gbp">
          <p class="service-card-num">03</p>
          <h3>Google Business Profile</h3>
          <p class="service-card-body">Your map listing is where local patients find you first. We manage reviews, photos, posts, and Q&amp;A to keep you ranking.</p>
          <a href="/google-business-profile" class="service-card-link">Learn more →</a>
        </article>

        <article class="service-card animate-ready" data-pillar="receptionist">
          <p class="service-card-num">04</p>
          <h3>AI Receptionist</h3>
          <p class="service-card-body">An AI phone agent that answers every call 24/7, qualifies leads, and books appointments straight to your calendar.</p>
          <a href="/ai-receptionist" class="service-card-link">Learn more →</a>
        </article>
      </div>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════════════
       MANAGED — "We don't ship and ghost" differentiator
       Real content & visual treatment in Prompt 31
       ════════════════════════════════════════════════════════════════ -->
  <section class="managed" id="managed" aria-label="Actively managed">
    <div class="container container--narrow">
      <header class="section-head animate-ready">
        <p class="eyebrow">The Abython difference</p>
        <h2 class="section-title">We don't ship a website and disappear.</h2>
      </header>

      <p class="managed-lead animate-ready lead">
        Most agencies hand you a site and leave. We actively manage every site we build —
        SEO updates, AIO optimization, content refreshes, and Google Business Profile management
        all happen continuously, every month.
      </p>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════════════
       FINAL CTA
       Polished in Prompt 33
       ════════════════════════════════════════════════════════════════ -->
  <section class="final-cta" id="contact" aria-label="Book a call">
    <div class="container container--narrow">
      <h2 class="final-cta-title animate-ready">
        <span class="gradient-text">Let's build something</span><br>
        that actually grows your practice.
      </h2>
      <p class="final-cta-desc animate-ready lead">
        Book a free strategy call. We'll look at your current setup, identify what's leaking leads,
        and outline what a complete Abython growth system would do for you. No pressure, no commitment.
      </p>
      <div class="final-cta-actions animate-ready">
        <a href="https://calendly.com/owner-abython/new-meeting" target="_blank" rel="noopener noreferrer" class="cta-button-primary cta-button-primary--inverse">
          Book a Free Demo
        </a>
      </div>
      <div class="contact-info animate-ready">
        <a href="tel:+18476369074">📞 (847) 636-9074</a>
        <a href="mailto:owner@abython.com">✉ owner@abython.com</a>
      </div>
    </div>
  </section>

  <!-- ════════════════════════════════════════════════════════════════
       FOOTER
       ════════════════════════════════════════════════════════════════ -->
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <span class="footer-logo">Abython</span>
        <nav class="footer-links" aria-label="Footer">
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
          <a href="mailto:owner@abython.com">Contact</a>
        </nav>
      </div>
      <p class="footer-copy">&copy; 2026 Abython — Websites that book appointments.</p>
    </div>
  </footer>

  <!-- ════════════════════════════════════════════════════════════════
       CHAT WIDGET — preserved from prior version, inline styles kept
       Restyled in Prompt 34
       ════════════════════════════════════════════════════════════════ -->
  <style>
  #chat-widget{position:fixed;bottom:20px;right:20px;z-index:9999}
  #chat-btn{width:56px;height:56px;border-radius:50%;background:var(--accent);border:none;cursor:pointer;color:#fff;font-size:26px;box-shadow:0 4px 16px var(--accent-glow);transition:transform 0.3s,background 0.2s}
  #chat-btn:hover{transform:scale(1.1);background:var(--accent-hover)}
  #chat-box{position:fixed;bottom:88px;right:20px;width:380px;height:540px;background:var(--bg-elevated);border:1px solid var(--border);border-radius:16px;box-shadow:var(--shadow-lg);display:none;flex-direction:column;overflow:hidden}
  #chat-header{background:var(--accent-soft);border-bottom:1px solid var(--border);color:var(--ink);padding:18px 20px;font-weight:600;font-family:var(--font-body);font-size:0.95rem}
  #chat-msgs{flex:1;overflow-y:auto;padding:16px;background:var(--bg);display:flex;flex-direction:column;gap:10px}
  .msg{padding:10px 14px;border-radius:16px;max-width:82%;word-wrap:break-word;font-size:0.9rem;line-height:1.5}
  .user-msg{background:var(--accent);color:#fff;margin-left:auto;border-bottom-right-radius:4px}
  .bot-msg{background:var(--bg-elevated);color:var(--ink);border:1px solid var(--border);border-bottom-left-radius:4px}
  .error-msg{background:#fef2f2;color:#dc2626;border:1px solid rgba(220,38,38,0.2)}
  #chat-input-area{padding:12px;display:flex;gap:8px;border-top:1px solid var(--border);background:var(--bg-elevated)}
  #chat-inp{flex:1;padding:10px 14px;background:var(--bg);border:1px solid var(--border);border-radius:24px;outline:none;color:var(--ink);font-size:0.875rem;font-family:inherit}
  #chat-inp::placeholder{color:var(--ink-subtle)}
  #chat-inp:focus{border-color:var(--accent-ring)}
  #chat-send{padding:10px 16px;background:var(--accent);color:#fff;border:none;border-radius:24px;cursor:pointer;font-weight:600;font-size:0.875rem;transition:background 0.2s}
  #chat-send:hover{background:var(--accent-hover)}
  @media(max-width:768px){#chat-box{width:calc(100vw - 40px);right:20px}}
  </style>
  <div id="chat-widget">
    <button id="chat-btn">💬</button>
    <div id="chat-box">
      <div id="chat-header">Chat with Abython</div>
      <div id="chat-msgs"></div>
      <div id="chat-input-area">
        <input id="chat-inp" type="text" placeholder="Type your message...">
        <button id="chat-send">Send</button>
      </div>
    </div>
  </div>

  <!-- ════════════════════════════════════════════════════════════════
       SCRIPTS — load order preserved from Prompt 5
       ════════════════════════════════════════════════════════════════ -->
  <script src="https://unpkg.com/lenis@1.3.8/dist/lenis.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="chat.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

### script.js (212 lines)

```js
// Smooth scroll for anchor links — uses Lenis (initialized later in this file)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();

    // Use Lenis if available; fall back to native scrollTo
    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72),
      });
    } else {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }

    // Close mobile nav if open
    const navLinks = document.getElementById('nav-links');
    if (navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
        }
    });
}

// Scroll-triggered entrance animations — replaces the old IntersectionObserver.
// Uses GSAP ScrollTrigger. Respects prefers-reduced-motion.
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // For users who prefer reduced motion: show all elements immediately, no animation.
    document.querySelectorAll('.animate-ready').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Libraries failed to load — fall back to making elements visible.
    document.querySelectorAll('.animate-ready').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Animate each .animate-ready element with a slight stagger based on siblings.
  document.querySelectorAll('.animate-ready').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// Demo Request Form
(function () {
    var WEBHOOK_URL = 'https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c';
    var form = document.getElementById('demo-form');
    if (!form) return;

    function showError(inputId, errorId, message) {
        var input = document.getElementById(inputId);
        var err = document.getElementById(errorId);
        if (input) input.classList.add('input-error');
        if (err) err.textContent = message;
    }

    function clearErrors() {
        ['demo-first-name', 'demo-last-name', 'demo-email', 'demo-phone'].forEach(function (id) {
            var input = document.getElementById(id);
            if (input) input.classList.remove('input-error');
        });
        ['error-firstName', 'error-lastName', 'error-email', 'error-phone'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.textContent = '';
        });
    }

    function validate(firstName, lastName, email, phone) {
        var valid = true;
        if (!firstName.trim()) { showError('demo-first-name', 'error-firstName', 'First name is required.'); valid = false; }
        if (!lastName.trim()) { showError('demo-last-name', 'error-lastName', 'Last name is required.'); valid = false; }
        if (!email.trim()) { showError('demo-email', 'error-email', 'Email is required.'); valid = false; }
        var digits = phone.replace(/\D/g, '');
        if (!digits) { showError('demo-phone', 'error-phone', 'Phone number is required.'); valid = false; }
        else if (digits.length !== 10) { showError('demo-phone', 'error-phone', 'Please enter a 10-digit phone number.'); valid = false; }
        return valid;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        var firstName = document.getElementById('demo-first-name').value;
        var lastName  = document.getElementById('demo-last-name').value;
        var email     = document.getElementById('demo-email').value;
        var phone     = document.getElementById('demo-phone').value;

        if (!validate(firstName, lastName, email, phone)) return;

        var btn = document.getElementById('demo-submit');
        btn.disabled = true;
        btn.textContent = 'Sending\u2026';

        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer abython_xK9#mP2$vQ7nL4wR',
            },
            body: JSON.stringify({
                firstName:  firstName.trim(),
                lastName:   lastName.trim(),
                email:      email.trim(),
                phone:      phone.replace(/\D/g, ''),
                smsConsent: document.getElementById('sms-consent').checked,
            }),
        })
        .then(function (response) {
            if (!response.ok) throw new Error('Server error: ' + response.status);
            form.hidden = true;
            document.getElementById('demo-success').hidden = false;
        })
        .catch(function () {
            btn.disabled = false;
            btn.textContent = 'Request My Demo Call';
            var err = document.getElementById('error-phone');
            if (err) err.textContent = 'Something went wrong. Please try again.';
        });
    });
})();

// ─── Lenis smooth scroll + GSAP integration ───────────────────────────
// Initialized after DOM is ready. Lenis is exposed on window.lenis so the
// anchor-link handler above can use it.
(function initSmoothScroll() {
  function boot() {
    // If reduced motion is preferred, skip Lenis entirely — native scroll is fine.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion && typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.08,
        wheelMultiplier: 1.2,
        smoothWheel: true,
      });

      window.lenis = lenis;

      // Sync Lenis with GSAP's ticker for jank-free scroll-triggered animations.
      if (typeof gsap !== 'undefined') {
        if (typeof ScrollTrigger !== 'undefined') {
          lenis.on('scroll', ScrollTrigger.update);
        }
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        // GSAP not loaded — fall back to Lenis's own RAF loop.
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    }

    // Kick off scroll animations (works with or without Lenis).
    if (typeof initScrollAnimations === 'function') {
      initScrollAnimations();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
```

### chat.js (47 lines)

```js
(function(){
var url='https://abython.app.n8n.cloud/webhook/squarespace-chat';
var sid=null,msgc=0,isOpen=false;
function toggle(){
  isOpen=!isOpen;
  document.getElementById('chat-box').style.display=isOpen?'flex':'none';
  document.getElementById('chat-btn').textContent=isOpen?'✕':'💬';
  if(isOpen&&msgc===0){
    addMsg('bot',"Hello! I'm Abython's AI assistant. How can I help you today?");
    msgc=1;
  }
}
function addMsg(role,txt,isErr){
  var div=document.createElement('div');
  div.className='msg '+(role==='user'?'user-msg':'bot-msg')+(isErr?' error-msg':'');
  div.textContent=txt;
  var container=document.getElementById('chat-msgs');
  container.appendChild(div);
  container.scrollTop=container.scrollHeight;
}
function send(){
  var inp=document.getElementById('chat-inp');
  var msg=inp.value.trim();
  if(!msg) return;
  addMsg('user',msg);
  inp.value='';
  fetch(url,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({sessionId:sid,message:msg,userData:{},messageCount:msgc})
  })
  .then(r=>r.json())
  .then(d=>{
    if(d.success&&d.botResponse){
      sid=d.sessionId;
      msgc=d.messageCount;
      addMsg('bot',d.botResponse);
    }else{
      addMsg('bot','Error: Invalid response',true);
    }
  })
  .catch(()=>addMsg('bot','Connection error. Please try again.',true));
}
document.getElementById('chat-btn').onclick=toggle;
document.getElementById('chat-send').onclick=send;
document.getElementById('chat-inp').onkeypress=e=>{if(e.key==='Enter')send();};
})();
```

### vercel.json (36 lines)

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' https://unpkg.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self' https://abython.app.n8n.cloud; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://calendly.com; object-src 'none'; upgrade-insecure-requests"
        }
      ]
    }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
```

### styles.css (1703 lines)

```css
/* ============================================================
   ABYTHON — Rebrand 2026
   ============================================================ */

/* === FONTS === */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Inter+Tight:wght@400;500;600;700;800&display=swap');

/* === RESET === */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: auto; /* Lenis handles smooth scroll; native must be off */
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

/* === DESIGN TOKENS === */
:root {
  /* ─── Surfaces ─────────────────────────────────────── */
  --bg: #F4F1EB;
  --bg-elevated: #FFFFFF;
  --bg-inverse: #0A0A0A;
  --bg-tint: rgba(30, 58, 138, 0.04);

  /* ─── Ink (text) ───────────────────────────────────── */
  --ink: #0A0A0A;
  --ink-muted: #525252;
  --ink-subtle: #A3A3A3;
  --ink-inverse: #F4F1EB;
  --ink-inverse-muted: #A3A3A3;

  /* ─── Accent (Trust Blue) ──────────────────────────── */
  --accent: #1E3A8A;
  --accent-hover: #2952B5;
  --accent-soft: #E8EDF9;
  --accent-glow: rgba(30, 58, 138, 0.22);
  --accent-ring: rgba(30, 58, 138, 0.35);

  /* ─── Borders ──────────────────────────────────────── */
  --border: rgba(10, 10, 10, 0.08);
  --border-strong: rgba(10, 10, 10, 0.16);
  --border-inverse: rgba(244, 241, 235, 0.12);

  /* ─── Radii ────────────────────────────────────────── */
  --radius-sm: 8px;
  --radius: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-btn: 9999px;

  /* ─── Spacing scale ────────────────────────────────── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 120px;

  /* ─── Layout ───────────────────────────────────────── */
  --nav-height: 72px;
  --content-width: 1280px;
  --content-width-narrow: 920px;
  --section-py: 120px;
  --section-py-sm: 80px;

  /* ─── Typography ───────────────────────────────────── */
  --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter Tight', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', monospace;

  /* Font sizes — fluid via clamp() */
  --fs-display-1: clamp(3.5rem, 7vw + 1rem, 8rem);
  --fs-display-2: clamp(2.75rem, 5vw + 0.5rem, 5.5rem);
  --fs-display-3: clamp(2rem, 3.5vw + 0.5rem, 3.5rem);
  --fs-h1: clamp(2.25rem, 3vw + 0.5rem, 3.25rem);
  --fs-h2: clamp(1.75rem, 2vw + 0.5rem, 2.5rem);
  --fs-h3: clamp(1.25rem, 1vw + 0.5rem, 1.625rem);
  --fs-lead: clamp(1.125rem, 0.5vw + 1rem, 1.375rem);
  --fs-body: 1rem;
  --fs-sm: 0.875rem;
  --fs-xs: 0.75rem;

  --lh-tight: 1.05;
  --lh-snug: 1.2;
  --lh-normal: 1.5;
  --lh-relaxed: 1.65;

  --tracking-tight: -0.03em;
  --tracking-normal: 0;
  --tracking-wide: 0.04em;
  --tracking-eyebrow: 0.12em;

  /* ─── Motion ───────────────────────────────────────── */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 180ms;
  --duration: 320ms;
  --duration-slow: 600ms;

  /* ─── Shadows ──────────────────────────────────────── */
  --shadow-sm: 0 1px 2px rgba(10, 10, 10, 0.05);
  --shadow: 0 8px 24px rgba(10, 10, 10, 0.08);
  --shadow-lg: 0 24px 64px rgba(10, 10, 10, 0.12);
  --shadow-accent: 0 16px 40px var(--accent-glow);
}

/* === BASE === */
body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--font-body);
    font-size: var(--fs-body);
    line-height: var(--lh-normal);
    font-weight: 400;
    letter-spacing: var(--tracking-normal);
    min-width: 320px;
    overflow-x: hidden;
}

/* ─── Headings ─────────────────────────────────────── */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 600;
    line-height: var(--lh-tight);
    letter-spacing: var(--tracking-tight);
    margin: 0 0 var(--space-5) 0;
    color: var(--ink);
}

h1 { font-size: var(--fs-display-2); font-weight: 700; }
h2 { font-size: var(--fs-display-3); font-weight: 600; }
h3 { font-size: var(--fs-h1);        font-weight: 600; }
h4 { font-size: var(--fs-h2);        font-weight: 500; }
h5 { font-size: var(--fs-h3);        font-weight: 500; }
h6 { font-size: var(--fs-lead);      font-weight: 500; }

/* Hero-scale utility */
.display {
    font-family: var(--font-display);
    font-size: var(--fs-display-1);
    font-weight: 700;
    line-height: var(--lh-tight);
    letter-spacing: var(--tracking-tight);
    margin: 0;
}

/* Eyebrow / kicker text */
.eyebrow {
    font-family: var(--font-body);
    font-size: var(--fs-xs);
    font-weight: 600;
    letter-spacing: var(--tracking-eyebrow);
    text-transform: uppercase;
    color: var(--ink-muted);
    margin: 0;
}

/* ─── Paragraphs ───────────────────────────────────── */
p {
    margin: 0 0 var(--space-5) 0;
    color: var(--ink-muted);
}

p.lead {
    font-size: var(--fs-lead);
    line-height: var(--lh-relaxed);
    color: var(--ink);
    font-weight: 400;
}

/* ─── Links ────────────────────────────────────────── */
a {
    color: var(--accent);
    text-decoration: none;
    transition: color var(--duration-fast) var(--ease-out);
}

a:hover {
    color: var(--accent-hover);
}

/* ─── Buttons (base reset) ─────────────────────────── */
button {
    font-family: var(--font-body);
    font-size: var(--fs-body);
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
}

/* ─── Forms ────────────────────────────────────────── */
input,
textarea,
select {
    font-family: var(--font-body);
    font-size: var(--fs-body);
    color: var(--ink);
}

/* ─── Selection ────────────────────────────────────── */
::selection {
    background: var(--accent);
    color: var(--bg);
}

/* ─── Focus visible (accessibility) ────────────────── */
:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: var(--radius-sm);
}

/* ─── Image defaults ───────────────────────────────── */
img,
svg,
video {
    display: block;
    max-width: 100%;
    height: auto;
}

/* ─── Lists ────────────────────────────────────────── */
ul {
    list-style: none;
}

/* ─── Reduced motion ───────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* === CONTAINER === */
.container {
    max-width: var(--content-width);
    margin: 0 auto;
    padding: 0 28px;
}

/* ============================================================
   NAVIGATION
   ============================================================ */
.nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--nav-height);
    background: rgba(19, 17, 28, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    z-index: 100;
    display: flex;
    align-items: center;
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.logo {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--ink);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    flex-shrink: 0;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2.75rem;
}

.nav-links a {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--ink-muted);
    transition: color 0.2s;
    white-space: nowrap;
}

.nav-links a:hover {
    color: var(--ink);
}

.cta-button-small {
    background: var(--accent) !important;
    color: var(--ink-inverse) !important;
    padding: 0.5rem 1.25rem !important;
    border-radius: var(--radius-btn) !important;
    font-size: 0.875rem !important;
    font-weight: 600 !important;
    transition: background 0.2s, transform 0.2s !important;
    white-space: nowrap;
}

.cta-button-small:hover {
    background: var(--accent-hover) !important;
    color: var(--ink-inverse) !important;
    transform: translateY(-1px);
}

/* Hamburger toggle */
.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
    background: none;
    border: none;
}

.nav-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--ink);
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;
}

/* ============================================================
   HERO + DEMO (merged)
   ============================================================ */
.hero-demo {
    background: var(--bg);
    padding: calc(var(--nav-height) + 72px) 0 80px;
    border-bottom: 1px solid var(--border);
}

.hero-demo-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.hero-demo-heading {
    text-align: left;
}

.hero-demo-sub {
    font-size: 1.05rem;
    color: var(--ink-muted);
    line-height: 1.75;
    margin-top: 1.25rem;
    max-width: 460px;
}

.hero-demo-form-wrap {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2rem;
}

.hero-demo-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1.5rem;
}

.hero-eyebrow {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-soft);
    border: 1px solid var(--accent-ring);
    border-radius: var(--radius-btn);
    padding: 0.35rem 1rem;
    margin-bottom: 1.75rem;
}

.hero-title {
    font-size: clamp(2.4rem, 6vw, 4.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin-bottom: 1.25rem;
    line-height: 1.1;
    font-family: var(--font-display);
}

.gradient-text {
    background: linear-gradient(135deg, var(--ink) 0%, var(--accent) 60%, var(--accent-hover) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    display: inline;
}

.hero-description {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: var(--ink-muted);
    max-width: 620px;
    margin: 0 auto 2.5rem;
    line-height: 1.75;
}

.hero-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

/* ============================================================
   BUTTONS
   ============================================================ */

/* ─── Primary CTA button (filled trust blue) ───────── */
.cta-button-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: 14px 28px;
    font-family: var(--font-body);
    font-size: var(--fs-body);
    font-weight: 600;
    letter-spacing: 0;
    color: var(--ink-inverse);
    background: var(--accent);
    border: 1px solid var(--accent);
    border-radius: var(--radius-btn);
    transition: background var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out),
                box-shadow var(--duration) var(--ease-out);
    cursor: pointer;
    text-decoration: none;
}

.cta-button-primary:hover {
    background: var(--accent-hover);
    border-color: var(--accent-hover);
    color: var(--ink-inverse);
    transform: translateY(-1px);
    box-shadow: var(--shadow-accent);
}

.cta-button-primary:active {
    transform: translateY(0);
}

/* ─── Ghost / outlined CTA button ──────────────────── */
.cta-button-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: 14px 28px;
    font-family: var(--font-body);
    font-size: var(--fs-body);
    font-weight: 600;
    letter-spacing: 0;
    color: var(--ink);
    background: transparent;
    border: 1px solid var(--ink);
    border-radius: var(--radius-btn);
    transition: background var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
    cursor: pointer;
    text-decoration: none;
}

.cta-button-ghost:hover {
    background: var(--ink);
    color: var(--ink-inverse);
    transform: translateY(-1px);
}

.cta-button-ghost:active {
    transform: translateY(0);
}

/* ─── Inverse buttons (for dark sections) ──────────── */
.cta-button-primary--inverse {
    color: var(--ink);
    background: var(--bg);
    border-color: var(--bg);
}

.cta-button-primary--inverse:hover {
    background: var(--bg-elevated);
    border-color: var(--bg-elevated);
    color: var(--ink);
}

.cta-button-ghost--inverse {
    color: var(--ink-inverse);
    border-color: var(--ink-inverse);
}

.cta-button-ghost--inverse:hover {
    background: var(--ink-inverse);
    color: var(--ink);
}

/* ============================================================
   SECTION COMMON
   ============================================================ */
.section-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.75rem;
}

.section-title {
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 1rem;
    font-family: var(--font-display);
}

.section-description {
    font-size: 1.05rem;
    color: var(--ink-muted);
    max-width: 560px;
    line-height: 1.7;
    margin-bottom: 3.5rem;
}

.section-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
}

/* ============================================================
   SERVICES
   ============================================================ */
.services {
    padding: var(--section-py) 0;
    background: var(--bg-elevated);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.services-header {
    max-width: 600px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 3.5rem;
}

.service-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2rem;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.3s;
}

.service-card:hover {
    border-color: var(--border-strong);
    box-shadow: var(--shadow);
    transform: translateY(-4px);
}

.service-card:hover::before {
    opacity: 1;
}

.service-card.featured {
    border-color: var(--accent-ring);
    background: var(--accent-soft);
}

.service-card.featured::before {
    opacity: 1;
}

.service-icon {
    width: 44px;
    height: 44px;
    background: var(--accent-soft);
    border: 1px solid var(--accent-ring);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    margin-bottom: 1.25rem;
}

.service-badge {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-soft);
    border: 1px solid var(--accent-ring);
    border-radius: var(--radius-btn);
    padding: 0.2rem 0.65rem;
    margin-bottom: 0.75rem;
    align-self: flex-start;
}

.service-card h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
}

.service-tagline {
    font-size: 0.875rem;
    color: var(--ink-muted);
    margin-bottom: 1rem;
    font-style: italic;
}

.service-card > p {
    font-size: 0.9rem;
    color: var(--ink-muted);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.service-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: auto;
}

.service-features li {
    font-size: 0.875rem;
    color: var(--ink-muted);
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.service-features li::before {
    content: '→';
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */
.how-it-works {
    padding: var(--section-py) 0;
}

.how-it-works-inner {
    display: flex;
    flex-direction: column;
    gap: 6rem;
}

.how-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
}

.how-block.reverse .how-block-visual {
    order: -1;
}

.how-block-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.75rem;
}

.how-block-title {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.75rem;
    font-family: var(--font-display);
}

.how-block-desc {
    font-size: 1rem;
    color: var(--ink-muted);
    line-height: 1.75;
    margin-bottom: 2rem;
}

.steps-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.step-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.step-num {
    width: 28px;
    height: 28px;
    min-width: 28px;
    background: var(--accent-soft);
    border: 1px solid var(--accent-ring);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--accent);
    margin-top: 2px;
}

.step-item-text h4 {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
}

.step-item-text p {
    font-size: 0.875rem;
    color: var(--ink-muted);
    line-height: 1.6;
}

.how-block-visual {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2.5rem;
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
}

.how-block-visual::after {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
    pointer-events: none;
}

.visual-headline {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-subtle);
    margin-bottom: 1.25rem;
}

.visual-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.visual-features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: var(--ink-muted);
    padding: 0.75rem 1rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
}

.visual-features li .check {
    width: 20px;
    height: 20px;
    min-width: 20px;
    background: var(--accent-soft);
    border: 1px solid var(--accent-ring);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
    color: var(--accent);
    font-weight: 700;
}

.visual-stat-block {
    text-align: center;
    padding: 1.25rem 0 1.75rem;
    border-bottom: 1px solid var(--border);
    margin-bottom: 1.5rem;
}

.visual-stat-number {
    font-family: var(--font-display);
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--ink);
    letter-spacing: -0.04em;
    line-height: 1;
}

.visual-stat-label {
    font-size: 0.875rem;
    color: var(--ink-muted);
    margin-top: 0.25rem;
}

/* ============================================================
   FINAL CTA
   ============================================================ */
.final-cta {
    padding: 120px 0;
    text-align: center;
    background: var(--bg-inverse);
    border-top: 1px solid var(--border);
    position: relative;
    overflow: hidden;
}

.final-cta::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 350px;
    background: radial-gradient(ellipse, rgba(30, 58, 138, 0.15) 0%, transparent 70%);
    pointer-events: none;
}

.final-cta-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
    position: relative;
    font-family: var(--font-display);
    color: var(--ink-inverse);
}

.final-cta-desc {
    font-size: 1.1rem;
    color: var(--ink-inverse-muted);
    margin-bottom: 2.5rem;
    position: relative;
}

.contact-info {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    position: relative;
}

.contact-info a {
    color: var(--ink-inverse-muted);
    font-size: 0.9rem;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.contact-info a:hover {
    color: var(--ink-inverse);
}

/* ============================================================
   FOOTER
   ============================================================ */
.footer {
    padding: 2.5rem 0;
    border-top: 1px solid var(--border);
    background: var(--bg-inverse);
}

.footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-logo {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 800;
    color: var(--ink-inverse);
}

.footer-links {
    display: flex;
    gap: 1.75rem;
}

.footer-links a {
    font-size: 0.85rem;
    color: var(--ink-inverse-muted);
    transition: color 0.2s;
}

.footer-links a:hover {
    color: var(--ink-inverse);
}

.footer-copy {
    font-size: 0.8rem;
    color: var(--ink-inverse-muted);
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-inverse);
}

/* ============================================================
   ANIMATIONS
   ============================================================ */
.animate-ready {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-ready.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ============================================================
   POLICY PAGES
   ============================================================ */
.policy-hero {
    padding: calc(var(--nav-height) + 64px) 0 64px;
    text-align: center;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
}

.policy-hero h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
}

.policy-hero p {
    font-size: 0.95rem;
    color: var(--ink-muted);
}

.policy-content {
    padding: 64px 0 100px;
    background: var(--bg);
}

.policy-content .inner {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 28px;
}

.policy-content p,
.policy-content li {
    font-size: 1rem;
    color: var(--ink-muted);
    line-height: 1.8;
    margin-bottom: 0.75rem;
}

.policy-content ul {
    list-style: disc;
    padding-left: 1.25rem;
    margin-bottom: 1rem;
}

.policy-content a {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 2px;
}

.policy-content a:hover {
    color: var(--accent-hover);
}

.policy-content h2 {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--ink);
    margin: 2.5rem 0 0.75rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
}

.policy-content h2:first-of-type {
    border-top: none;
    padding-top: 0;
    margin-top: 1.5rem;
}

.stop-highlight,
.opt-out-box {
    background: var(--accent-soft);
    border-left: 3px solid var(--accent);
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
    margin: 1.5rem 0;
}

.stop-highlight p,
.opt-out-box p {
    margin: 0 0 0.5rem;
}

.stop-highlight p:last-child,
.opt-out-box p:last-child {
    margin: 0;
}

.rates-box {
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    margin: 1rem 0;
}

.rates-box p {
    margin: 0;
    font-weight: 600;
    color: var(--ink-muted);
}

/* ============================================================
   DEMO FORM (shared styles)
   ============================================================ */
.demo-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--ink-muted);
}

.form-group input {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 0.75rem 1rem;
    color: var(--ink);
    font-size: 0.95rem;
    font-family: var(--font-body);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%;
}

.form-group input::placeholder {
    color: var(--ink-subtle);
}

.form-group input:focus {
    border-color: var(--accent-ring);
    box-shadow: 0 0 0 3px var(--accent-glow);
}

.form-group input.input-error {
    border-color: rgba(220, 38, 38, 0.6);
}

.field-error {
    font-size: 0.8rem;
    color: #dc2626;
    min-height: 1em;
}

.demo-submit-btn {
    width: 100%;
    margin-top: 0.5rem;
    border: none;
    cursor: pointer;
    font-family: var(--font-body);
}

.demo-submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.demo-success {
    text-align: center;
    padding: 3rem 2rem;
    background: var(--accent-soft);
    border: 1px solid var(--accent-ring);
    border-radius: var(--radius);
}

.demo-success-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.demo-success h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.demo-success p {
    color: var(--ink-muted);
    font-size: 1rem;
    line-height: 1.7;
}

/* ============================================================
   RESPONSIVE — 768px
   ============================================================ */
@media (max-width: 768px) {
    :root {
        --section-py: 64px;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: var(--nav-height);
        left: 0;
        right: 0;
        background: var(--bg-elevated);
        border-bottom: 1px solid var(--border);
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 0.5rem 0;
    }

    .nav-links.open {
        display: flex;
    }

    .nav-links a {
        padding: 0.85rem 1.5rem;
        border-radius: 0;
        border-bottom: 1px solid var(--border);
    }

    .nav-toggle {
        display: flex;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .how-block {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .how-block.reverse .how-block-visual {
        order: 0;
    }

    .hero-cta {
        flex-direction: column;
        align-items: stretch;
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
    }

    .cta-button-primary,
    .cta-button-ghost {
        text-align: center;
    }

    .contact-info {
        flex-direction: column;
        gap: 0.75rem;
    }

    .footer-inner {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-links {
        flex-wrap: wrap;
        justify-content: center;
    }

    #chat-box {
        width: calc(100vw - 40px);
        right: 20px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .hero-demo-inner {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .hero-demo-heading {
        text-align: center;
    }

    .hero-demo-sub {
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
}

/* ============================================================
   RESPONSIVE — 480px
   ============================================================ */
@media (max-width: 480px) {
    :root {
        --section-py: 48px;
    }

    .container {
        padding: 0 16px;
    }

    .hero-title {
        font-size: 2.1rem;
    }

    .section-title {
        font-size: 1.6rem;
    }

    .final-cta-title {
        font-size: 1.9rem;
    }
}

.pricing {
    padding: 100px 0;
    background: var(--bg-elevated);
}

.pricing-grid {
    margin-top: 48px;
}

.pricing-price {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--ink);
    margin: 16px 0 4px;
    font-family: var(--font-display);
}

.pricing-period {
    font-size: 1rem;
    font-weight: 400;
    color: var(--ink-subtle);
    margin-left: 2px;
}

.pricing-popular-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 4px 12px;
    border-radius: 20px;
    background: var(--accent);
    color: var(--ink-inverse);
    margin-bottom: 8px;
}

.pricing-best-value {
    background: var(--border-strong);
    color: var(--ink-muted);
}

.pricing-not-included {
    font-size: 12px;
    color: var(--ink-subtle);
    margin-top: 12px;
    margin-bottom: 4px;
    font-style: italic;
}

.pricing-cta {
    display: block;
    text-align: center;
    margin-top: 20px;
    width: 100%;
}

.pricing-addon {
    margin-top: 48px;
    border: 1px solid var(--accent-ring);
    border-radius: 16px;
    padding: 28px 32px;
    text-align: center;
    background: var(--accent-soft);
}

.pricing-addon-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 8px;
}

.pricing-addon-desc {
    font-size: 0.9rem;
    color: var(--ink-muted);
    line-height: 1.6;
}

/* ════════════════════════════════════════════════════════════════
   NAVIGATION v2 (rebrand)
   Replaces .nav-content / .logo with .nav-inner / .nav-logo
   ════════════════════════════════════════════════════════════════ */
.nav {
  background: rgba(244, 241, 235, 0.85); /* off-white, frosted */
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
  height: var(--nav-height);
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
  text-decoration: none;
}

.nav-logo:hover {
  color: var(--accent);
}

.nav .nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-7);
}

.nav .nav-links a {
  font-family: var(--font-body);
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--ink-muted);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
  white-space: nowrap;
}

.nav .nav-links a:hover {
  color: var(--ink);
}

.nav-toggle span {
  background: var(--ink);
}

/* ════════════════════════════════════════════════════════════════
   PORTFOLIO GRID HERO
   4×4 grid of 16 clickable work tiles directly below the nav.
   Full-bleed (edge-to-edge), fills viewport height below nav.
   ════════════════════════════════════════════════════════════════ */
.work-grid-hero {
  width: 100%;
  padding: var(--nav-height) 0 0 0; /* sit flush against the fixed nav */
  background: var(--bg);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  /* Fill the viewport height below the nav. */
  height: calc(100vh - var(--nav-height));
  /* Keep the wall feeling like a wall on tall monitors. */
  min-height: 640px;
  max-height: 1080px;
  gap: 1px;
  background: var(--border);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.work-tile {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--space-5);
  background: var(--bg-elevated);
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  isolation: isolate;
  transition: z-index 0s linear var(--duration);
}

/* Subtle per-tile background tints so the wall reads as "16 unique pieces"
   even before each tile gets its real screenshot/illustration. */
.work-tile[data-tile="1"]  { background: linear-gradient(135deg, #F4EFE3 0%, #E8D9B5 100%); }
.work-tile[data-tile="2"]  { background: linear-gradient(135deg, #FDF4F0 0%, #F7D9C8 100%); }
.work-tile[data-tile="3"]  { background: linear-gradient(135deg, #FDF1F1 0%, #F2C8C8 100%); }
.work-tile[data-tile="4"]  { background: linear-gradient(135deg, #1F1B1B 0%, #2A2424 100%); }
.work-tile[data-tile="5"]  { background: linear-gradient(135deg, #F0F4FA 0%, #C7D6F0 100%); }
.work-tile[data-tile="6"]  { background: linear-gradient(135deg, #F0F2E8 0%, #C9D2B0 100%); }
.work-tile[data-tile="7"]  { background: linear-gradient(135deg, #E8ECF3 0%, #B4BFD2 100%); }
.work-tile[data-tile="8"]  { background: linear-gradient(135deg, #FFF1EC 0%, #FFB59C 100%); }
.work-tile[data-tile="9"]  { background: linear-gradient(135deg, #161618 0%, #2C2C30 100%); }
.work-tile[data-tile="10"] { background: linear-gradient(135deg, #F2EBE0 0%, #C9A687 100%); }
.work-tile[data-tile="11"] { background: linear-gradient(135deg, #ECEFE6 0%, #B8C5A8 100%); }
.work-tile[data-tile="12"] { background: linear-gradient(135deg, #EEF3F7 0%, #B6CCDA 100%); }
.work-tile[data-tile="13"] { background: linear-gradient(135deg, #F5F2EC 0%, #CBC2AE 100%); }
.work-tile[data-tile="14"] { background: linear-gradient(135deg, #1A1614 0%, #2E2620 100%); }
.work-tile[data-tile="15"] { background: linear-gradient(135deg, #F4F0E6 0%, #D1C2A0 100%); }
.work-tile[data-tile="16"] { background: linear-gradient(135deg, #2A1414 0%, #4A1F1F 100%); }

/* Dark tiles get inverted label colors. */
.work-tile[data-tile="4"]  .work-tile-label,
.work-tile[data-tile="9"]  .work-tile-label,
.work-tile[data-tile="14"] .work-tile-label,
.work-tile[data-tile="16"] .work-tile-label {
  color: var(--ink-inverse);
}

.work-tile[data-tile="4"]::before,
.work-tile[data-tile="9"]::before,
.work-tile[data-tile="14"]::before,
.work-tile[data-tile="16"]::before {
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
}

/* Gradient scrim under the label so the text reads on any tile bg. */
.work-tile::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(255, 255, 255, 0.85) 100%);
  opacity: 0;
  transition: opacity var(--duration) var(--ease-out);
  z-index: 1;
  pointer-events: none;
}

.work-tile-label {
  position: relative;
  z-index: 2;
  font-family: var(--font-body);
  font-size: var(--fs-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--ink);
  transform: translateY(8px);
  opacity: 0;
  transition:
    transform var(--duration) var(--ease-out),
    opacity var(--duration) var(--ease-out);
}

/* Hover treatment — tile scales up subtly, label reveals,
   tile pops above neighbors via z-index. */
.work-tile:hover {
  z-index: 5;
  transition: z-index 0s linear 0s;
}

.work-tile:hover::before {
  opacity: 1;
}

.work-tile:hover .work-tile-label {
  transform: translateY(0);
  opacity: 1;
}

/* Slight enlarge on hover. Using transform on the tile would clip due to grid;
   instead we scale via a nested wrapper-less approach: scale the tile content. */
.work-tile {
  transition:
    transform var(--duration) var(--ease-out),
    box-shadow var(--duration) var(--ease-out),
    z-index 0s linear var(--duration);
}

.work-tile:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-lg);
}

/* Focus visible — keyboard nav accessibility */
.work-tile:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -4px;
  z-index: 5;
}

.work-tile:focus-visible .work-tile-label {
  transform: translateY(0);
  opacity: 1;
}

/* ────────────────────────────────────────────────────────────────
   Responsive — tablet (4 cols → 2 cols, 4 rows → 8 rows)
   ──────────────────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
    height: auto;
    /* On tablet the wall becomes taller than viewport — that's fine,
       user can scroll into it. Cap so it doesn't become absurd. */
    max-height: none;
    min-height: 0;
    aspect-ratio: 2 / 8;
  }
}

/* ────────────────────────────────────────────────────────────────
   Responsive — phone (2 cols → 1 col, 8 rows → 16 rows)
   ──────────────────────────────────────────────────────────────── */
@media (max-width: 540px) {
  .work-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(16, 1fr);
    aspect-ratio: 1 / 16;
  }

  .work-tile {
    padding: var(--space-4);
  }

  /* On touch devices, no hover state to reveal labels — show them always. */
  .work-tile-label {
    opacity: 1;
    transform: none;
  }

  .work-tile::before {
    opacity: 1;
  }
}

/* ────────────────────────────────────────────────────────────────
   Touch devices — show labels by default (no hover available)
   ──────────────────────────────────────────────────────────────── */
@media (hover: none) {
  .work-tile-label {
    opacity: 1;
    transform: none;
  }

  .work-tile::before {
    opacity: 0.6;
  }

  .work-tile:hover {
    transform: none;
    box-shadow: none;
  }
}

/* ────────────────────────────────────────────────────────────────
   Reduced motion — kill hover scale, keep label reveal as fade only
   ──────────────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .work-tile,
  .work-tile-label,
  .work-tile::before {
    transition: opacity var(--duration-fast) linear !important;
    transform: none !important;
  }

  .work-tile:hover {
    transform: none !important;
    box-shadow: none !important;
  }
}

/* ────────────────────────────────────────────────────────────────
   Container variant — narrow for editorial sections
   ──────────────────────────────────────────────────────────────── */
.container--narrow {
  max-width: var(--content-width-narrow);
}
```

### privacy-policy/index.html (110 lines)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy | Abython</title>
    <meta name="description" content="Abython Privacy Policy - How we collect, use, and protect your personal information.">
    <link rel="stylesheet" href="../styles.css">
</head>
<body>

    <!-- Navigation -->
    <nav class="nav">
        <div class="container">
            <div class="nav-content">
                <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="nav-links" id="nav-links">
                    <a href="../#services">Services</a>
                    <a href="../#how-it-works">How It Works</a>
                    <a href="../#contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="policy-hero">
        <div class="container">
            <h1>Privacy Policy</h1>
            <p>Effective Date: March 5, 2026</p>
        </div>
    </section>

    <!-- Content -->
    <section class="policy-content">
        <div class="inner">

            <p>Abython ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard personal information in connection with our lead reactivation and appointment scheduling services.</p>

            <h2>Information We Collect</h2>
            <p>We may collect the following personal information about clients of the home service businesses we work with:</p>
            <ul>
                <li>First name and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Physical address</li>
            </ul>
            <p>This information is provided to us by our business clients, including HVAC, plumbing, and roofing companies, as well as fitness and martial arts studios, for the purpose of lead reactivation and appointment scheduling.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the personal information we collect solely to:</p>
            <ul>
                <li>Contact individuals on behalf of the relevant home service business to schedule or follow up on service appointments</li>
                <li>Send SMS messages and make calls as part of a lead reactivation campaign authorized by the service provider</li>
                <li>Deliver appointment confirmations and related service communications</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information is used exclusively to facilitate communication between you and the home service company that originally collected your contact details.</p>
            <p>We do not use your information for any purpose beyond the services described in this policy.</p>

            <h2>Data Security</h2>
            <p>We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, or misuse. Access to personal data is restricted to authorized personnel who need it to perform their job functions.</p>

            <h2>SMS Communications &amp; Opt-Out</h2>
            <div class="stop-highlight">
                <p>To opt out of SMS messages at any time, simply reply <strong>STOP</strong> to any text message you receive from us. After opting out, you will receive no further SMS messages. For help, reply <strong>HELP</strong> or contact us at the information below.</p>
            </div>
            <p>Message and data rates may apply. Message frequency varies.</p>
            <p>This includes SMS campaigns operated on behalf of clients such as Mission MMA &amp; Fitness (West Loop, Chicago, IL).</p>
            <p>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>

            <h2>Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal information. To make such a request, please contact us using the information below.</p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how your data is handled, please reach out:</p>
            <ul>
                <li>Email: <a href="mailto:owner@abython.com">owner@abython.com</a></li>
                <li>Phone: <a href="tel:+18476369074">(847) 636-9074</a></li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-inner">
                <span class="footer-logo">Abython</span>
                <nav class="footer-links">
                    <a href="/privacy-policy/">Privacy Policy</a>
                    <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
                    <a href="mailto:owner@abython.com">Contact</a>
                </nav>
            </div>
            <p class="footer-copy">&copy; 2026 Abython &mdash; AI Receptionist &amp; Custom Websites</p>
        </div>
    </footer>

    <script src="../script.js"></script>
</body>
</html>
```

### terms-and-conditions/index.html (110 lines)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms &amp; Conditions | Abython</title>
    <meta name="description" content="Abython Terms and Conditions - SMS messaging program details, opt-out instructions, and usage terms.">
    <link rel="stylesheet" href="../styles.css">
</head>
<body>

    <!-- Navigation -->
    <nav class="nav">
        <div class="container">
            <div class="nav-content">
                <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="nav-links" id="nav-links">
                    <a href="../#services">Services</a>
                    <a href="../#how-it-works">How It Works</a>
                    <a href="../#contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="policy-hero">
        <div class="container">
            <h1>Terms &amp; Conditions</h1>
            <p>Effective Date: March 5, 2026</p>
        </div>
    </section>

    <!-- Content -->
    <section class="policy-content">
        <div class="inner">

            <p>These Terms &amp; Conditions govern your participation in SMS communications sent by or on behalf of Abython. By receiving messages from our program, you agree to these terms.</p>

            <h2>Program Name</h2>
            <p>Abython SMS Notifications (including Mission MMA &amp; Fitness)</p>

            <h2>Program Description</h2>
            <p>Abython uses SMS messaging to reactivate cold leads and book service appointments on behalf of home service businesses, including HVAC, plumbing, and roofing companies. Messages may include:</p>
            <ul>
                <li>Follow-up communications regarding previous service inquiries or estimates</li>
                <li>Appointment reminders and scheduling confirmations</li>
                <li>Promotional offers from the relevant home service provider</li>
            </ul>
            <p>All SMS communications are sent on behalf of Abython's business clients. You are receiving these messages because you previously inquired about or requested a quote from one of our client businesses.</p>
            <p>For fitness and martial arts studio clients, messages may include: trial class follow-ups for prospective students, class schedule reminders, enrollment promotions, and appointment confirmations.</p>

            <h2>Message &amp; Data Rates</h2>
            <div class="rates-box">
                <p>Message and data rates may apply. Contact your wireless carrier for details about your plan.</p>
            </div>

            <h2>Message Frequency</h2>
            <div class="rates-box">
                <p>Message frequency varies. You may receive up to 4 messages per month.</p>
            </div>

            <h2>Opt-Out Instructions</h2>
            <div class="opt-out-box">
                <p>To stop receiving SMS messages at any time, reply <strong>STOP</strong> to any message. You will receive a one-time confirmation and no further messages will be sent.</p>
                <p>For help or more information, reply <strong>HELP</strong> to any message or contact us directly using the information below.</p>
                <p>Mobile opt-in data and consent will never be shared with third parties or affiliates for marketing or promotional purposes.</p>
            </div>

            <h2>Carrier Disclaimer</h2>
            <p>Carriers are not liable for any delayed or undelivered messages.</p>

            <h2>Support &amp; Contact</h2>
            <p>If you have questions about these terms or need assistance, please contact us:</p>
            <ul>
                <li>Email: <a href="mailto:owner@abython.com">owner@abython.com</a></li>
                <li>Phone: <a href="tel:+18476369074">(847) 636-9074</a></li>
            </ul>

            <h2>Privacy</h2>
            <p>Your personal information is handled in accordance with our <a href="/privacy-policy/">Privacy Policy</a>. We do not sell or share your information with third parties for marketing purposes.</p>

            <h2>Changes to These Terms</h2>
            <p>We may update these Terms &amp; Conditions from time to time. Changes will be posted on this page with an updated effective date.</p>

        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-inner">
                <span class="footer-logo">Abython</span>
                <nav class="footer-links">
                    <a href="/privacy-policy/">Privacy Policy</a>
                    <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
                    <a href="mailto:owner@abython.com">Contact</a>
                </nav>
            </div>
            <p class="footer-copy">&copy; 2026 Abython &mdash; AI Receptionist &amp; Custom Websites</p>
        </div>
    </footer>

    <script src="../script.js"></script>
</body>
</html>
```

### ai-receptionist/index.html (170 lines)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Try the AI Receptionist Live | Abython</title>
    <meta name="description" content="Get a call from Abython's AI receptionist in under 60 seconds. Experience exactly what your callers will hear before you commit.">
    <link rel="stylesheet" href="/styles.css">
</head>
<body>

  <!-- ════════════════════════════════════════════════════════════════
       NAVIGATION
       ════════════════════════════════════════════════════════════════ -->
  <nav class="nav" id="primary-nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo">Abython</a>

      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" id="nav-links">
        <a href="/#work">Work</a>
        <a href="/#services">Services</a>
        <a href="/ai-receptionist" aria-current="page">AI Receptionist</a>
        <a href="/google-business-profile">GBP</a>
        <a href="/seo-and-aio">SEO + AIO</a>
        <a href="/#contact">Contact</a>
      </div>
    </div>
  </nav>

  <!-- ════════════════════════════════════════════════════════════════
       DEMO — Try It Free — Hear It Live
       Form HTML preserved verbatim from homepage so the demo form IIFE
       in script.js continues to work without changes.
       ════════════════════════════════════════════════════════════════ -->
  <main style="padding-top: var(--nav-height);">
    <section class="demo-section" id="demo" aria-label="Try the AI receptionist live">
      <div class="container container--narrow">
        <header class="section-head animate-ready">
          <p class="eyebrow">Try it free — hear it live</p>
          <h2 class="section-title">Get a call from our AI receptionist in under 60 seconds.</h2>
          <p class="lead">
            Fill out the form below and our AI receptionist will call your phone within a minute —
            experience exactly what your callers will hear.
          </p>
        </header>

        <div class="demo-form-wrap animate-ready">
          <form id="demo-form" class="demo-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label for="demo-first-name">First Name</label>
                <input type="text" id="demo-first-name" name="firstName" placeholder="Jane" autocomplete="given-name">
                <span class="field-error" id="error-firstName"></span>
              </div>
              <div class="form-group">
                <label for="demo-last-name">Last Name</label>
                <input type="text" id="demo-last-name" name="lastName" placeholder="Smith" autocomplete="family-name">
                <span class="field-error" id="error-lastName"></span>
              </div>
            </div>
            <div class="form-group">
              <label for="demo-email">Email</label>
              <input type="email" id="demo-email" name="email" placeholder="jane@company.com" autocomplete="email">
              <span class="field-error" id="error-email"></span>
            </div>
            <div class="form-group">
              <label for="demo-phone">Phone Number</label>
              <input type="tel" id="demo-phone" name="phone" placeholder="(555) 000-0000" autocomplete="tel">
              <span class="field-error" id="error-phone"></span>
            </div>

            <p class="demo-form-disclosure">
              By providing your phone number, you agree to receive SMS messages from Abython regarding class information,
              appointment reminders, trial scheduling, and promotional offers. Message frequency varies. Msg &amp; Data Rates
              May Apply. Mobile opt-in data and consent will never be shared with third parties or affiliates for marketing
              or promotional purposes. Reply STOP to unsubscribe or HELP for assistance. View our
              <a href="/privacy-policy/">Privacy Policy</a> and <a href="/terms-and-conditions/">Terms</a>.
            </p>

            <label class="demo-form-consent" for="sms-consent">
              <input type="checkbox" id="sms-consent" name="smsConsent">
              <span>Yes, I'd like to receive SMS updates from Abython (optional)</span>
            </label>

            <button type="submit" class="cta-button-primary demo-submit-btn" id="demo-submit">
              Request My Demo Call
            </button>

            <p class="demo-form-footer">
              You may also opt in to SMS updates by texting JOIN, START, INFO, or YES to (847) 636-9074.
            </p>
          </form>

          <div class="demo-success" id="demo-success" hidden>
            <div class="demo-success-icon">📞</div>
            <h3>You're all set.</h3>
            <p>You'll receive a call shortly from our AI receptionist. Have your phone nearby.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ════════════════════════════════════════════════════════════════
       FOOTER
       ════════════════════════════════════════════════════════════════ -->
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <span class="footer-logo">Abython</span>
        <nav class="footer-links" aria-label="Footer">
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
          <a href="mailto:owner@abython.com">Contact</a>
        </nav>
      </div>
      <p class="footer-copy">&copy; 2026 Abython — Websites that book appointments.</p>
    </div>
  </footer>

  <!-- ════════════════════════════════════════════════════════════════
       CHAT WIDGET
       ════════════════════════════════════════════════════════════════ -->
  <style>
  #chat-widget{position:fixed;bottom:20px;right:20px;z-index:9999}
  #chat-btn{width:56px;height:56px;border-radius:50%;background:var(--accent);border:none;cursor:pointer;color:#fff;font-size:26px;box-shadow:0 4px 16px var(--accent-glow);transition:transform 0.3s,background 0.2s}
  #chat-btn:hover{transform:scale(1.1);background:var(--accent-hover)}
  #chat-box{position:fixed;bottom:88px;right:20px;width:380px;height:540px;background:var(--bg-elevated);border:1px solid var(--border);border-radius:16px;box-shadow:var(--shadow-lg);display:none;flex-direction:column;overflow:hidden}
  #chat-header{background:var(--accent-soft);border-bottom:1px solid var(--border);color:var(--ink);padding:18px 20px;font-weight:600;font-family:var(--font-body);font-size:0.95rem}
  #chat-msgs{flex:1;overflow-y:auto;padding:16px;background:var(--bg);display:flex;flex-direction:column;gap:10px}
  .msg{padding:10px 14px;border-radius:16px;max-width:82%;word-wrap:break-word;font-size:0.9rem;line-height:1.5}
  .user-msg{background:var(--accent);color:#fff;margin-left:auto;border-bottom-right-radius:4px}
  .bot-msg{background:var(--bg-elevated);color:var(--ink);border:1px solid var(--border);border-bottom-left-radius:4px}
  .error-msg{background:#fef2f2;color:#dc2626;border:1px solid rgba(220,38,38,0.2)}
  #chat-input-area{padding:12px;display:flex;gap:8px;border-top:1px solid var(--border);background:var(--bg-elevated)}
  #chat-inp{flex:1;padding:10px 14px;background:var(--bg);border:1px solid var(--border);border-radius:24px;outline:none;color:var(--ink);font-size:0.875rem;font-family:inherit}
  #chat-inp::placeholder{color:var(--ink-subtle)}
  #chat-inp:focus{border-color:var(--accent-ring)}
  #chat-send{padding:10px 16px;background:var(--accent);color:#fff;border:none;border-radius:24px;cursor:pointer;font-weight:600;font-size:0.875rem;transition:background 0.2s}
  #chat-send:hover{background:var(--accent-hover)}
  @media(max-width:768px){#chat-box{width:calc(100vw - 40px);right:20px}}
  </style>
  <div id="chat-widget">
    <button id="chat-btn">💬</button>
    <div id="chat-box">
      <div id="chat-header">Chat with Abython</div>
      <div id="chat-msgs"></div>
      <div id="chat-input-area">
        <input id="chat-inp" type="text" placeholder="Type your message...">
        <button id="chat-send">Send</button>
      </div>
    </div>
  </div>

  <!-- ════════════════════════════════════════════════════════════════
       SCRIPTS
       ════════════════════════════════════════════════════════════════ -->
  <script src="https://unpkg.com/lenis@1.3.8/dist/lenis.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="/chat.js"></script>
  <script src="/script.js"></script>
</body>
</html>
```

## Project Status

The Abython.com website is mid-rebrand (~7 of ~37 prompts complete). The structural foundation is in place — design tokens, animation libraries, homepage skeleton, and portfolio grid hero. Individual sections and the 16 fake portfolio sites will be built in subsequent prompts.

**Live URL:** https://abython.com  
**Hosting:** Vercel (migrated from Netlify — `netlify.toml` deleted, `vercel.json` is the config)  
**Stack:** Pure HTML / CSS / JS. No framework. No build step. Deployed directly.

---

## File Structure (current state)

```
Abython.com/
├── CLAUDE.md                     ← Canonical project context — read first every session
├── PLAN.md                       ← Living plan + prompt roadmap + future tasks
├── HANDOFF.md                    ← This file — updated on every GitHub push
├── vercel.json                   ← Security headers + CSP (replaced netlify.toml)
├── index.html                    ← Homepage (rebrand skeleton — 298 lines)
├── styles.css                    ← All styles (1,703 lines, design tokens live here)
├── script.js                     ← Nav + scroll animations + demo form IIFE (212 lines)
├── chat.js                       ← Chat widget IIFE
├── ai-receptionist/
│   └── index.html                ← Demo form lives here (moved from homepage, Prompt 8)
├── google-business-profile/      ← PLANNED — not yet created
├── seo-and-aio/                  ← PLANNED — not yet created
├── web-design/                   ← PLANNED — not yet created
├── work/                         ← PLANNED (Prompts 9–28) — not yet created
├── privacy-policy/
│   └── index.html                ← Existing, will be restyled
└── terms-and-conditions/
    └── index.html                ← Existing, will be restyled
```

**What doesn't exist yet:** Service subpages (`/google-business-profile/`, `/seo-and-aio/`, `/web-design/`), the `/work/` portfolio index, and all 16 fake portfolio sites are planned but not yet created. (`/ai-receptionist/` is now live.) Clicking any portfolio tile on the homepage currently 404s — that's expected.

---

## Design System

The rebrand uses a completely new design system from the original site. The old dark purple theme is gone.

### Palette (locked tokens in `styles.css` `:root`)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F4F1EB` | Off-white base — dominant page color |
| `--bg-elevated` | `#FFFFFF` | Cards, elevated surfaces |
| `--bg-inverse` | `#0A0A0A` | Dark sections (final CTA, footer) |
| `--ink` | `#0A0A0A` | Primary text |
| `--ink-muted` | `#525252` | Secondary text |
| `--ink-subtle` | `#A3A3A3` | Captions, tertiary |
| `--ink-inverse` | `#F4F1EB` | Text on dark bg |
| `--accent` | `#1E3A8A` | Trust blue — primary brand color |
| `--accent-hover` | `#2952B5` | Hover state |
| `--accent-soft` | `#E8EDF9` | Tinted bg for badges, highlights |
| `--accent-glow` | `rgba(30,58,138,0.22)` | Shadows, glows |
| `--border` | `rgba(10,10,10,0.08)` | Default borders |
| `--border-strong` | `rgba(10,10,10,0.16)` | Hover/emphasis borders |

### Typography

- **Display/headings:** `'Fraunces', Georgia, serif` — loaded from Google Fonts
- **Body/UI:** `'Inter Tight', system-ui, sans-serif` — loaded from Google Fonts
- **Mono:** `'JetBrains Mono', monospace` (used sparingly)

### Key spacing tokens

| Token | Value |
|-------|-------|
| `--nav-height` | `72px` |
| `--content-width` | `1280px` |
| `--content-width-narrow` | `920px` |
| `--section-py` | `120px` |
| `--radius-btn` | `9999px` (pill) |
| `--radius` | `16px` |

---

## index.html — Current Structure

The homepage skeleton is in place. Sections have HTML and class names but most section-specific styles aren't written yet — they'll come in later prompts.

### `<head>`
- Loads Google Fonts (Fraunces + Inter Tight)
- Loads `styles.css`
- No other stylesheets or framework scripts

### Navigation (`.nav` / `#primary-nav`)
- Fixed top, 72px height, frosted off-white (`rgba(244,241,235,0.85)` + `blur(14px)`)
- New structure: `.nav-inner` (flex container) with `.nav-logo` (wordmark) on left, `#nav-links` on right
- Nav links: Work, Services, AI Receptionist, GBP, SEO + AIO, Contact
- Hamburger `#nav-toggle` → toggles `.open` on `#nav-links` (mobile)

### Portfolio Grid Hero (`.work-grid-hero` / `#work`)
- Full-bleed 4×4 grid of 16 `.work-tile` elements
- Each tile has a unique gradient background (`data-tile="1"` through `data-tile="16"`)
- Hover: tile scales 1.03×, label fades + slides up, scrim appears
- Dark tiles (4, 9, 14, 16) use inverted scrim + `--ink-inverse` label color
- Responsive: 2-col at ≤900px, 1-col at ≤540px; labels always visible on touch devices
- Click → opens `/work/{slug}` in new tab (all 404 until Prompts 13–28)

### Statement Section (`.statement` / `#statement`)
- Placeholder copy: "We build, manage, and grow websites that actually book appointments."
- Final copy comes in Prompt 29

### Services Section (`.services` / `#services`)
- 4 cards (`.service-card`): Web Design, SEO + AIO, GBP, AI Receptionist
- Each has `.service-card-num`, `h3`, `.service-card-body`, `.service-card-link`
- Full content + SEO/AIO explainer comes in Prompt 30

### Managed Section (`.managed` / `#managed`)
- "We don't ship a website and disappear." differentiator
- Placeholder copy, real content in Prompt 31

### Final CTA (`.final-cta` / `#contact`)
- Calendly booking button → `https://calendly.com/owner-abython/new-meeting`
- Phone + email contact links
- Polish in Prompt 33

### Footer (`.footer`)
- Wordmark left, legal nav right, copyright line

### Chat Widget
- Inline `<style>` block + `#chat-widget` div (tokens updated to rebrand palette)
- Logic in `chat.js`
- Restyled in Prompt 34

### Script load order (end of `<body>`)
1. `https://unpkg.com/lenis@1.3.8/dist/lenis.min.js`
2. `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
3. `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`
4. `chat.js`
5. `script.js`

---

## ai-receptionist/index.html — Current Structure

The page lives at `/ai-receptionist/` and contains the VAPI demo form, moved from the homepage in Prompt 8. It is a fully self-contained standalone page:

- Loads `/styles.css` (root-absolute — no `../` paths)
- Nav identical to homepage, but in-page anchor links point back: `/#work`, `/#services`, `/#contact`
- `<main style="padding-top: var(--nav-height);">` prevents the fixed nav from overlapping content
- Contains the demo form verbatim: `#demo-form`, `#demo-success`, all field IDs, same webhook
- `script.js`'s demo IIFE auto-detects the form with `if (!form) return;` — it no-ops on the homepage and fires on this page
- Loads `/chat.js` and `/script.js` (root-absolute)
- Chat widget, footer, and script load order identical to homepage

---

## script.js — Current Structure (212 lines)

### 1. Lenis-aware anchor scroll handler (lines 1–27)
Intercepts `a[href^="#"]` clicks. Uses `window.lenis.scrollTo()` if Lenis is initialized, falls back to native `window.scrollTo`. Closes mobile nav on click.

### 2. Mobile nav toggle (lines 29–44)
`#nav-toggle` click → toggles `.open` on `#nav-links`. Click-outside listener closes it.

### 3. `initScrollAnimations()` function (lines 46–85)
Replaces the old IntersectionObserver. Uses GSAP ScrollTrigger:
- Checks `prefers-reduced-motion` first — if reduced, shows all `.animate-ready` elements immediately
- Falls back gracefully if GSAP/ScrollTrigger failed to load
- Each `.animate-ready` element gets: `opacity: 0, y: 24` → `opacity: 1, y: 0`, `duration: 0.8`, `ease: 'power3.out'`, `start: 'top 88%'`

### 4. Demo form IIFE (lines 87–163) — **LOCKED, DO NOT MODIFY**
```js
var WEBHOOK_URL = 'https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c';
// Authorization: 'Bearer abython_xK9#mP2$vQ7nL4wR'
```
Validates fields → POST to n8n → VAPI outbound call. See locked API contracts in CLAUDE.md Section 2.

### 5. Lenis + GSAP init IIFE (lines 165–212)
Boots Lenis with `{ lerp: 0.08, wheelMultiplier: 1.2, smoothWheel: true }`. Exposes instance as `window.lenis`. Syncs with GSAP ticker via `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker.add(...)`. Skips Lenis entirely if `prefers-reduced-motion`. Falls back to RAF loop if GSAP not available. Calls `initScrollAnimations()` after boot.

---

## chat.js — Unchanged from original

Single IIFE. Key variables:
- `var url = 'https://abython.app.n8n.cloud/webhook/squarespace-chat'` (legacy name — do not rename)
- `sid`: session ID for conversation continuity
- `msgc`: message count

**Flow:** toggle open → send message → POST `{sessionId, message, userData, messageCount}` → receive `{success, botResponse, sessionId, messageCount}` → append to `#chat-msgs`.

**Note:** The duplicate chat init bug documented in the original HANDOFF.md has been confirmed resolved — the `chat.js` IIFE does NOT exist inside `script.js`. Both files are distinct.

---

## vercel.json — Security Headers

Replaces the deleted `netlify.toml`. Applied to all routes (`"source": "/(.*)"` and `"source": "/"`).

**CSP key directives:**
- `connect-src`: `'self' https://abython.app.n8n.cloud` — required for demo form + chat widget
- `script-src`: `'self' https://unpkg.com https://cdnjs.cloudflare.com` — required for Lenis + GSAP CDNs
- `font-src`: `https://fonts.gstatic.com`
- `style-src`: `'self' https://fonts.googleapis.com 'unsafe-inline'`
- `frame-ancestors`: `'none'`

**Do not remove any of these without updating the script/font/connect sources to match.**

---

## styles.css — Block Map (1,703 lines)

| Lines | Block |
|-------|-------|
| 1–6 | Comment header + Google Fonts `@import` |
| 8–23 | Reset (`box-sizing`, `html` base) |
| 25–117 | Design tokens (`:root`) |
| 119–257 | Base element styles (body, headings, links, buttons, inputs) |
| 259–349 | Navigation v1 (`.nav-content`, `.logo` — old selectors, harmless) |
| 350–442 | Hero + Demo (old layout — `.hero-demo`, `.hero-title`, `.gradient-text`) |
| 443–535 | Buttons (`.cta-button-primary`, `.cta-button-ghost`, inverse variants) |
| 536–568 | Section common (`.section-label`, `.section-title`, `.section-description`) |
| 570–703 | Services section |
| 705–878 | How It Works section (old layout) |
| 879–990 | Final CTA + Footer |
| 992–1004 | Animations (`.animate-ready` / `.visible`) |
| 1006–1110 | Policy pages |
| 1111–1209 | Demo form (shared styles) |
| 1210–1311 | Responsive 768px breakpoint |
| 1312–1336 | Responsive 480px breakpoint |
| 1337–1416 | Pricing section (old layout) |
| 1417–1476 | **Nav v2** (`.nav-inner`, `.nav-logo`, scoped `.nav .nav-links`) |
| 1477–1700 | **Portfolio grid hero** (`.work-grid-hero`, `.work-grid`, `.work-tile`, tile gradients, hover, responsive, reduced-motion) |
| 1701–1703 | **`.container--narrow`** |

**Note:** Old layout blocks (How It Works, Pricing, hero-demo) still exist in the CSS — they target HTML that was removed in the rebrand. They are harmless dead code and will be cleaned up in a later prompt.

---

## Live API Integrations (locked — do not modify)

| Integration | Endpoint / ID | Used by |
|-------------|---------------|---------|
| Demo form webhook | `https://abython.app.n8n.cloud/webhook/e4df1cc2-8d07-4e72-a86a-df1a13b10f2c` | `script.js` demo IIFE |
| Chat widget webhook | `https://abython.app.n8n.cloud/webhook/squarespace-chat` | `chat.js` |
| VAPI Demo Assistant | `d3e8bd04-1720-4eff-aa56-2e04f5b664ed` | Triggered by n8n after form submit |
| Calendly booking | `https://calendly.com/owner-abython/new-meeting` | Final CTA, all "Book" buttons |

---

## Critical HTML IDs (referenced by script.js)

| ID | Element |
|----|---------|
| `#demo-form` | Demo form element |
| `#demo-first-name` / `name="firstName"` | First name input |
| `#demo-last-name` / `name="lastName"` | Last name input |
| `#demo-email` / `name="email"` | Email input |
| `#demo-phone` / `name="phone"` | Phone input |
| `#sms-consent` / `name="smsConsent"` | SMS consent checkbox |
| `#demo-submit` | Submit button (disabled during fetch) |
| `#demo-success` | Success state div (`hidden` by default) |
| `#error-firstName/lastName/email/phone` | Field error spans |
| `#nav-toggle` | Hamburger button |
| `#nav-links` | Nav links container (gets `.open` on mobile) |
| `#chat-btn` | Chat toggle button |
| `#chat-box` | Chat window |
| `#chat-msgs` | Message scroll area |
| `#chat-inp` | Chat text input |
| `#chat-send` | Chat send button |

---

## Known Issues / Technical Debt

1. **Auth token in client-side JS** — `Authorization: Bearer abython_xK9#mP2$vQ7nL4wR` is plaintext in `script.js`. Known, accepted for now. Migration to Vercel serverless function is a post-launch priority documented in `PLAN.md`.
2. **Weak email validation** — demo form only checks non-empty, no regex. Acceptable until QA pass.
3. **Dead CSS blocks** — old layout styles (How It Works, Pricing, hero-demo) remain in `styles.css` targeting removed HTML. Scheduled for cleanup.
4. **Portfolio tiles 404** — all 16 `/work/{slug}` pages return 404. Expected — portfolio sites built in Prompts 13–28.
5. **HANDOFF.md size** — Embedding full file contents makes this file large. That is intentional. It exists so that any Claude session (including ones without filesystem access to the repo) can read this single file and have complete context.

---

## What's Next (Prompts 8–12)

- **Prompt 8 — DONE** — Created `/ai-receptionist/index.html`, moved demo form off homepage
- **Prompt 9** — Create `/work/index.html` (portfolio index grid)
- **Prompt 10** — Create `/google-business-profile/index.html` (placeholder)
- **Prompt 11** — Create `/seo-and-aio/index.html` (placeholder)
- **Prompt 12** — Create `/web-design/index.html` (placeholder)
- **Prompts 13–28** — Build all 16 fake portfolio sites
