self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('cadenshae-store').then((cache) => cache.addAll([
            '/pwatest.html',
            '/android-chrome-192x192.png',
            '/android-chrome-512x512.png',
            '/apple-touch-icon.png',
            '/maskable_icon_x512.png'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    //console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});
