const CACHE = 'sabai-v1.0.0';
const FILES = [
  './', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png',
  './fonts/Sarabun-thai-400.woff2', './fonts/Sarabun-thai-500.woff2', './fonts/Sarabun-thai-600.woff2', './fonts/Sarabun-thai-700.woff2', './fonts/OFL-Sarabun.txt',
  './resources/site/index.html', './resources/phupha-wordfreq.js', './resources/01-register.html', './resources/02-vowels.html',
  './resources/03-tones.html', './resources/04-numerals.html', './resources/05-classifiers.html',
  './resources/06-reading.html', './resources/07-spoken.html', './resources/08-maps.html',
  './resources/泰语学习资料全套.pdf', './resources/练习与错题本.pdf'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
