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
