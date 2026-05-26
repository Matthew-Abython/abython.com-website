(function () {
  var video = document.getElementById('bg-video');
  var fadingOut = false;
  var rafId = null;

  // Remove loop so `ended` fires; loop attr is a no-JS fallback
  video.removeAttribute('loop');

  function fadeTo(target, duration, onDone) {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    var startTime = null;
    var from = parseFloat(video.style.opacity) || 0;

    function step(now) {
      if (startTime === null) startTime = now;
      var t = Math.min((now - startTime) / duration, 1);
      video.style.opacity = from + (target - from) * t;
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        rafId = null;
        if (onDone) onDone();
      }
    }

    rafId = requestAnimationFrame(step);
  }

  // Fade in on first canplay, or immediately if already ready
  if (video.readyState >= 3) {
    fadeTo(1, 500);
  } else {
    video.addEventListener('canplay', function handler() {
      video.removeEventListener('canplay', handler);
      fadeTo(1, 500);
    });
  }

  // Fade out 0.55s before end
  video.addEventListener('timeupdate', function () {
    if (!fadingOut && video.duration && (video.duration - video.currentTime) <= 0.55) {
      fadingOut = true;
      fadeTo(0, 500);
    }
  });

  // On ended: snap to 0, pause 100ms, restart with fade-in
  video.addEventListener('ended', function () {
    video.style.opacity = 0;
    fadingOut = false;
    setTimeout(function () {
      video.currentTime = 0;
      var p = video.play();
      if (p && typeof p.then === 'function') {
        p.then(function () { fadeTo(1, 500); }).catch(function () {});
      } else {
        fadeTo(1, 500);
      }
    }, 100);
  });

  // Email form: visual only
  var form = document.querySelector('.email-bar');
  if (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); });
  }
}());
