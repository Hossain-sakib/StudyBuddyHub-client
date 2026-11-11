// Apply the saved appearance before styles paint; never read account data here.
try {
  var appearance = localStorage.getItem('studybuddy-appearance') || 'system';
  var dark = appearance === 'dark' || appearance === 'system' && matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
} catch (_) { /* Keep the accessible default if storage is unavailable. */ }
