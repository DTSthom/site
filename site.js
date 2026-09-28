document.documentElement.classList.add('js');

/* Theme toggle: system preference by default, an explicit choice is remembered. */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var dark = root.dataset.theme === 'dark' ||
      (!root.dataset.theme && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('dts-theme', root.dataset.theme); } catch (e) {}
  });
})();

/* Scroll reveal: sections start visible without JS or with reduced motion. */
(function () {
  var els = [].slice.call(document.querySelectorAll('.rv'));
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
    return;
  }
  document.querySelectorAll('.hero .rv').forEach(function (e, i) {
    e.style.transitionDelay = (i * 90) + 'ms';
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (e) { io.observe(e); });
})();
