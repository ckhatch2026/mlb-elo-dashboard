// Minimal service worker — just enough to satisfy Chrome's "installable"
// criteria for Add to Home Screen. Live odds/ratings fetches always go to
// the network (never cached), since stale data would be actively wrong.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request));
});
