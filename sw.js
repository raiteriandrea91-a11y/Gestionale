// Service worker minimo: serve solo a soddisfare il requisito di installabilità PWA.
// Non mette in cache nulla (l'app dipende da script CDN e da Google Drive per il sync),
// quindi ogni richiesta passa semplicemente in rete come al solito.
// IMPORTANTE: il browser rileva un aggiornamento dell'app SOLO se il contenuto di questo file
// cambia byte per byte rispetto a quello già installato (non basta modificare index.html).
// Cambiare questo numero a ogni pubblicazione di una nuova versione dell'app.
const SW_VERSION = 1;
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => { /* passthrough */ });
