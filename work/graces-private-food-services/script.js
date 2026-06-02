/* === GRACES PRIVATE FOOD SERVICES — script.js === */

var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────
   Mobile Sheet
───────────────────────────────────────────── */
var hamburger = document.getElementById('nav-hamburger');
var sheet     = document.getElementById('mobile-sheet');
var backdrop  = document.getElementById('sheet-backdrop');
var closeBtn  = document.getElementById('sheet-close');

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
  if (e.key === 'Escape') { closeSheet(); return; }
  if (e.key !== 'Tab') return;

  var focusable = Array.from(sheet.querySelectorAll(FOCUSABLE));
  if (!focusable.length) return;

  var first = focusable[0];
  var last  = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
  }
}

if (hamburger) {
  hamburger.addEventListener('click', function () {
    if (sheetOpen) closeSheet(); else openSheet();
  });
}
if (closeBtn)  { closeBtn.addEventListener('click', closeSheet); }
if (backdrop)  { backdrop.addEventListener('click', closeSheet); }

if (sheet) {
  sheet.querySelectorAll('.sheet-link').forEach(function (link) {
    link.addEventListener('click', closeSheet);
  });
}

/* ─────────────────────────────────────────────
   FAQ Accordion
───────────────────────────────────────────── */
var faqContainer = document.getElementById('faq-container');

if (faqContainer) {
  faqContainer.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq-question');
    if (!btn) return;
    var item = btn.closest('.faq-item');
    if (!item) return;

    var isOpen = item.classList.contains('faq-item-open');

    faqContainer.querySelectorAll('.faq-item-open').forEach(function (openItem) {
      openItem.classList.remove('faq-item-open');
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('faq-item-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ─────────────────────────────────────────────
   Typewriter Email-Capture CTA
───────────────────────────────────────────── */
function initEmailCTA() {
  var reserveBtn  = document.getElementById('gp-reserve-btn');
  var emailForm   = document.getElementById('gp-email-form');
  var emailInput  = document.getElementById('gp-email-input');
  var arrowSvg    = document.getElementById('gp-arrow-svg');
  var checkSvg    = document.getElementById('gp-check-svg');

  if (!reserveBtn || !emailForm) return;

  var typingTimer   = null;
  var capturedEmail = '';

  function clearTyping() {
    if (typingTimer !== null) { clearInterval(typingTimer); typingTimer = null; }
  }

  function startTypewriter(text, speed, onComplete) {
    clearTyping();
    emailInput.placeholder = '';

    if (reducedMotion) {
      emailInput.placeholder = text;
      if (onComplete) onComplete();
      return;
    }

    var i = 0;
    typingTimer = setInterval(function () {
      if (i < text.length) {
        emailInput.placeholder += text[i];
        i++;
      } else {
        clearTyping();
        if (onComplete) onComplete();
      }
    }, speed);
  }

  function resetToStateA() {
    clearTyping();
    emailInput.value       = '';
    emailInput.placeholder = '';
    if (arrowSvg) arrowSvg.style.display = '';
    if (checkSvg) checkSvg.style.display = 'none';
    emailForm.style.display  = 'none';
    reserveBtn.style.display = '';
  }

  reserveBtn.addEventListener('click', function () {
    reserveBtn.style.display = 'none';
    emailForm.style.display  = 'flex';
    emailInput.focus();
    startTypewriter('Reserve a date — your email here', 60, null);
  });

  emailForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearTyping();
    capturedEmail = emailInput.value;

    emailInput.value = '';
    if (arrowSvg) arrowSvg.style.display = 'none';
    if (checkSvg) checkSvg.style.display = '';

    startTypewriter("We’ll be in touch within 24 hours", 30, function () {
      setTimeout(resetToStateA, 4000);
    });
  });
}

/* ─────────────────────────────────────────────
   Init
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  if (sheet) {
    sheet.setAttribute('aria-hidden', 'true');
  }

  initEmailCTA();

});
