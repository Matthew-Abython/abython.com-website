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
