const CACHE_NAME = 'nafea-portfolio-v5';
const ASSETS = [
  './',
  './index.html',
  './404.html',
  './style.css',
  './translations.js',
  './cv-generator.js',
  './manifest.json',
  './fire_crown.webp',
  './sitemap.xml',
  './robots.txt',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap',
  'https://unpkg.com/aos@2.3.1/dist/aos.css',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://unpkg.com/aos@2.3.1/dist/aos.js',
  'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js',
  'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js'
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

// Fetch: network-first strategy (try network, fallback to cache)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
