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
        const isOpen = navLinks.classList.contains('open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// IntersectionObserver scroll reveals — replaces GSAP ScrollTrigger
function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Stagger siblings within the same parent section
  function getStaggerDelay(el) {
    const section = el.closest('section, .svc-body, .work-listing');
    if (!section) return 0;
    const siblings = Array.from(section.querySelectorAll('.reveal-ready, [data-animate="card"], [data-animate="heading"]'));
    const idx = siblings.indexOf(el);
    return Math.max(0, idx) * 80; // 80ms per item
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = getStaggerDelay(entry.target);
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-ready, [data-animate="card"], [data-animate="heading"]').forEach(el => {
    observer.observe(el);
  });
}

// Page load sequence — nav slides down on first paint
function initPageLoad() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const nav = document.getElementById('primary-nav');
  if (!nav) return;
  nav.style.opacity = '0';
  nav.style.transform = 'translateY(-20px)';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      nav.style.transition = 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s';
      nav.style.opacity = '1';
      nav.style.transform = 'translateY(0)';
    });
  });
}

// Subtle parallax on Section A (dot texture background shifts at 0.3× scroll)
function initParallax() {
  const target = document.querySelector('.section-craft');
  if (!target) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        target.style.backgroundPositionY = (window.scrollY * 0.3) + 'px';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Demo Request Form — LOCKED: do not modify POST logic or auth header
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
        btn.textContent = 'Sending…';

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
(function initSmoothScroll() {
  function boot() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion && typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.08,
        wheelMultiplier: 1.2,
        smoothWheel: true,
      });

      window.lenis = lenis;

      if (typeof gsap !== 'undefined') {
        if (typeof ScrollTrigger !== 'undefined') {
          lenis.on('scroll', ScrollTrigger.update);
        }
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    }

    // Init reveal system, page load animation, parallax
    initReveal();
    initPageLoad();
    initParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
