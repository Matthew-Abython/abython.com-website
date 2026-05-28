document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var sheet     = document.getElementById('mobile-sheet');
  var backdrop  = document.getElementById('sheet-backdrop');
  var closeBtn  = document.getElementById('sheet-close');

  function openSheet() {
    sheet.classList.add('is-open');
    backdrop.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    sheet.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSheet() {
    sheet.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    sheet.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openSheet);
  if (closeBtn)  closeBtn.addEventListener('click', closeSheet);
  if (backdrop)  backdrop.addEventListener('click', closeSheet);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSheet();
  });
});
