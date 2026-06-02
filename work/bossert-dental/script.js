(function () {
  'use strict';

  /* ── Canvas particle-network background ── */
  var canvas = document.getElementById('bd-canvas');
  var ctx    = canvas.getContext('2d');
  var W, H, particles, rafId;

  var GREEN_HSLA = 'hsla(119, 99%, 46%, ';
  var WHITE_RGBA = 'rgba(244, 244, 244, ';
  var LINK_DIST  = 110;
  var COUNT      = 90;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeParticle() {
    return {
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - 0.5) * 0.26,
      vy:    (Math.random() - 0.5) * 0.26,
      r:     Math.random() * 4 + 2.5,
      green: Math.random() < 0.16
    };
  }

  function init() {
    resize();
    particles = [];
    for (var i = 0; i < COUNT; i++) particles.push(makeParticle());
    if (!reduced) loop();
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);

    var i, j, a, b, dx, dy, d, alpha;

    for (i = 0; i < particles.length; i++) {
      a = particles[i];
      a.x += a.vx;
      a.y += a.vy;
      if (a.x < 0 || a.x > W) a.vx *= -1;
      if (a.y < 0 || a.y > H) a.vy *= -1;

      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, 6.2832);
      ctx.fillStyle = a.green
        ? GREEN_HSLA + '0.85)'
        : WHITE_RGBA + '0.55)';
      ctx.fill();

      for (j = i + 1; j < particles.length; j++) {
        b  = particles[j];
        dx = a.x - b.x;
        dy = a.y - b.y;
        d  = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          alpha = (1 - d / LINK_DIST) * 0.20;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = (a.green || b.green)
            ? GREEN_HSLA + alpha + ')'
            : WHITE_RGBA + alpha + ')';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    }

    rafId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', function () {
    cancelAnimationFrame(rafId);
    resize();
    particles.forEach(function (p) {
      if (p.x > W) p.x = Math.random() * W;
      if (p.y > H) p.y = Math.random() * H;
    });
    if (!reduced) loop();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
