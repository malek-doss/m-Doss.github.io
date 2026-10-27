/* malekdoss.com — the only script on the site.
   Deliberately small: the page is readable and navigable with this file absent. */
(function () {
  'use strict';

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());

  /* Mark the section the reader is actually in, using the top bar's own
     active state. Skipped entirely when the page has no in-page anchors. */
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.bar__nav a[href^="#"]')
  );
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  var targets = [];
  links.forEach(function (a) {
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) { byId[el.id] = a; targets.push(el); }
  });
  if (!targets.length) return;

  var current = null;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var a = byId[e.target.id];
      if (!a || a === current) return;
      if (current) current.removeAttribute('aria-current');
      a.setAttribute('aria-current', 'true');
      current = a;
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  targets.forEach(function (t) { io.observe(t); });
})();
