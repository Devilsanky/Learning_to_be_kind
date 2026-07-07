const APP_VERSION = "learning-kind-pwa-v2";
const STATIC_CACHE = `${APP_VERSION}-static`;
const PAGE_CACHE = `${APP_VERSION}-pages`;
const MEDIA_CACHE = `${APP_VERSION}-media`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./levels-data.js",
  "./manifest.json",
  "./icons/icon.svg",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg",
  "./icons/icon-maskable.svg",
  "./icons/apple-touch-icon.svg",
  "./icons/favicon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => ![STATIC_CACHE, PAGE_CACHE, MEDIA_CACHE].includes(cacheName))
          .map((cacheName) => caches.delete(cacheName))
      );

      if ("navigationPreload" in self.registration) {
        try {
          await self.registration.navigationPreload.enable();
        } catch (error) {
          // Navigation preload is optional.
        }
      }

      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (!requestUrl.protocol.startsWith("http")) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(event));
    return;
  }

  if (isMediaRequest(event.request)) {
    event.respondWith(cacheFirst(event.request, MEDIA_CACHE));
    return;
  }

  if (isStaticAssetRequest(event.request)) {
    event.respondWith(staleWhileRevalidate(event.request, STATIC_CACHE));
  }
});

function isStaticAssetRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.toLowerCase();

  return (
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "manifest" ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js") ||
    pathname.endsWith(".json") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".ico")
  );
}

function isMediaRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.toLowerCase();

  return (
    request.destination === "image" ||
    request.destination === "audio" ||
    request.destination === "font" ||
    /\.(png|jpg|jpeg|gif|webp|avif|svg|mp3|wav|ogg|m4a|aac|flac|woff|woff2|ttf|otf)$/i.test(pathname)
  );
}

async function handleNavigationRequest(event) {
  try {
    const preloadResponse = await event.preloadResponse;
    if (preloadResponse) {
      const pageCache = await caches.open(PAGE_CACHE);
      pageCache.put(event.request, preloadResponse.clone());
      return preloadResponse;
    }

    const networkResponse = await fetch(event.request);
    const pageCache = await caches.open(PAGE_CACHE);
    pageCache.put(event.request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cachedPage =
      (await caches.match(event.request, { ignoreSearch: false })) ||
      (await caches.match("./index.html", { ignoreSearch: true })) ||
      (await caches.match("./", { ignoreSearch: true }));

    if (cachedPage) {
      return cachedPage;
    }

    throw error;
  }
}

async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  const networkResponse = await fetch(request);
  await putInCache(cacheName, request, networkResponse.clone());
  return networkResponse;
}

async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  const fetchPromise = fetch(request)
    .then(async (networkResponse) => {
      await putInCache(cacheName, request, networkResponse.clone());
      return networkResponse;
    })
    .catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

async function putInCache(cacheName, request, response) {
  if (!response || (!response.ok && response.type !== "opaque")) {
    return;
  }

  const cache = await caches.open(cacheName);
  await cache.put(request, response);
}
