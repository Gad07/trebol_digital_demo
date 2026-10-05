// Service Worker placeholder para evitar 404 en navegadores con PWA previa
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
