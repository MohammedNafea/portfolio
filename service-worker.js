const CACHE_NAME = 'nafea-portfolio-v2026-b6';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './translations.js',
  './cv-generator.js',
  './manifest.json',
  './logo.svg',
  './fire_crown.webp',
  './flutter_cert.webp',
  './data_cert.webp',
  './mac_cert_1.webp',
  './mac_cert_2.webp',
  './adhkar_1.webp',
  './adhkar_2.webp',
  './adhkar_3.webp',
  './offline.html',
  './crown_data.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&family=Outfit:wght@300;400;600;800&display=swap',
  'https://unpkg.com/aos@2.3.4/dist/aos.css',
  'https://unpkg.com/aos@2.3.4/dist/aos.js',
  'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js',
  'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js'
];

// Install: cache assets and skip waiting to activate immediately
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate: delete all old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: network-first, fallback to cache, then offline page for navigation
self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    // For page navigation: network → cache → offline.html
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request).then((r) => r || caches.match('./offline.html')))
    );
  } else {
    // For other resources: network → cache
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
  }
});
