const CACHE_NAME = 'text-thingy-v1';
     const ASSETS = [
       '/text-thingy/',
       '/text-thingy/index.html',
       '/text-thingy/script.js',
       '/text-thingy/icon-192x192.png',
       '/text-thingy/icon-512x512.png'
     ];

     self.addEventListener('install', (event) => {
       event.waitUntil(
         caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
       );
     });

     self.addEventListener('fetch', (event) => {
       event.respondWith(
         caches.match(event.request).then((response) => response || fetch(event.request))
       );
     });