// Sabai — offline service worker
// Cache-first so the whole app works with no signal in Thailand.
const CACHE_NAME = "sabai-cache-v2";
const CORE_ASSETS = [
  "./thailand-trip-app.html",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./sw.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn("Some assets failed to precache:", err);
      })
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          // Cache successful responses (fonts, icons, app shell) for offline use
          if (response && response.ok) {
            const url = event.request.url;
            if (url.startsWith(self.location.origin) || url.includes("fonts.g")) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            }
          }
          return response;
        })
        .catch(() => {
          // Offline: serve cached main page for navigation requests
          if (event.request.mode === "navigate") {
            return caches.match("./thailand-trip-app.html");
          }
          return cached;
        });
    })
  );
});
