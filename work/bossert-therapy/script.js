(function () {
  'use strict';

  /* ── Video playback rate ── */
  var video = document.getElementById('bd-video');
  if (video) {
    video.addEventListener('loadedmetadata', function () {
      video.playbackRate = 1.25;
    });
  }

  /* ── Mouse parallax (rAF lerp — no GSAP needed) ── */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (video && !reduced) {
    var targetX = 0, targetY = 0;
    var currentX = 0, currentY = 0;

    document.addEventListener('mousemove', function (e) {
      var cx = window.innerWidth / 2;
      var cy = window.innerHeight / 2;
      targetX = ((e.clientX - cx) / cx) * 20;
      targetY = ((e.clientY - cy) / cy) * 20;
    });

    (function tick() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      video.style.transform = 'scale(1.08) translate(' + currentX.toFixed(2) + 'px, ' + currentY.toFixed(2) + 'px)';
      requestAnimationFrame(tick);
    }());
  }

}());

/* ── Mobile sheet for Bossert Therapy ────────────── */
(function () {
  var bdHamburger = document.getElementById('bd-hamburger');
  var bdSheet     = document.getElementById('bd-sheet');
  var bdBackdrop  = document.getElementById('bd-sheet-backdrop');
  var bdCloseBtn  = document.getElementById('bd-sheet-close');
  var bdOpen      = false;

  var BD_FOCUSABLE = 'a[href], button:not([disabled])';

  function bdOpenSheet() {
    bdOpen = true;
    bdSheet.classList.add('open');
    bdBackdrop.style.display = 'block';
    requestAnimationFrame(function () { bdBackdrop.classList.add('open'); });
    document.body.style.overflow = 'hidden';
    bdHamburger.setAttribute('aria-expanded', 'true');
    bdHamburger.classList.add('is-open');
    bdSheet.removeAttribute('aria-hidden');

    var links = bdSheet.querySelectorAll('.bd-sheet-link');
    links.forEach(function (link, i) {
      link.style.transitionDelay = (0.18 + i * 0.07) + 's';
    });

    setTimeout(function () {
      var first = bdSheet.querySelector(BD_FOCUSABLE);
      if (first) first.focus();
    }, 50);

    document.addEventListener('keydown', bdHandleKeydown);
  }

  function bdCloseSheet() {
    bdOpen = false;
    bdSheet.classList.remove('open');
    bdBackdrop.classList.remove('open');
    setTimeout(function () { bdBackdrop.style.display = 'none'; }, 320);
    document.body.style.overflow = '';
    bdHamburger.setAttribute('aria-expanded', 'false');
    bdHamburger.classList.remove('is-open');
    bdSheet.setAttribute('aria-hidden', 'true');

    var links = bdSheet.querySelectorAll('.bd-sheet-link');
    links.forEach(function (link) { link.style.transitionDelay = '0s'; });

    bdHamburger.focus();
    document.removeEventListener('keydown', bdHandleKeydown);
  }

  function bdHandleKeydown(e) {
    if (e.key === 'Escape') { bdCloseSheet(); return; }
    if (e.key !== 'Tab') return;
    var focusable = Array.from(bdSheet.querySelectorAll(BD_FOCUSABLE));
    if (!focusable.length) return;
    var first = focusable[0];
    var last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }

  if (bdHamburger) {
    bdHamburger.addEventListener('click', function () {
      if (bdOpen) bdCloseSheet(); else bdOpenSheet();
    });
  }
  if (bdCloseBtn)  { bdCloseBtn.addEventListener('click', bdCloseSheet); }
  if (bdBackdrop)  { bdBackdrop.addEventListener('click', bdCloseSheet); }
  if (bdSheet) {
    bdSheet.querySelectorAll('.bd-sheet-link').forEach(function (link) {
      link.addEventListener('click', bdCloseSheet);
    });
  }
}());
