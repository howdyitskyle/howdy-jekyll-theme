// Howdy Theme - Dark Mode Toggle
(function() {
  'use strict';

  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) return;

  const sunIcon = toggleButton.querySelector('.sun-icon');
  const moonIcon = toggleButton.querySelector('.moon-icon');
  const root = document.documentElement;

  // Update icon visibility
  function updateIcon(theme) {
    if (!sunIcon || !moonIcon) return;
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }

  // Set theme
  function setTheme(theme) {
    if (theme === 'dark') {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    } else {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    }
    localStorage.setItem('howdy-theme', theme);
    updateIcon(theme);
  }

  // Initialize - check current theme from class
  const currentTheme = root.classList.contains('dark-mode') ? 'dark' : 'light';
  updateIcon(currentTheme);

  // Toggle on click
  toggleButton.addEventListener('click', function() {
    const newTheme = root.classList.contains('dark-mode') ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // Only update if user hasn't set a preference
    if (!localStorage.getItem('howdy-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
