/**
 * Icon reference — matches app lib/utils/iconMapping.ts (HugeIcons semantics)
 * Use: include this script, then CC_Icons.get('home') returns SVG string.
 * In HTML use: <span class="cc-icon cc-icon-20" data-icon="home"></span>
 * and run CC_Icons.inject() after DOM ready to replace with SVG.
 */
(function () {
  var stroke = 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var icons = {
    home: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    business: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="2"/><line x1="15" y1="22" x2="15" y2="2"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
    cube: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    'wallet-outline': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    'help-circle': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    'help-circle-outline': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09A1.65 1.65 0 0010 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
    'settings-outline': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09A1.65 1.65 0 0010 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'trending-up': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    'information-circle': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    'chevron-forward': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><polyline points="9 18 15 12 9 6"/></svg>',
    'arrow-back': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    'arrow-forward': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'arrow-down': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
    'arrow-up': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
    checkmark: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><polyline points="20 6 9 17 4 12"/></svg>',
    'checkmark-circle': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    'document-text': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    document: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    'alert-circle': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    'finger-print': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M12 11a3 3 0 013 3c0 1.12-.64 2.1-1.57 2.62"/><path d="M12 20.5v.5"/><path d="M12 3v2"/><path d="M3 12h2"/><path d="M19 12h2"/><path d="M5.6 5.6l1.4 1.4"/><path d="M17 17l1.4 1.4"/><path d="M5.6 18.4l1.4-1.4"/><path d="M17 7l1.4-1.4"/><path d="M12 20.5a7 7 0 01-7-7c0-1.5.4-2.9 1.1-4.1"/><path d="M12 3.5a7 7 0 017 7c0 1.5-.4 2.9-1.1 4.1"/></svg>',
    add: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    hourglass: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    person: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    security: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>',
    storefront: '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M3 9l9-4 9 4"/><path d="M4 22h16"/><path d="M5 22V9l7 4 7-4v13"/></svg>',
    'storefront-outline': '<svg viewBox="0 0 24 24" fill="none" ' + stroke + '><path d="M3 9l9-4 9 4"/><path d="M4 22h16"/><path d="M5 22V9l7 4 7-4v13"/></svg>'
  };
  window.CC_Icons = {
    get: function (k) { return icons[k] || ''; },
    inject: function (root) {
      root = root || document;
      root.querySelectorAll('[data-icon]').forEach(function (el) {
        var key = el.getAttribute('data-icon');
        var svg = icons[key];
        if (svg) {
          el.innerHTML = svg;
          var s = el.querySelector('svg');
          if (s) s.setAttribute('aria-hidden', 'true');
        }
      });
    }
  };
})();
