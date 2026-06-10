// Howdy Jekyll Theme - Mobile Navigation Toggle

(function() {
  const root = document.documentElement;
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  let navClosing = false;

  function closeNav() {
    navClosing = true;
    root.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function onNavTransitionEnd() {
    navClosing = false;
  }

  nav.addEventListener('transitionend', onNavTransitionEnd);

  function updateNav() {
    const isOpen = root.classList.contains('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggle.addEventListener('click', function() {
    root.classList.toggle('nav-open');
    updateNav();
  });

  const overlay = document.querySelector('.nav-overlay');
  if (overlay) {
    overlay.addEventListener('click', function() {
      closeNav();
    });
  }

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      closeNav();
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && root.classList.contains('nav-open')) {
      closeNav();
    }
  });

  window.howdyNavIsClosing = function() {
    return navClosing;
  };

  window.howdyNavIsOpen = function() {
    return root.classList.contains('nav-open');
  };

  updateNav();
})();
