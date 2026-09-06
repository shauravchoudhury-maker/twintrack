// sw.js — Twin Track offline support.
//
// The app has to work on a plane, in a car, and on hotel wifi, so the whole
// thing is precached. It is also going to be edited between now and December,
// so it must never serve a stale copy once a new version is deployed.
//
// GitHub Pages serves with `Cache-Control: max-age=600`, and both cache.add()
// and a plain fetch() read THROUGH the browser's HTTP cache. Without the
// explicit cache modes below, a freshly installed worker can precache
// ten-minute-old files under a brand new cache name and the app stays stale
// even though the version bumped.

const CACHE = "twintrack-v2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png"];
const NET_TIMEOUT_MS = 3000;

// Straight from the network, never through the HTTP cache.
async function precacheFresh(cache, url) {
  const res = await fetch(new Request(url, { cache: "reload", credentials: "same-origin" }));
  if (res && res.ok) await cache.put(url, res);
}

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(SHELL.map((u) => precacheFresh(c, u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Always asks the server whether its copy is current; unchanged files come
// back 304 with no body, so this stays cheap.
function revalidating(req) {
  return fetch(new Request(req.url, { cache: "no-cache", credentials: "same-origin" }));
}

// Prefer the network so a deploy shows up on the next open, but never let a
// slow or absent connection block the page.
async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  const fetching = revalidating(req)
    .then((res) => { if (res && res.status === 200 && res.type === "basic") cache.put(req, res.clone()); return res; })
    .catch(() => null);
  const cached = await cache.match(req);
  if (!cached) return (await fetching) || cache.match("./index.html");
  const winner = await Promise.race([
    fetching,
    new Promise((r) => setTimeout(() => r(null), NET_TIMEOUT_MS)),
  ]);
  return winner || cached;
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req);
  const fetching = revalidating(req)
    .then((res) => { if (res && res.status === 200 && res.type === "basic") cache.put(req, res.clone()); return res; })
    .catch(() => null);
  return cached || (await fetching) || cache.match("./index.html");
}

const isCode = (url) => /\.(?:html|js|css|webmanifest)$/i.test(url.pathname) || url.pathname.endsWith("/");

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts is cross-origin and versioned — cache it on first use so the
  // typography survives offline.
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(CACHE).then(async (c) => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const res = await fetch(req); if (res && (res.ok || res.type === "opaque")) c.put(req, res.clone()); return res; }
      catch (err) { return hit || Response.error(); }
    }));
    return;
  }

  if (url.origin !== location.origin) return;

  if (req.mode === "navigate" || isCode(url)) {
    e.respondWith(networkFirst(req).then((r) => r || caches.match("./index.html")));
    return;
  }
  e.respondWith(staleWhileRevalidate(req));
});
