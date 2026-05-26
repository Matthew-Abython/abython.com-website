(function () {
  var wrap = document.querySelector('.work-card-iframe-wrap');
  if (!wrap) return;
  var iframe = wrap.querySelector('.work-card-iframe');
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
}());
