/* === MIDWESTERN IV — script.js === */

var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────
   FadingVideo — rAF-driven crossfade, no CSS
   transitions on video elements.
───────────────────────────────────────────── */
var FADE_MS = 500;
var FADE_OUT_LEAD_SEC = 0.55;

function FadingVideo(videoEl) {
  this.v = videoEl;
  this.rafId = null;
  this.fadingOut = false;

  if (reducedMotion) {
    this.v.style.opacity = '1';
    this.v.setAttribute('loop', '');
    return;
  }

  this.v.style.opacity = '0';
  this._bindEvents();
}

FadingVideo.prototype.fadeTo = function (target, duration) {
  var self = this;
  if (self.rafId !== null) {
    cancelAnimationFrame(self.rafId);
    self.rafId = null;
  }
  var startTime = null;
  var from = parseFloat(self.v.style.opacity) || 0;

  function step(now) {
    if (startTime === null) startTime = now;
    var elapsed = now - startTime;
    var t = Math.min(elapsed / duration, 1);
    self.v.style.opacity = String(from + (target - from) * t);
    if (t < 1) {
      self.rafId = requestAnimationFrame(step);
    } else {
      self.rafId = null;
      self.v.style.opacity = String(target);
    }
  }

  self.rafId = requestAnimationFrame(step);
};

FadingVideo.prototype._bindEvents = function () {
  var self = this;

  self.v.addEventListener('loadeddata', function () {
    self.v.style.opacity = '0';
    self.v.play().catch(function () {});
    self.fadeTo(1, FADE_MS);
  });

  self.v.addEventListener('timeupdate', function () {
    var duration = self.v.duration;
    if (!duration || isNaN(duration)) return;
    var rem = duration - self.v.currentTime;
    if (!self.fadingOut && rem <= FADE_OUT_LEAD_SEC && rem > 0) {
      self.fadingOut = true;
      self.fadeTo(0, FADE_MS);
    }
  });

  self.v.addEventListener('ended', function () {
    self.v.style.opacity = '0';
    setTimeout(function () {
      self.v.currentTime = 0;
      self.v.play().catch(function () {});
      self.fadingOut = false;
      self.fadeTo(1, FADE_MS);
    }, 100);
  });
};

/* ─────────────────────────────────────────────
   BlurText — word-by-word blur-in on intersection
───────────────────────────────────────────── */
function blurTextOnIntersect(el) {
  if (reducedMotion) return;

  var words = el.textContent.trim().split(' ');
  var html = words.map(function (word, i) {
    return '<span class="blur-word" style="animation-delay:' + (i * 100) + 'ms">' + word + '</span>';
  }).join(' ');

  el.innerHTML = html;
  el.classList.add('blur-text-parent');

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        el.classList.add('blur-in-active');
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  obs.observe(el);
}

/* ─────────────────────────────────────────────
   Mobile Sheet — focus trap + stagger delays
───────────────────────────────────────────── */
var hamburger = document.getElementById('nav-hamburger');
var sheet = document.getElementById('mobile-sheet');
var backdrop = document.getElementById('sheet-backdrop');
var closeBtn = document.getElementById('sheet-close');

var FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
var sheetOpen = false;

function openSheet() {
  sheetOpen = true;
  sheet.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute('aria-expanded', 'true');
  sheet.removeAttribute('aria-hidden');

  var links = sheet.querySelectorAll('.sheet-link');
  links.forEach(function (link, i) {
    link.style.transitionDelay = (0.18 + i * 0.07) + 's';
  });

  setTimeout(function () {
    var first = sheet.querySelector(FOCUSABLE);
    if (first) first.focus();
  }, 50);

  document.addEventListener('keydown', handleSheetKeydown);
}

function closeSheet() {
  sheetOpen = false;
  sheet.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
  sheet.setAttribute('aria-hidden', 'true');

  var links = sheet.querySelectorAll('.sheet-link');
  links.forEach(function (link) {
    link.style.transitionDelay = '0s';
  });

  hamburger.focus();
  document.removeEventListener('keydown', handleSheetKeydown);
}

function handleSheetKeydown(e) {
  if (e.key === 'Escape') {
    closeSheet();
    return;
  }
  if (e.key !== 'Tab') return;

  var focusable = Array.from(sheet.querySelectorAll(FOCUSABLE));
  if (!focusable.length) return;

  var first = focusable[0];
  var last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

if (hamburger) {
  hamburger.addEventListener('click', function () {
    if (sheetOpen) closeSheet(); else openSheet();
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeSheet);
}

if (backdrop) {
  backdrop.addEventListener('click', closeSheet);
}

/* Close sheet when a nav link inside it is clicked */
if (sheet) {
  sheet.querySelectorAll('.sheet-link').forEach(function (link) {
    link.addEventListener('click', closeSheet);
  });
  sheet.querySelectorAll('.sheet-cta-primary, .sheet-cta-secondary').forEach(function (btn) {
    btn.addEventListener('click', closeSheet);
  });
}

/* ─────────────────────────────────────────────
   FAQ Accordion — event delegation
───────────────────────────────────────────── */
var faqContainer = document.getElementById('faq-container');

if (faqContainer) {
  faqContainer.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq-question');
    if (!btn) return;

    var item = btn.closest('.faq-item');
    if (!item) return;

    var isOpen = item.classList.contains('faq-item-open');

    /* Close all open items */
    faqContainer.querySelectorAll('.faq-item-open').forEach(function (openItem) {
      openItem.classList.remove('faq-item-open');
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    /* Toggle clicked item */
    if (!isOpen) {
      item.classList.add('faq-item-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ─────────────────────────────────────────────
   Init on DOMContentLoaded
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* FadingVideo — attach to all data-fading-video elements */
  document.querySelectorAll('video[data-fading-video]').forEach(function (v) {
    new FadingVideo(v);
  });

  /* BlurText — attach to all data-blur-text elements */
  document.querySelectorAll('[data-blur-text]').forEach(function (el) {
    blurTextOnIntersect(el);
  });

  /* Sheet aria-hidden default */
  if (sheet) {
    sheet.setAttribute('aria-hidden', 'true');
  }

});
