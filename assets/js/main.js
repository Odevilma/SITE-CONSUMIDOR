(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  function onIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var target = document.getElementById('atuacao-title');
    if (!target) return;

    var observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    observer.observe(target);
  });
})();