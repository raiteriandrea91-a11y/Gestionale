// Service worker minimo: serve solo a soddisfare il requisito di installabilità PWA.
// Non mette in cache nulla (l'app dipende da script CDN e da Google Drive per il sync),
// quindi ogni richiesta passa semplicemente in rete come al solito.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => { /* passthrough */ });
