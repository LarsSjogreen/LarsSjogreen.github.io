//var CACHE_NAME = 'my-site-cache-v3.2';
var urlsToCache = [
  '/',
  '/assets/css/style.css',
  '/assets/css/mobile.css',
  '/assets/js/modernizr.js',
  '/assets/css/non-screen.css',
  '/assets/js/jquery.min.js',
  '/assets/js/headsmart.min.js',
  '/2018/05/19/busting-the-cache.html'
];


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});