(function () {
  var wraps = document.querySelectorAll('.work-card-iframe-wrap');
  if (!wraps.length) return;
  wraps.forEach(function (wrap) {
    var iframe = wrap.querySelector('.work-card-iframe');
    if (!iframe) return;
    var ro = new ResizeObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var w = entries[i].contentRect.width;
        var h = entries[i].contentRect.height;
        var scale = w / 1440;
        iframe.style.transform = 'scale(' + scale + ')';
        iframe.style.height = (h / scale) + 'px';
      }
    });
    ro.observe(wrap);
  });
}());
