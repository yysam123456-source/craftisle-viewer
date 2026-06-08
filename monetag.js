// monetag.js — Ad loader & toggle controller
// 读取顺序：window.ADVER_ENABLE（Vercel 环境变量）> localStorage 覆盖
(function () {
  const STORAGE_KEY = 'adver_enable';

  // 1. 优先读 Vercel 注入的 window.ADVER_ENABLE
  let enabled = window.ADVER_ENABLE === 'true';

  // 2. localStorage 可以覆盖（开发/调试用）
  const localOverride = localStorage.getItem(STORAGE_KEY);
  if (localOverride !== null) {
    enabled = localOverride === 'true';
  }

  // 3. 暴露给全局，供调试
  window.ADVER_ENABLE = enabled ? 'true' : 'false';

  // Load Monetag Vignette Banner when enabled
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
})();
