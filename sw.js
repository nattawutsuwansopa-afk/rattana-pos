const CACHE_NAME = 'rattana-pos-v6.18.17-responsive-fit-shift-close';
const RUNTIME_CACHE = 'rattana-pos-runtime-v6.18.17';
const CORE = [
  './',
  './index.html',
  './offline.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME && k !== RUNTIME_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(res => {
      const copy=res.clone(); caches.open(RUNTIME_CACHE).then(c=>c.put(req,copy)); return res;
    }).catch(async()=> (await caches.match(req)) || (await caches.match('./index.html')) || (await caches.match('./offline.html'))));
    return;
  }
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy=res.clone(); caches.open(RUNTIME_CACHE).then(c=>c.put(req,copy)); return res;
    })));
    return;
  }
  // CDN libraries: use cached copy after the first successful online load.
  event.respondWith(caches.match(req).then(cached => {
    const fresh=fetch(req).then(res=>{const copy=res.clone();caches.open(RUNTIME_CACHE).then(c=>c.put(req,copy));return res;}).catch(()=>cached);
    return cached || fresh;
  }));
});
