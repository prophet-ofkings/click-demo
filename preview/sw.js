/* Click Capital PWA Service Worker - GitHub Pages preview */
const CACHE_NAME = 'click-capital-preview-v2';

const PRECACHE = [
  './index.html',
  './',
  './shared-native.css',
  './design-tokens.css',
  './preview-alignment.css',
  './favicon.png',
  './icon.png',
  './adaptive-icon.png',
  './logo.png',
  './manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(request).then((cached) => {
          if (cached) return cached;
          if (request.mode === 'navigate') {
            return caches.match(new URL('./index.html', self.location.href)).then((r) => r || new Response('Offline', { status: 503, statusText: 'Service Unavailable' }));
          }
          return new Response('', { status: 503, statusText: 'Offline' });
        })
      )
  );
});
