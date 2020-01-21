'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "22ca8a179c514ad2bfadad8934944889",
"/main.dart.js": "fcb1f6166ff04b6f92ab0ff14289fc84",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "ddf31fd6dacdf8ef8f25a3a0465bfa51",
"/assets/LICENSE": "2a437abc8a87d9f6878bf97ff5e6fe40",
"/assets/AssetManifest.json": "3b593d8e79afa5c320510aac8242645d",
"/assets/third_party/PressStart2P-Regular.ttf": "2c404fd06cd67770807d242b2d2e5a16",
"/assets/FontManifest.json": "b2011471474615c970ed2f9fd522ec6b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
