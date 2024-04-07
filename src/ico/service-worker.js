var cacheName = 'Concierge v1.1';

var cacheAssets = [
    '/css/site.css',
    '/js/site.js',
]

self.addEventListener('install', e => {
    console.log('Concierge service worker: Installed');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Concierge service worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );

});    

self.addEventListener('activate', e => {
    console.log('Concierge service worker: Installed');
}); 

self.addEventListener('fetch', e => {
    console.log('Concierge service worker: Fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

