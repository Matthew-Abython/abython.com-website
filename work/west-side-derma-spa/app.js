(function () {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var heroVideo = document.querySelector('.wsds-hero-video');
  if (heroVideo) {
    heroVideo.play().catch(function () {});
  }

  if (!reducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-ready').forEach(function (el) {
      revealObserver.observe(el);
    });

    var expVideo = document.querySelector('.wsds-exp-video');
    if (expVideo) {
      var expVideoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.play().catch(function () {});
          } else {
            entry.target.pause();
          }
        });
      }, { threshold: 0.5 });
      expVideoObserver.observe(expVideo);
    }
  }
})();
