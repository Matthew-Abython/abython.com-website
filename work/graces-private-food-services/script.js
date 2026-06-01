(function () {
  'use strict';

  /* ── Smooth-scroll for internal anchor links ── */
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ── Book button subtle pulse to draw attention ── */
  function initBookBtn() {
    var btn = document.getElementById('gp-book-btn');
    if (!btn) return;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    var scale = 1;
    var dir   = 1;
    var frame;

    function pulse() {
      scale += dir * 0.0003;
      if (scale >= 1.015) dir = -1;
      if (scale <= 0.990) dir =  1;
      btn.style.transform = 'scale(' + scale + ')';
      frame = requestAnimationFrame(pulse);
    }

    btn.addEventListener('mouseenter', function () {
      cancelAnimationFrame(frame);
      btn.style.transform = '';
    });
    btn.addEventListener('mouseleave', pulse);

    setTimeout(function () { pulse(); }, 1800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAnchors();
      initBookBtn();
    });
  } else {
    initAnchors();
    initBookBtn();
  }
}());
