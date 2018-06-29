let cacheName = 'cache-v1';
let urlsToCache = [
  '/7daysofcode/',
  './index.html',
  './logo.png',
  './styles/main.css',
  './styles/mdb.min.css',
  './scripts/main.js',
];

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
    .match(event.request)
    .then(response => response || fetch(event.request))
  );
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(urlsToCache))
  );
});