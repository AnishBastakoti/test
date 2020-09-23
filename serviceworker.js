const cacheTitle = 'new';
const cacheVersion = 'a1b1';
const cacheName = cacheTitle + '-' + cacheVersion;
const urlsToCache = [
  '/',
  'index.html',
  'stylesheet.css',
  'imag.jpg',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request) ||
      fetch(event.request)
  );
});
