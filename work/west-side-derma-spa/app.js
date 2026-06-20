(function () {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var video = document.querySelector('.wsds-hero-video');
  if (video) {
    video.play().catch(function () {});
  }

  if (reducedMotion) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-ready').forEach(function (el) {
    observer.observe(el);
  });
})();
