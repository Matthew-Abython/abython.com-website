(function () {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Fade-up reveal on scroll
  if (!reducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal-ready').forEach((el) => revealObserver.observe(el));
  }

  // Experience gallery video: play when in view, pause when out
  const galleryVideo = document.querySelector('.ud-exp-video video');
  if (galleryVideo) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            galleryVideo.play().catch(() => {});
          } else {
            galleryVideo.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    videoObserver.observe(galleryVideo);
  }
})();
