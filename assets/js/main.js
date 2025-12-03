// IntersectionObserver to animate the section title when it enters the viewport
(function () {
  'use strict';

  // Respect user preference for reduced motion
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // don't animate if user prefers reduced motion

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

