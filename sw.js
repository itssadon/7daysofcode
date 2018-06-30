let cacheName = 'cache-v1';
let urlsToCache = [
  '/7daysofcode/',
  '../index.html',
  '../images/logo.png',
  '../styles/themes/',
  '../styles/main.css',
  '../styles/pace.min.css',
  '../styles/semantic.min.css',
  '../scripts/jquery.min.js',
  '../scripts/main.js',
  '../scripts/pace.min.js',
  '../scripts/semantic.min.js'
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