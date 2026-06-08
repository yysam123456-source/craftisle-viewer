// monetag.js — Ad loader & toggle controller
// Usage: <script src="/monetag.js"></script> in </head>
(function () {
  const STORAGE_KEY = 'adver_enable';

  // Read toggle state from localStorage, default OFF (safe for AdSense application)
  const enabled = localStorage.getItem(STORAGE_KEY) === 'true';
  window.ADVER_ENABLE = enabled ? 'true' : 'false';

  // Load Monetag Vignette Banner when enabled (wait for body to exist)
  if (enabled) {
    const loadAd = function () {
      const s = document.createElement('script');
      s.dataset.zone = '11117037';
      s.src = 'https://n6wxm.com/vignette.min.js';
      document.body.appendChild(s);
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadAd);
    } else {
      loadAd();
    }
  }

  // Expose toggle function for the settings button
  window.__toggleAds = function () {
    const current = localStorage.getItem(STORAGE_KEY) === 'true';
    localStorage.setItem(STORAGE_KEY, (!current).toString());
    location.reload();
  };

  // Show/hide the ad toggle button (double-click footer 5 times to reveal)
  window.__footerClicks = 0;
  window.__showAdToggle = function () {
    window.__footerClicks++;
    if (window.__footerClicks >= 5) {
      const btn = document.getElementById('__ad-toggle-btn');
      if (btn) btn.style.display = 'block';
      window.__footerClicks = 0;
    }
    setTimeout(() => { window.__footerClicks = 0; }, 3000);
  };
})();
