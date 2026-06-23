// monetag.js — Ad loader with centralized config support
// Centralized config: https://raw.githubusercontent.com/yysam123456-source/craftisle-configs/main/configs/ads-config.json
(function () {
  const STORAGE_KEY = 'ads_override';
  const REMOTE_CONFIG_URL = 'https://raw.githubusercontent.com/yysam123456-source/craftisle-configs/main/configs/ads-config.json';
  const CACHE_KEY = 'ads_config_cache';
  const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  // Read localStorage override
  function getLocalOverride() {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val === 'true') return true;
    if (val === 'false') return false;
    return null;
  }

  // Fetch remote config with cache
  async function fetchRemoteConfig() {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { value, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          return value;
        }
      } catch {}
    }

    try {
      const res = await fetch(`${REMOTE_CONFIG_URL}?_t=${Date.now()}`, {
        cache: 'no-store',
        signal: AbortSignal.timeout(3000),
      });
      if (res.ok) {
        const config = await res.json();
        const enabled = config.enabled && config.monetag !== false;
        localStorage.setItem(CACHE_KEY, JSON.stringify({ value: enabled, timestamp: Date.now() }));
        return enabled;
      }
    } catch {}

    // Fall back to window.ADVER_ENABLE (backward compatibility)
    return window.ADVER_ENABLE === 'true';
  }

  // Load Monetag Vignette Banner
  function loadAd() {
    const s = document.createElement('script');
    s.dataset.zone = '11117037';
    s.src = 'https://n6wxm.com/vignette.min.js';
    document.body.appendChild(s);
  }

  // Main logic
  (async function () {
    // 1. Check localStorage override
    const localOverride = getLocalOverride();
    if (localOverride !== null) {
      if (localOverride) loadAd();
      return;
    }

    // 2. Fetch remote config
    const enabled = await fetchRemoteConfig();
    if (enabled) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAd);
      } else {
        loadAd();
      }
    }
  })();

  // Expose toggle function for settings button
  window.__toggleAds = function () {
    const current = localStorage.getItem(STORAGE_KEY) === 'true';
    localStorage.setItem(STORAGE_KEY, (!current).toString());
    location.reload();
  };
})();
