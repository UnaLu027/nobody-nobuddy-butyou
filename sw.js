const CACHE_NAME = "nobody-no-buddy-assets-v5";

const ASSETS = [
  "./assets/music.mp3",
  "./assets/display/cover.jpg",
  "./assets/display/question-1.jpg",
  "./assets/display/question-2.jpg",
  "./assets/display/question-3.jpg",
  "./assets/display/question-4.jpg",
  "./assets/display/question-5.jpg",
  "./assets/display/result-deer.jpg",
  "./assets/display/result-sheep.jpg",
  "./assets/display/result-raccoon.jpg",
  "./assets/display/result-lion.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  const isAppShell =
    event.request.mode === "navigate" ||
    requestUrl.pathname.endsWith("/") ||
    requestUrl.pathname.endsWith("/index.html") ||
    requestUrl.pathname.endsWith(".html") ||
    requestUrl.pathname.endsWith(".css") ||
    requestUrl.pathname.endsWith(".js");

  if (isAppShell) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then((response) => response)
        .catch(() => caches.match(event.request)),
    );
    return;
  }

  const isMediaAsset = requestUrl.pathname.includes("/assets/display/") ||
    requestUrl.pathname.endsWith("/music.mp3");

  if (isMediaAsset) {
    event.respondWith(
      caches.match(event.request)
        .then((cached) => cached || fetch(event.request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })),
    );
  }
});
